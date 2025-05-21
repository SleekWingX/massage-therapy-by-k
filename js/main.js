const bookBtn = document.getElementById("bookBtn");
const bookingModal = document.getElementById("booking-modal");
const closeBtn = document.getElementById("closeBtn");
const squareWidgetContainer = document.getElementById("square-widget-container");

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
