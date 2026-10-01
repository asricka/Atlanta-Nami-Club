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


//My buttons for collapsibles in Resources
function collapsible(){
    document.getElementById("mycollapsible").classList.toggle("collapsible__content_show");
}
function resource_collapsible(){
    document.getElementById("resourcescollapsible").classList.toggle("collapsible__content_show");
}
function offCampusCollapsible(){
    document.getElementById("offCampusCollapsible").classList.toggle("collapsible__content_show");
}
function identitySpecificCollapsible(){
    document.getElementById("identitySpecificCollapsible").classList.toggle("collapsible__content_show");
}
function costCollapsible(){
    document.getElementById("costCollapsible").classList.toggle("collapsible__content_show");
}
function noCostCollapsible(){
    document.getElementById("noCostCollapsible").classList.toggle("collapsible__content_show");
}
function capsCollapsible(){
    document.getElementById("capsCollapsible").classList.toggle("collapsible__content_show");
}

//My Buttons for collapsibles in NAMI @ Emory
function getInvolvedCollapsible(){
    document.getElementById("getInvolvedCollapsible").classList.toggle("collapsible__content_show");
}