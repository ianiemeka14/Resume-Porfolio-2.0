let hamburger = document.querySelector('.hamburger');
let navMenu = document.getElementById('nav-menu');
let navLink = document.querySelectorAll('.nav-link');



hamburger.addEventListener("click", () => {
    openMenu();

    let menuOpen = hamburger.classList.contains('active'); // Assuming you toggle an 'active' class
  
    if (menuOpen) {
      document.body.style.overflow= 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow= 'auto'; // Enable scrolling
    }
});

navLink.forEach(n => n.addEventListener('click', closeMenu));


function openMenu(){
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}


function closeMenu(){
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}


document.onclick = function(e){
    if(e.target != navMenu && e.target.parentNode !==  hamburger){
        closeMenu();
        document.body.style.overflow= 'auto';
    }

}


