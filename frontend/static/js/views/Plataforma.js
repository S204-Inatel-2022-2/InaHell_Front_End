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
                <h1>Plataforma</h1><br>
                <form action="/action_page.php">
                    <input type="checkbox" id="Plat1" name="Plat1" value="H">
                    <label for="Plat1"> Hbo</label><br><br>
                    <input type="checkbox" id="Plat2" name="Plat2" value="N">
                    <label for="Plat2"> Netflix</label><br><br>
                    <input type="checkbox" id="Plat3" name="Plat3" value="D">
                    <label for="Plat3"> Disney+</label><br><br>
                    <input type="checkbox" id="Plat4" name="Plat4" value="AP">
                    <label for="Plat4"> Prime Video</label><br><br>
                </form>
                <button type="button"><span></span><a href="/Filme_Serie" class="nav__link"><<< Anterior</a></button>
                <button type="button"><span></span><a href="/Final" class="nav__link">Próximo >>></a></button>
            </div>

            <div class="footer">
                <img src="static/assets/claqueteLado.png" class="claquete"/>
            </div>
        `;
    }
}