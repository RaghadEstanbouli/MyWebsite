
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
// function myFunction() {
//    document.getElementById("myDropdown").classList.toggle("show");
//  }

// // Close the dropdown if the user clicks outside of it
//  window.onclick = function(event) {
//    if (!event.target.matches('.dropbtn')) {
//      var dropdowns = document.getElementsByClassName("dropdown-content");
//      var i;
//      for (i = 0; i < dropdowns.length; i++) {
//        var openDropdown = dropdowns[i];
//        if (openDropdown.classList.contains('show')) {
//          openDropdown.classList.remove('show');
//        }
//      }
//    }
//  }

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav" ) {
    x.className += " responsive";
    
    if (document.getElementById("headertitle")!= null){
      document.getElementById("headertitle").style.display="none"
    }
  } else {
    x.className = "topnav";
    if (document.getElementById("headertitle")!= null){
    document.getElementById("headertitle").style.display="block"}

  }
}
//https://www.w3schools.com/js/js_events.asp
// code for button on Contact Us page submit popup



function changearrow() {
  var a;
  a = document.getElementById("div1");
  a.style.visibility="visible";
  setTimeout(function () {
    a.style.visibility = "hidden";
  }, 2000);
  setTimeout(function () {
    a.style.visibility = "visible";
  }, 3000);
}
changearrow();
setInterval(changearrow, 1000);


//slide show

