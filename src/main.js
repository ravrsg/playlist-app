import Vue from "vue";
import App from "./App.vue";
import vuetify from "@/plugins/vuetify";
Vue.config.productionTip = false;
import api from "./scripts.js";
Vue.mixin(api);
new Vue({
  render: (h) => h(App),
  vuetify,
  api,
}).$mount("#app");
