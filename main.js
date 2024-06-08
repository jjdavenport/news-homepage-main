const menuBtn = document.getElementById("menu");
const closeBtn = document.getElementById("close");

menuBtn.addEventListener("click", () => {
  const nav = document.getElementById("nav");
  const overlay = document.getElementById("overlay");
  overlay.classList.toggle("overlay-active");
  nav.classList.toggle("nav-active");
  if (nav.classList.contains("nav-active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

closeBtn.addEventListener("click", () => {
  const nav = document.getElementById("nav");
  const overlay = document.getElementById("overlay");
  overlay.classList.toggle("overlay-active");
  nav.classList.toggle("nav-active");
  if (nav.classList.contains("nav-active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

window.addEventListener("resize", () => {
  const nav = document.getElementById("nav");
  const overlay = document.getElementById("overlay");
  const width = window.innerWidth;
  if (width >= 560) {
    nav.classList.remove("nav-active");
    overlay.classList.remove("overlay-active");
  }
});
