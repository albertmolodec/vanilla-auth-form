class Modal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h1>Hello web components</h1>`;
  }
}

customElements.define('modal-window', Modal);