const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("dropdownMenu");

toggle.addEventListener("click", (event) => {
  event.stopPropagation(); // чтобы клик по кнопке не «закрыл» меню сразу же
  menu.classList.toggle("open");
});

// Закрытие при клике вне меню
document.addEventListener("click", (event) => {
  if (!menu.contains(event.target)) {
    menu.classList.remove("open");
  }
});

// Закрытие по клавише Esc — приятный бонус для доступности
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    menu.classList.remove("open");
  }
});
