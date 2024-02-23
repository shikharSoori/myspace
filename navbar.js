window.addEventListener("DOMContentLoaded", function () {
  var lastScrollTop = 0; // To keep track of the last scroll position
  var navbar = document.getElementById("navbar");
  var navbarHeight = navbar.offsetHeight; // Height of the navbar
  console.log(navbarHeight)
  var section = document.querySelector("section");

  function storeScrollPosition() {
    sessionStorage.setItem("scrollPosition", window.scrollY);
  }

  function restoreScrollPosition() {
    var scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
      sessionStorage.removeItem("scrollPosition");
    }
  }

  restoreScrollPosition();

  var sections = document.querySelectorAll("section");
  var navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", function () {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Determine scrolling direction
    if (scrollTop > lastScrollTop) {
      // Scrolling down
      navbar.style.transform = "translateY(-" + navbarHeight + "px)";
      sections.forEach(function (section) {
        section.style.position = "relative";
        section.style.top = 0;
      });
      navbar.style.top = "0";
      navbar.style.display = "none";
    } else {
      // Scrolling up
      navbar.style.transform = "translateY(0)";
      sections.forEach(function (section) {
        section.style.position = "relative";
        section.style.top = navbarHeight + "px";
      });
      navbar.classList.add("sticky");
      navbar.style.display = "flex";

    }

    // Update navigation links based on the section in view
    sections.forEach(function (section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.clientHeight;

      if (
        scrollTop >= sectionTop - sectionHeight * 0.25 &&
        scrollTop < sectionTop + sectionHeight - sectionHeight * 0.25
      ) {
        var sectionId = section.getAttribute("id");
        navLinks.forEach(function (link) {
          if (link.getAttribute("href").slice(1) === sectionId) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling

    storeScrollPosition();
  });
});
