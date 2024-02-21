document.addEventListener("DOMContentLoaded", function () {
  var toggleTeamBtn = document.getElementById("toggleTeamBtn");
  var toggleLessTeamBtn = document.getElementById("toggleLessTeamBtn");
  var viewLess = document.getElementById("about-us-lessview");

  viewLess.style.display = "none";

  toggleTeamBtn.addEventListener("click", function () {
    if (viewLess.style.display === "none") {
      viewLess.style.display = "block";
      toggleTeamBtn.style.display = "none";
    } else {
      viewLess.style.display = "none";
      toggleTeamBtn.style.display = "block";
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
