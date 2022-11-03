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
                <h1>Idade</h1>
                <br>
                <form action="../../php/action_page.php" method="POST">
                    <p>Selecione sua faixa de idade</p><br>
                    <input type="radio" id="age1" name="age" value="1">
                    <label class="radio_inline" for="age1">0 - 9</label><br>
                    <input type="radio" id="age2" name="age" value="10">
                    <label class="radio_inline" for="age2">10 - 11</label><br>  
                    <input type="radio" id="age3" name="age" value="12">
                    <label class="radio_inline" for="age3">12 - 13</label><br>
                    <input type="radio" id="age4" name="age" value="14">
                    <label class="radio_inline" for="age4">14 - 15</label><br>
                    <input type="radio" id="age5" name="age" value="16">
                    <label class="radio_inline" for="age5">16 - 17</label><br>
                    <input type="radio" id="age6" name="age" value="18">
                    <label class="radio_inline" for="age6">18+</label><br><br>
                    <input type="submit">
                </form>
                <button type="button"><span></span><a href="/Home" class="nav__link"><<< Anterior</a></button>
                <button type="button"><span></span><a href="/Genero" class="nav__link">Próximo >>></a></button>
                <button type="button"><span></span><a href="/Genero" onclick="action_page( $_POST )">SUBMIT</a></button>
            </div>
            <div class="footer">
                <img src="static/assets/claqueteLado.png" class="claquete"/>
            </div>
            <script>
                function myFunction() {
                    document.getElementById("myForm").submit();
                }
            </script>

        `;
    }
}