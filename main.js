// Cursor
var cursorDot = document.querySelector(".cursor-dot");
var cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", function (e) {
  var positionX = e.clientX;
  var positionY = e.clientY;

  cursorDot.style.left = `${positionX}px`;
  cursorDot.style.top = `${positionY}px`;

  // cursorOutline.style.left = `${positionX}px`;
  // cursorOutline.style.top = `${positionY}px`;

  cursorOutline.animate(
    {
      left: `${positionX}px`,
      top: `${positionY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});

// Scroll Reveal
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1000,
  delay: 100,
  reset: true,
});

scrollReveal.reveal(
  ".img-area, .name, .title, .personal-info, .skills, .education, .objective, .experience",
  {}
);
