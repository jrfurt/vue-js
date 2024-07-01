import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import UsersView from "@/views/UsersView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/users", component: UsersView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
