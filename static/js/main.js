const bookBtn = document.getElementById("bookBtn");
const bookingModal = document.getElementById("booking-modal");
const closeBtn = document.getElementById("closeBtn");

bookBtn.addEventListener("click", () => {
  bookingModal.style.display = "block";
});

closeBtn.onclick = () => {
  bookingModal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == bookingModal) {
    bookingModal.style.display = "none";
  }
};

