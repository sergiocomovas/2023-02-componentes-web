class MiComponente extends HTMLElement {
	constructor() {
		super();

		const shadow = this.attachShadow({ mode: "open" });

		const content = document.createElement("div");
		content.textContent = "Hola, soy un componente web";

		shadow.appendChild(content);
	}

	static get observedAttributes() {
		return ["mensaje"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === "mensaje") {
			this.shadowRoot.querySelector("div").textContent = newValue;
		}
	}
}

customElements.define("webcom-nativo", MiComponente);
