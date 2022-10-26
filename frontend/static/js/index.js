import Home from "./views/Home.js";
import Vamos_la from "./views/Vamos_la.js";
import Surpreenda from "./views/Surpreenda.js";
import Final from "./views/Final.js";
import Idade from "./views/Idade.js";
import Genero from "./views/Genero.js";
import Filme_Serie from "./views/Filme_Serie.js";
import Plataforma from "./views/Plataforma.js";

//routes config

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        {path: "/", view: Home}, //reference of the Class Home itself
        {path: "/Vamos-la", view: Vamos_la},
        {path: "/Surpreenda-me", view: Surpreenda},
        {path: "/Final", view: Final},
        {path: "/Idade", view: Idade},
        {path: "/Genero", view: Genero},
        {path: "/Filme_Serie", view: Filme_Serie},
        {path: "/Plataforma", view: Plataforma}
    ];

    //test each route for potencial match
    const potencialMacthes = routes.map(route => {
        return{
            route: route,
            isMatch: location.pathname === route.path
        }
    })

    let match = potencialMacthes.find(potencialMacth => potencialMacth.isMatch);

    //Resolving undefined routes case
    if (!match){
        match = {
            route: routes[0], //in case there's an unknown route the default is "home" (/)
            isMatch: true
        };
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {

    //Goes to the actual route without the page refresh
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});