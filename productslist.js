document.addEventListener("DOMContentLoaded", function () {
  var productWrapper = document.querySelector(".product-wrapper");
  var developmentPhase = document.querySelector(".development-phase");

  var products = [];

  if (products.length > 0) {
    productWrapper.style.display = "block";
    developmentPhase.style.display = "none";
  } else {
    productWrapper.style.display = "none";
    developmentPhase.style.display = "block";
  }
});
