document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    document.querySelector('#text').textContent = "This is really cool!"
  });// Your code goes here
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );
   