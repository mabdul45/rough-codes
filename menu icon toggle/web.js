var x = document.querySelectorAll(".nav-items, body");
function toggleChangeClass() {
  x.forEach((el) => el.classList.toggle("change"));
}

function toggleTheme() {
  var color = document.body;
  color.classList.toggle("dark-mode")