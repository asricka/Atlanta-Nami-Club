// document.querySelectorAll(".collapsible__button").forEach(button => {
//         button.addEventListener("click", () => {
//              button.classList.toggle(".collapsible__content_show");
//         //  what is uncommented below is an animation that makes the collapsible content appear and disappear, but it is not working as intended. I will look at fixing this in the future.
//         // const content = button.nextElementSibling;

//         // if (content.style.display === "block") {
//            //     content.style.display = "none";
//            // } else {
//         //     content.style.display = "block";
//            // }
//        });
//     });

// Accordion for resources page
 var acc = document.getElementsByClassName("collapsible__button_left");
 var i;

 for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function() {
     /* Toggle between adding and removing the "active" class,
     to highlight the button that controls the panel */
     this.classList.toggle("active");

     /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var acc = document.getElementsByClassName("collapsible__button_right");
 var i;

 for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function() {
     /* Toggle between adding and removing the "active" class,
     to highlight the button that controls the panel */
     this.classList.toggle("active");

     /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}






//tponav responsive
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

function navDropBtn(){
    document.getElementById("myDropDwn").classList.toggle("dropdown-content-show");
}
