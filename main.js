/* ----- NAVIGATION BAR FUNCTION ----- */
// function myMenuFunction(){
//     var menuBtn = document.getElementById("myNavMenu");

//     if(menuBtn.className === "nav-menu"){
//       menuBtn.className += " responsive";
//     } else {
//       menuBtn.className = "nav-menu";
//     }
//   }

window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 0) {
      nav.classList.add('scrolled');
  } else {
      nav.classList.remove('scrolled');
  }
});