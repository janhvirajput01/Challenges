const open = document.getElementById("menu-button");
const close = document.getElementById("menu-close");
const openMenu = document.querySelector(".close");
console.log(openMenu);

open.addEventListener("click", () => {
  openMenu.style.display = "block";
});

close.addEventListener("click", () => {
  openMenu.style.display = "none";
});
