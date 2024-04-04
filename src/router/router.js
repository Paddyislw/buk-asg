import { createMemoryHistory, createRouter } from "vue-router";
import Wallet from "../views/Wallet.vue";

// Routes array containing route objects
const routes = [{ path: "/", name: "Wallet", component: Wallet }];

//Router instance with the defined routes and memory history
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
export default router;
