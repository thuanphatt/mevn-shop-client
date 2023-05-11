import { createApp } from "vue";
import App from "./App.vue";
import VueTidio from "vue-tidio";

import { createRouter, createWebHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import BlogView from "./views/BlogView.vue";
import CartView from "./views/CartView.vue";
import CheckoutView from "./views/CheckoutView.vue";
import ProjectView from "./views/ProjectView.vue";
import RegisterView from "./views/RegisterView.vue";
import LoginView from "./views/LoginView.vue";
import ProductDetailView from "./views/ProductDetailView.vue";
import ContactView from "./views/ContactView.vue";
import NotFoundView from "./views/NotFoundView.vue";
import SettingsProfileView from "./views/SettingsProfileView.vue";
import ChangePasswordView from "./views/ChangePasswordView.vue";
import ForgotPasswordView from "./views/ForgotPasswordView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/blog", component: BlogView },
  { path: "/checkout", component: CheckoutView },
  { path: "/project", component: ProjectView },
  { path: "/contact", component: ContactView },
  { path: "/login", component: LoginView },
  { path: "/forgotPassword", component: ForgotPasswordView },
  { path: "/cart", component: CartView },
  { path: "/register", component: RegisterView },
  { path: "/product/:_id", component: ProductDetailView },
  { path: "/profile/:id", component: SettingsProfileView },
  { path: "/changePassword/:id", component: ChangePasswordView },
  { path: "/:pathMatch(.*)*", component: NotFoundView },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
// live chat
app.use(VueTidio, { appKey: "h32wbz90gk0v7tsjaanlrwslkijgfw7o" });

router.afterEach((to) => {
  window.tidioChatApi && window.tidioChatApi.display(to.meta.showChat);
});
app.config.globalProperties.$apiURL = "https://mevn-shop-server.onrender.com";
app.config.globalProperties.$STRIPE_PUBLISHABLE_KEY =
  "pk_test_51Mx3mSLqQ3c1Q8vvx4c6rkCSNcBMXVCEq9rxGLFEONXMzdN3AqLZWlke8J9KyjqUiayjpzk7Yuq18Anf7BOuyh7k00W9tDeUts";
app.config.globalProperties.$accessTokenKey = "accessTokenKey";
app.config.globalProperties.$months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

app.config.globalProperties.$headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + localStorage.getItem("accessTokenKey"),
};

app.mount("#app");
