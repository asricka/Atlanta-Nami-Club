function showForm(formId){
    document.querySelectorAll(".form-box").forEach(form => form.classList.remove("active"));
    document.getElementById(FormID).classList.add("active");
}

// function myfunc(){
//     var x = getElementById{"myNav"};
//     if (x.className == "nav"){
//         x.className += " responsive";
//     }else{
//         x.className == "nav";
//     }
// }
function openSidebar(){
    document.getElementById('myNav').classList.add('show')
}
function closeSidebar(){
    document.getElementById('myNav').classList.remove('show')
}

// hamburger.addEventListener('click', () =>{
//     if(menuOpen == False){
//         nav.style.display = "block";
//         menuOpen = true;
//     }elseif(menuOpen == true){
//         nav.style.display = "none";
//         menuOpen = false;
//     }
// })

// function showNav(){
//     document.getElementById("myNav").classList.toggle("show");
// }