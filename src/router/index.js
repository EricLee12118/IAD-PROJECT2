import Vue from "vue";
import Router from "vue-router";
import Map from "../components/WebMap.vue";
import Home from "../components/WebHome.vue";
import Visual from "../components/DataVisual.vue"
import App from "../components/WebApp.vue"
import add from "../components/Computer.vue"
import info from "../components/HomePage.vue"
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path:"/map",
      name:"Map",
      component: Map
    },
    {
      path:"/visual",
      name:"Visual",
      component: Visual
    },
    {
      path:"/app",
      name:"app",
      component: App
    },
    {
      path:"/home",
      name:"add",
      component: add
    },
    {
      path:"/info",
      name:"info",
      component:info
    }
  ]
});
