import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShopView from "../views/ShopView.vue";
import GameView from "../views/EditGameView.vue";
import NewGameView from "../views/NewGameView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/shop",
      name: "shop",
      component: ShopView,
    },
    {
      path: "/games/:id",
      name: "game",
      component: GameView,
    },
    {
      path: "/games/new",
      name: "newGame",
      component: NewGameView,
    },
  ],
});

export default router;
