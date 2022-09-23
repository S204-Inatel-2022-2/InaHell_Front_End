import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Vamos lá");
    }

    async getHtml(){
        return `
            <h1>Vamos te ajudar a escolher algo ideal para assistir hoje!</h1>
            <p>Clique aqui para começar</a>.
        `;
    }
}