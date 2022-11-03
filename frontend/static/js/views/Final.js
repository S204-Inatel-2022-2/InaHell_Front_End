import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("PickMe");
    }

    async getHtml(){
        return `
            <div class="content">
                <div class="home_button">
                    <a name="inicio" href="/"><input type="image" src="static/assets/logo.png" class="click_home"/></a>
                </div>
                <h1>Aqui está, agora é só curtir!</h1>
                <button type="button"><span></span><a href="/Home" class="nav__link">Início</a></button>
                <button type="button"><span></span><a href="https://www.netflix.com/browse" class="nav__link">Assistir</a></button>
            </div>
            <div class="footer">
                <img src="static/assets/claqueteLado.png" class="claquete"/>
            </div>
        `;
    }
}