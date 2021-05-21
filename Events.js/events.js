let button = document.getElementById("events");
button.addEventListener("click", function () {
  console.log("This button was clicked and the event was fired.");
});
let para = document.getElementById("para");
para.addEventListener("mouseover", function () {
  console.log("The user is reading the paragarph.");
});
