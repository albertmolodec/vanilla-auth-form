import { EVENT_TYPES } from "./constants";

function initModal(emitter) {
  const modal = document.getElementById("modal");
  const openButton = document.getElementById("send-feedback-button");
  const closeButton = document.getElementById("close-modal-button");

  emitter.on(EVENT_TYPES.OPEN_MODAL, () => {
    modal.classList.remove("hidden");
    document.body.classList.add("noscroll");
  });

  emitter.on(EVENT_TYPES.CLOSE_MODAL, () => {
    modal.classList.add("hidden");
    document.body.classList.remove("noscroll");
    emitter.emit(EVENT_TYPES.MODAL_IS_CLOSED);
  });

  openButton.addEventListener("click", () => {
    emitter.emit(EVENT_TYPES.OPEN_MODAL);
  });

  closeButton.addEventListener("click", () => {
    emitter.emit(EVENT_TYPES.CLOSE_MODAL);
  });

  const handleOutsideClick = event => {
    if (event.target === modal) {
      emitter.emit(EVENT_TYPES.CLOSE_MODAL);
    }
  };

  window.addEventListener("click", handleOutsideClick);
  window.addEventListener("touchend", handleOutsideClick);

  window.addEventListener("keydown", event => {
    if (event.key === "Escape") emitter.emit(EVENT_TYPES.CLOSE_MODAL);
  });
}

export default initModal;
