import Vue from 'vue'
import App from "./App";
import router from "./router";
import BaiduMap from "vue-baidu-map";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
Vue.use(VXETable)
Vue.use(ElementUI);
require('echarts-wordcloud');
import axios from "axios";
import * as echarts from 'echarts'
Vue.use(BaiduMap, {
  ak: "jnXGBUmzSGg9RDVZ9s4GGPkEAiUGs0Tz"
});
Vue.prototype.$ajax = axios;
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
/* eslint-disable no-new */

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  render: h => h(App)
});