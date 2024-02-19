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
  careersListDiv.innerHTML = ""; // Clear existing content

  careers.forEach(function (career) {
    var careerDiv = document.createElement("div");

    var nameStrong = document.createElement("strong");
    nameStrong.textContent = career.careerName;
    careerDiv.appendChild(nameStrong);

    var areaP = document.createElement("p");
    areaP.textContent = "Area: " + career.area;
    careerDiv.appendChild(areaP);

    var jobTypeP = document.createElement("p");
    jobTypeP.textContent = "Job Type: " + career.jobType;
    careerDiv.appendChild(jobTypeP);

    var candidatesP = document.createElement("p");
    candidatesP.textContent =
      "Number of Candidates: " + career.numberOfCandidates;
    careerDiv.appendChild(candidatesP);

    var statusP = document.createElement("p");
    statusP.textContent = "Position Status: " + career.positionStatus;
    careerDiv.appendChild(statusP);

    careersListDiv.appendChild(careerDiv);
  });
}

// Function to toggle job info visibility
function closeJobs() {
  var jobInfo = document.getElementById("jobInfo");
  jobInfo.classList.add("hidden");
}

// Display careers when the page loads
window.onload = function () {
  displayCareers();
};
