import { createWebHistory, createRouter } from "vue-router";
// Import Component2 Kalian

import Home from "@/views/Home.vue"; 
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Produk from "@/views/Produk.vue";
import Kategori from "@/views/Kategori.vue";
import Detail from "@/views/Detail.vue";
import KategoriProduk from "@/views/KategoriProduk.vue";
import NotFound from "../views/NotFound.vue";
import Login from "../views/Login.vue";
import Counter from "../views/Counter.vue";
import Todo from "../views/Todo.vue";





const routes = [ 
  {
    path: "/", 
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
 
  {
    path: "/kategori",
    name: "Kategori",
    component: Kategori,
  },
  {
    path: "/detail/:id_produk",
    name: "Detail",
    component: Detail,
    props:true,
  },
  {
    path: "/kategoriproduk",
    name: "KategoriProduk",
    component: KategoriProduk,
  },
  
  {
    path: "/kategoriproduk",
    name: "KategoriProduk",
    component: KategoriProduk,
    props : true
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    props : true
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    props: true
  },
  {
    path: "/produk",
    name: "Produk",
    component: Produk,
    beforeEnter : (to, from, next) => {
      const loggedInUser = true;
      if (loggedInUser) {
        next();
      } else {
        next("/login")
      }
    }  
  },
  {
    path: "/counter",
    name: "Counter",
    component: Counter,
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todo,
  },

  
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
