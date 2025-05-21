const bookBtn = document.getElementById("bookBtn");
const bookingModal = document.getElementById("booking-modal");
const closeBtn = document.getElementById("closeBtn");
const squareWidgetContainer = document.getElementById("square-widget-container");
const themeToggle = document.getElementById("themeToggle");

let widgetLoaded = false;

bookBtn.addEventListener("click", () => {
  bookingModal.style.display = "block";

  if (!widgetLoaded) {
    const script = document.createElement('script');
    script.src = "https://square.site/appointments/buyer/widget/ixfau8kzekkohk/LFBFBWAN87BPY.js";
    squareWidgetContainer.appendChild(script);
    widgetLoaded = true;
  }
});

closeBtn.addEventListener("click", () => {
  bookingModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == bookingModal) {
    bookingModal.style.display = "none";
  }
});

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
});