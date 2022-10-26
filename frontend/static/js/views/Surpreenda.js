import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("PickMe");
    }

    async getHtml(){
        return `
            <div class="home_button">
                <a name="inicio" href="/"><input type="image" src="static/assets/logo.png" class="click_home"/></a>
            </div>
            <div class="content">
                <h1>Aqui está algo legal para assitir</h1>
                <p>Clique <a href="/Surpreenda-me">aqui</a> para gerar novamente</p>
            </div>

        `;
    }
}