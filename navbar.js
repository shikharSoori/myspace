window.addEventListener("scroll", function () {
  // Sticky Navbar
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  // Active Nav Link on Scroll
  var sections = document.querySelectorAll("section");
  var navLinks = document.querySelectorAll(".nav-links a");

  var scrollPosition = window.scrollY;

  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight;

    if (
      scrollPosition >= sectionTop - sectionHeight * 0.25 &&
      scrollPosition < sectionTop + sectionHeight - sectionHeight * 0.25
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
});
