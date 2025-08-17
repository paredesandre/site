/* abre e fecha menu de lista */
const menuMobile = document.querySelector('.menu-mobile');
const body       = document.querySelector('body');

menuMobile.addEventListener("click", () => {
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list","bi-x")
    : menuMobile.classList.replace("bi-x","bi-list");
    body.classList.toggle("nav-menu-active");

})

/* fecha o menu e muda para menu list */
const navItem= document.querySelectorAll('.nav-item')
navItem.forEach(item => {
    item.addEventListener("click", () => {
        if (body.classList.contains("nav-menu-active")) {
            body.classList.remove("nav-menu-active")
            menuMobile.classList.replace("bi-x","bi-list");

        }
    })
})

// anime todos os item na tela 
const item = document.querySelectorAll("[data-anime]");

 


const animeScroll = () => {
 
  const windowTop= window.pageYOffset + window.innerHeight*0.85; 
  
  item.forEach(element=> {
    
    if (windowTop > 760) {
        element.classList.add('animate');
    } else {
        element.classList.remove('animate');
    }
  })  
}

   

animeScroll();

window.addEventListener("scroll",()=> {
    animeScroll();
})

