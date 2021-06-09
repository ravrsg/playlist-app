import Vue from "vue";
import vuetify from "@/plugins/vuetify";
import Vuex from "vuex";
import App from "./App.vue";
import store from "./store.js";
import mdiVue from "mdi-vue/v2";
import * as mdijs from "@mdi/js";

Vue.use(mdiVue, {
  icons: mdijs,
});
export const bus = new Vue();
Vue.config.productionTip = false;
Vue.use(Vuex);
new Vue({
  render: (h) => h(App),
  vuetify,
  store,
}).$mount("#app");
