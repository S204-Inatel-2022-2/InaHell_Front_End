//routes config
const router = async () => {
    const routes = [
        {path: "/", view: () => console.log("HOME")},
        {path: "/Vamos-la", view: () => console.log("VAMOS LA")},
        {path: "/Surpreenda-me", view: () => console.log("SURPREENDA-ME")}
    ];

    //test each route for potencial match
    const potencialMacthes = routes.map(route => {
        return{
            route: route,
            isMatch: location.pathname === route.path
        }
    })

    let match = potencialMacthes.find(potencialMacth => potencialMacth.isMatch);

    //Resolvind undefined routes case
    if (!match){
        match = {
            route: routes[0], //in case there's an unknown route the default is "home" (/)
            isMatch: true
        };
    }
    console.log(match.route.view());
};

document.addEventListener("DOMContentLoaded", () => {
    router();
});