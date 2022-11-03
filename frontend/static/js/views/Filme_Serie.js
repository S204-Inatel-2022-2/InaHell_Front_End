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
                <h1>Filme ou Série</h1><br>
                <form action="/action_page.php">
                    <p>Selecione se deseja assistir um filme ou uma série</p><br>
                    <input type="radio" id="movie" name="movie_or_serie" value="0">
                    <label for="movie">Filme</label><br><br>
                    <input type="radio" id="serie" name="movie_or_serie" value="1">
                    <label for="serie">Série</label><br><br>
                </form>
                <button type="button"><span></span><a href="/Genero" class="nav__link"><<< Anterior</a></button>
                <button type="button"><span></span><a href="/Plataforma" class="nav__link">Próximo >>></a></button>
            </div>

            <div class="footer">
                <img src="static/assets/claqueteLado.png" class="claquete"/>
            </div>
        `;
    }
}