import AuthView from "../views/auth/AuthView";
import MainView from "../views/MainView";
import CheckEvent from "../views/CheckEvent";

let routes = [
    {
        path: "/auth",
        component: AuthView,
        layout: "auth",
    },
    {
        path: "/",
        component: CheckEvent,
        layout: "main",
    },
    {
        path: "/mainview",
        component: MainView,
        layout: "main",
    },
];
export default routes;
