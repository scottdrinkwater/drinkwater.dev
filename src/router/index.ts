import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CV from "../views/CV.vue";
import ShowCase from "../views/ShowCase.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cv",
    name: "cv",
    component: CV,
  },
  {
    path: "/show-case",
    name: "ShowCase",
    component: ShowCase,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
