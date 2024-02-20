document.addEventListener("DOMContentLoaded", function () {
  var toggleTeamBtn = document.getElementById("toggleTeamBtn");
  var toggleLessTeamBtn = document.getElementById("toggleLessTeamBtn");
  var viewLess = document.getElementById("about-us-lessview");

  // Initially hide team members
  viewLess.style.display = "none";

  // Toggle visibility of team members
  toggleTeamBtn.addEventListener("click", function () {
    if (viewLess.style.display === "none") {
      viewLess.style.display = "block";
      toggleTeamBtn.style.display = "none";
      //   toggleTeamBtn.textContent = "View Less";
    } else {
      viewLess.style.display = "none";
      toggleTeamBtn.style.display = "block";
      //   toggleTeamBtn.textContent = "View More";
    }
  });
  toggleLessTeamBtn.addEventListener("click", function () {
    if (viewLess.style.display === "block") {
      viewLess.style.display = "none";
      toggleTeamBtn.style.display = "block";

  
    } else {
      viewLess.style.display = "block";
  
    }
  });
});
