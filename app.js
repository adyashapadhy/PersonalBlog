const navSlide = ()=>{
    const burger=document.querySelector('.burger');
    const nav = document.querySelector('.nav-bar');
    const navLinks=document.querySelectorAll('.nav-link')

   
    burger.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');
    

    //animate Links
    navLinks.forEach((link,index) => {
        if(link.style.animation){

            link.style.animation = '';
        } else {
            link.style.animation = link.style.animation =`navLinkFade 0.5s ease forwards ${index / 5 + 1}s`;
        }
      });
      //burger animation
      burger.classList.toggle('toggle');
    });
}

navSlide();

/*
const login = document.getElementById('login');
const loginMenu = document.getElementById('loginMenu');

login.addEventListener('click', () => {
  if(loginMenu.style.display === 'none'){
    loginMenu.style.display = 'inline';
  } else {
    loginMenu.style.display = 'none';
  }
});
*/
