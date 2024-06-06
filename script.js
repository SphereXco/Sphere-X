const header = document.querySelector("heaader");

window.addEventListener ("scroll",function(){
    header.classList.toogle ("sticky",window.scrollY >0);
});