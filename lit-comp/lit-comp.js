import { html, css, LitElement } from "./lit.js";

export class MiComponenteLit extends LitElement {
	static get properties() {
		return { nombre: { type: String } };
	}

	static styles = css`
		h2 {
			color: blue;
		}

		span {
			color: orangered;
		}
	`;

	render() {
		return html` <h2>HOLA <span>${this.nombre}</span></h2> `;
	}
}

customElements.define("webcom-lit", MiComponenteLit);
