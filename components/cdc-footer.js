//Built web component for footer:
class Footer extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host {
          @import url('https://fonts.googleapis.com/css2?family=Beth+Ellen&display=swap');
          --font-handwritten-sloppy: 'Beth Ellen', cursive;
        }

        section {
          font-family: var(--font-handwritten-sloppy);
          font-size: 3rem;
      </style>

        <section>
        <p>✨ Built in 🇪🇺🇩🇪…  with copious amounts of 🫀 && 🧠 && ☕️ && 🎉 by <a href='https://twitter.com/curiosdevcookie'> @curiosdevcookie</a> .✨</p>
        </section>
    `;
  }
}
customElements.define('cdc-footer', Footer);
