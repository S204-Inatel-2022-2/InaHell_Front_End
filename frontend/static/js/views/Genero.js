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
                <h1>Gênero</h1><br>

                <input type="image" src="static/assets/claqueteRomance.png" class="bonecos"/>
                <input type="image" src="static/assets/claqueteTerror.png" class="bonecos"/>
                <input type="image" src="static/assets/claqueteAction.png" class="bonecos"/>
                <br>

                <form action="/action_page.php">
                    <p>Selecione sua faixa de idade</p><br>
                    <input type="radio" id="gen1" name="genre" value="Drama">
                    <label class="radio_inline" for="gen1">Drama</label><br>
                    <input type="radio" id="gen2" name="genre" value="Comedy">
                    <label class="radio_inline" for="gen2">Comédia</label><br>  
                    <input type="radio" id="gen3" name="genre" value="Horror">
                    <label class="radio_inline" for="gen3">Terror</label><br>
                    <input type="radio" id="gen4" name="genre" value="Romance">
                    <label class="radio_inline" for="gen4">Romance</label><br>
                    <input type="radio" id="gen5" name="genre" value="Adventure">
                    <label class="radio_inline" for="gen5">Ação</label><br>
                    <input type="radio" id="gen6" name="genre" value="Fiction">
                    <label class="radio_inline" for="gen6">Ficção</label><br>
                </form>

                <div class="prev_next">
                    <button type="button"><span></span><a href="/Idade" class="nav__link"><<< Anterior</a></button>
                    <button type="button"><span></span><a href="/Filme_Serie" class="nav__link">Próximo >>></a></button>
                </div>
            </div>

            <div class="footer">
                <img src="static/assets/claqueteLado.png" class="claquete"/>
            </div>
        `;
    }
}