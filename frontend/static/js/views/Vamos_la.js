import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Vamos lá");
  }

  async getHtml() {
    return `
            <a>Teste
            </a>
        `;
  }
}
