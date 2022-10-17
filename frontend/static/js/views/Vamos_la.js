import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Vamos lá");
  }

  async getHtml() {
    return `
            <div class="content">

              <input type="image" src="static/assets/claqueteRomance.png" class="bonecos"/>
              <input type="image" src="static/assets/claqueteTerror.png" class="bonecos"/>
              <input type="image" src="static/assets/claqueteAction.png" class="bonecos"/>

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
                    <option value="terror">terror</option>
                    <option value="romance">romance</option>
                    <option value="ação">ação</option>
                    <option value="aventura">aventura</option>
                    <option value="comédia">comédia</option>
                    <option value="ficção">ficção</option>
                  </select>
                  <select id="filme_ou_serie" name="filme_ou_serie">
                    <option value="filme">filme</option>
                    <option value="serie">série</option>
                  </select>
                  <a href="/"><input type="submit" value="Próximo"/></a>
                </form>
              </div>
            </div>
        `;
  }
}

//mudar p/ proxima pagina e salvar a resposta p/ mandar p/ back