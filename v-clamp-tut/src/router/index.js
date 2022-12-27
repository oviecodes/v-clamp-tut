import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";
import PostView from "../views/PostView.vue";
import SinglePost from "../views/SinglePost.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/post",
    name: "home",
    component: PostView,
  },
  {
    path: "/post/:id",
    name: "singlePost",
    component: SinglePost,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
