const urlParams = new URLSearchParams(window.location.search);

const idade = urlParams.get("idade");
const genero_fav = urlParams.get("genero_fav");
const platforms = urlParams.get("platforms");
const filme_ou_serie = urlParams.get("filme_ou_serie");

//passar os parametros para consulta no banco e retorno do filme "sorteado"
console.log(get_idade(idade));

console.log(idade);
console.log(genero_fav);
console.log(platforms);
console.log(filme_ou_serie);
