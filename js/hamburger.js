var hamburger = document.querySelector('.hamburger');
var navMenu = document.getElementById('nav-menu');
var navLink = document.querySelectorAll('.nav-link');



hamburger.addEventListener("click", () => {
   toggleMenu();

    let menuOpen = hamburger.classList.contains('active'); // Assuming you toggle an 'active' class
  
    if (menuOpen) {
      document.body.style.overflow= 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow= 'auto'; // Enable scrolling
    }
});

navLink.forEach(n => n.addEventListener('click', closeMenu));


function toggleMenu(){
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}


function closeMenu(){
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    closeMenu();
    document.body.style.overflow = 'auto';
  }
});


