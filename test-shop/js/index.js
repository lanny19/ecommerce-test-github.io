// script.js
function showContent() {
    // Get the content div
    var contentDiv = document.getElementById('content');
  
    // Display the content div
    contentDiv.style.display = 'block';
  
    // Hide the button after it's clicked
    var button = document.querySelector('button');
    button.style.display = 'none';

    var goback2Button = document.getElementById('goback2');
    goback2Button.style.display = 'block';
    
    //hiding main page
    var mainPageDiv = document.getElementById('main-page');
    mainPageDiv.style.display = 'none';
  }
  
  function goBack() {
    // Get the content div
    var contentDiv = document.getElementById('content');
  
    // Hide the content div
    contentDiv.style.display = 'none';
  
    // Show the button again
    var button = document.querySelector('button');
    button.style.display = 'block';


    var goback2Button = document.getElementById('goback2');
    goback2Button.style.display = 'none';

    var mainPageDiv = document.getElementById('main-page');
    mainPageDiv.style.display = 'block';
  }


  // navbar responsive 

function toggleNav() {
  var itemsNavs = document.querySelector('.items-navs');
  itemsNavs.classList.toggle('show');
}


document.addEventListener("DOMContentLoaded", function() {
  // Get references to the image and the div
  var image = document.getElementById("image-click");
  var mainPageDiv = document.getElementById("main-page");

  // Add a click event listener to the image
  image.addEventListener("click", function() {
      // Change the display property of the div
      if (mainPageDiv.style.display === "none") {
        mainPageDiv.style.display = "block";
      } else {
        mainPageDiv.style.display = "none";
      }
  });
});

  

  