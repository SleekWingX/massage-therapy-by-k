const bookBtn = document.getElementById("bookBtn");
const sessionModal = document.getElementById("sessionModal");
const calendlyModal = document.getElementById("calendlyModal");
const closeSessionModal = document.getElementById("closeSessionModal");
const closeCalendlyModal = document.getElementById("closeCalendlyModal");
const sessionButtons = document.querySelectorAll(".session-btn");
const calendlyFrame = document.getElementById("calendlyFrame");

bookBtn.addEventListener("click", () => {
  sessionModal.style.display = "block";
});

closeSessionModal.onclick = () => {
  sessionModal.style.display = "none";
};

closeCalendlyModal.onclick = () => {
  calendlyModal.style.display = "none";
  calendlyFrame.src = ""; // Unload Calendly when modal closes
};

window.onclick = (event) => {
  if (event.target == sessionModal) sessionModal.style.display = "none";
  if (event.target == calendlyModal) calendlyModal.style.display = "none";
};

sessionButtons.forEach(button => {
  button.addEventListener("click", () => {
    const link = button.dataset.link;
    sessionModal.style.display = "none";
    calendlyFrame.src = link;
    calendlyModal.style.display = "block";
  });
});
