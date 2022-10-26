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
                <h1>Plataforma</h1>
                <button type="button"><span></span><a href="/Final" class="nav__link">Próximo</a></button>
                <button type="button"><span></span><a href="/Filme_Serie" class="nav__link">Anterior</a></button>
            </div>

            <div class="footer">
                <img src="static/assets/claqueteLado.png" class="claquete"/>
            </div>
        `;
    }
}