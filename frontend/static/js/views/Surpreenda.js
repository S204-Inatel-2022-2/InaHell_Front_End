import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Surpresa!");
    }

    async getHtml(){
        return `
            <div class="content">
                <h1>Aqui está algo legal para assitir</h1>
                <p>Clique aqui para gerar novamente</a>.
            </div>

        `;
    }
}