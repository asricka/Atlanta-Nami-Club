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

function collapsible(){
    document.getElementById("mycollapsible").classList.toggle("collapsible__content_show");
}
