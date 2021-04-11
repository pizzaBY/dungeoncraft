import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
import Rules from "../views/Rules.vue";
import Banlist from "../views/Banlist.vue";
import Tops from "../views/Tops.vue";
import Start from "../views/Start.vue";
import Classic from "../views/servers/Classic.vue";
const routes = [
  {
    path: "/",
    name: "rHome",
    component: Home,
  },
  {
    path: "/services",
    name: "rServices",
    component: Services,
  },
  {
    path: "/rules",
    name: "rRules",
    component: Rules,
  },
  {
    path: "/banlist",
    name: "rBanlist",
    component: Banlist,
  },
  {
    path: "/tops",
    name: "rTops",
    component: Tops,
  },
  {
    path: "/start",
    name: "rStart",
    component: Start,
  },
  {
    path: "/server/classic",
    name: "rSclassic",
    component: Classic,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
