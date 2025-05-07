const bookBtn = document.getElementById("bookBtn");
const modal = document.getElementById("bookingModal");
const closeBtn = document.getElementById("closeBtn");

bookBtn.onclick = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
