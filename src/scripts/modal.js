function initModal() {
  const modal = document.getElementById("modal");
  const openButton = document.getElementById("send-feedback-button");
  const closeButton = document.getElementById("close-modal-button");

  openButton.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", event => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

export default initModal;
