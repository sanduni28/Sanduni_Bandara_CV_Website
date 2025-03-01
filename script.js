// smooth scrolling
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50, // adjust offset for fixed navbar
          behavior: "smooth"
        });
      }
    });
  });
});

//  the typewriter effect for my name
document.addEventListener("DOMContentLoaded", function () {
  const text = "Sanduni Bandara";
  let index = 0;
  function typeWriterEffect() {
    if (index < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriterEffect, 120); // Adjust speed 
    }
  }
  typeWriterEffect();
});
