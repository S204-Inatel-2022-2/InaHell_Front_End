import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("PickMe");
  }

  async getHtml() {
    return `
            <div class="home_button">
              <a name="inicio" href="/"><input type="image" src="static/assets/logo.png" class="click_home"/></a>
            </div>
            <div class="content">

              <div class="perguntas">  

                <form>
                  <a>Selecione sua idade, seu gênero favorito, seu(s) serviços de streaming 
                  e se prefere série ou filme</a>
                  <br><br>
                  <select id="idade" name="idade">
                    <option value="1">0 - 10</option>
                    <option value="10">10 - 12</option>
                    <option value="12">12 - 14</option>
                    <option value="14">14 - 16</option>
                    <option value="16">16 - 18</option>
                    <option value="18">18 +</option>
                  </select>
                  <select id="genero_fav" name="genero_fav">
                    <option value="comédia">comédia</option>
                    <option value="terror">terror</option>
                    <option value="romance">romance</option>
                    <option value="ação">ação</option>
                    <option value="aventura">aventura</option>
                    <option value="ficção">ficção</option>
                  </select>
                  <select id="platforms" name="platforms">
                    <option value="Netflix">Netflix</option>
                    <option value="Hbo">Hbo max</option>
                    <option value="Disney">Disney plus</option>
                    <option value="Amazon">Amazon prime video</option>
                    <option value="Hulu">Hulu</option>
                    <option value="Apple">Apple TV</option>
                  </select>
                  <select id="filme_ou_serie" name="filme_ou_serie">
                    <option value="filme">filme</option>
                    <option value="serie">série</option>
                  </select>
                  <button type="button"><span></span><a href="/Final" class="nav__link">Próximo</a></button>
                  <button type="button"><span></span><a href="/Home" class="nav__link">Anterior</a></button>
                </form>
              </div>
            </div>
        `;
  }
}

//mudar p/ proxima pagina e salvar a resposta p/ mandar p/ back