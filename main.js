const menuBtn = document.getElementById("menu");
const nav = document.getElementById("nav");
const closeBtn = document.getElementById("close");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});

closeBtn.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});
