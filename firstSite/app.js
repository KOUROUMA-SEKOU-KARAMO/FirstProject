
const showNavLink=document.querySelector("header .fa-bars")


showNavLink.addEventListener("click",(e)=>{
 e.preventDefault()
 
//    document.querySelector("header ").classList.add("show-nav-link")
   document.querySelector("header ul .nav-link").classList.toggle("show-nav-link")
   document.querySelector("header .header-logo").classList.toggle("decallerImg")

//    document.querySelector("header .nav-link ").classList.remove("nav-link")

})

