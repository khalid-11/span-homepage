const toggleBtn = document.getElementById("toggle-btn");
const toggleNav = document.getElementById("toggle-nav");
const toggleColse = document.getElementById("toggle-close");
const overlay = document.querySelector(".overlay");

toggleBtn.addEventListener("click", () => {
  toggleNav.classList.add("show");
  toggleColse.classList.add("show");
  overlay.style.display = "block";
});
toggleColse.addEventListener("click", () => {
  toggleNav.classList.remove("show");
  toggleColse.classList.remove("show");
  overlay.style.display = "none";
});
