const menuIcon = document.getElementById("icon-nav");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});
console.log("back");