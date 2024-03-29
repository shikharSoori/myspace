var careers = [
  {
    careerName: "Software Engineer",
    area: "Information Technology",
    jobType: "Full-time",
    numberOfCandidates: 5,
    positionStatus: "Open",
  },
  {
    careerName: "Marketing Manager",
    area: "Marketing",
    jobType: "Full-time",
    numberOfCandidates: 3,
    positionStatus: "Closed",
  },
  {
    careerName: "Data Scientist",
    area: "Data Science",
    jobType: "Contract",
    numberOfCandidates: 2,
    positionStatus: "Open",
  },
];
function displayCareers() {
  var careersListDiv = document.getElementById("careersList");
  careersListDiv.innerHTML = ""; 

  careers.forEach(function (career) {
    var careerDiv = document.createElement("div");
    careerDiv.classList.add("careersItem");

    var innerDiv = document.createElement("div");

    var nameH1 = document.createElement("h1");
    nameH1.textContent = career.careerName;
    innerDiv.appendChild(nameH1);

    var locationP = document.createElement("p");
    locationP.textContent =
      career.area +
      " | " +
      career.jobType +
      " | " +
      career.numberOfCandidates +
      " Candidates";
    innerDiv.appendChild(locationP);

    careerDiv.appendChild(innerDiv);

    var statusP = document.createElement("p");
    statusP.textContent = "Application " + career.positionStatus;
    careerDiv.appendChild(statusP);

    careersListDiv.appendChild(careerDiv);
  });
}

function closeJobs() {
  var jobInfo = document.getElementById("jobInfo");
  jobInfo.classList.add("hidden");
}

window.onload = function () {
  displayCareers();
};
