const menuBtn = document.getElementById("menu");
const nav = document.getElementById("nav");
const closeBtn = document.getElementById("close");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});

closeBtn.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  if (width >= 560) {
    nav.classList.remove("nav-active");
  }
});
