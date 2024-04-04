import { createMemoryHistory, createRouter } from "vue-router";
import Wallet from "../views/Wallet.vue";

const routes = [{ path: "/", name: "Wallet", component: Wallet }];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
export default router;
