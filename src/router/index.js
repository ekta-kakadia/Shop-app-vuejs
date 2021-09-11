import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/home",
      name: "home",
      meta: { layout: "app" },
      component: () => import("@/components/Home.vue")
    },
    {
      path: "/login",
      name: "login",
      meta: { layout: "simple" },
      component: () => import("@/components/Login.vue")
    },
    {
      path: "/register",
      name: "register",
      meta: { layout: "simple" },
      component: () => import("@/components/Register.vue")
    },
    {
      path: "/products",
      name: "products",
      meta: { layout: "app" },
      component: () => import("@/components/Products.vue")
    },
    {
      path: "/product/:id",
      name: "productDetails",
      meta: { layout: "app" },
      component: () => import("@/components/ProductDetails.vue")
    },
    {
      path: "/category",
      name: "category",
      meta: { layout: "app" },
      component: () => import("@/components/Category.vue")
    },
  ]
});