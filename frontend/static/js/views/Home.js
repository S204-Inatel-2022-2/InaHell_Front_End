import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Home");
    }

    async getHtml(){
        return `
            <div class="content">
                <h1>Olá! Bora assistir algo legal?</h1>
                <a>Clique no botão abaixo para começar</a>
                <div>
                    <button type="button"><span></span><a href="/Vamos-la" class="nav__link">Vamos lá!</a></button>
                    <!--<button type="button"><span></span><a href="/Surpreenda-me" class="nav__link">Surpreenda-me</a></button>-->
                </div>
            </div>
            <div class="footer">
                <img src="static/assets/claquete.png" class="claquete"/>
            </div>
        `;
    }
}