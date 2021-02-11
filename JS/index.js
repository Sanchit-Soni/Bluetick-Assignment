/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
const navslide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".list");
  const navLinks = document.querySelectorAll(".list li");
  //toggle
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  });
  //animate
  // navLinks.forEach((link, index) => {
  //   link.style.animation = `navLinkFade 0.5s ease forwards ${
  //     index / 10 + 1.5
  //   }s`;
  // });
};

navslide();

ScrollReveal().reveal(".card1");
ScrollReveal().reveal(".card2");

ScrollReveal().reveal(".card3");
ScrollReveal().reveal(".about-text2");
