import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Tcharam!");
    }

    async getHtml(){
        return `
            <div class="content">
                <h1>Aqui está, agora é só curtir!</h1>
                <p>Clique aqui para voltar ao início</p>
            </div>
            <div class="footer">
                <img src="static/assets/claqueteLado.png" class="claquete"/>
            </div>
        `;
    }
}