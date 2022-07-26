const nav = document.querySelector("nav");

 window.addEventListener("scroll", () =>{
   if(window.pageYOffset > 80){
    nav.classList.add("scrolled");
   }else{
    nav.classList.remove("scrolled");
   }
 });