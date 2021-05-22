console.log("Script added succesfully");
// Writing AJAX for GET Request

// Targetting the GET button
let getbtn = document.getElementById("btn1");
getbtn.addEventListener("click", function () {
  console.log("GET button was clicked");
});

// Instantiate the XHR (XML Http Request) object
const xhr = new XMLHttpRequest();

// Open the XHR object
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

// When Response is ready
let result = (xhr.onload = function () {
  if (this.status === 200) {
    console.log(this.responseText);
  } else {
    console.log("Some Error Occured, Please try after some time");
  }
});

// Send the Request
// The request will be sent once the GET button is clicked
getbtn.addEventListener("click", function () {
  xhr.send();
});


console.log('********************************');

