import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import colors from "vuetify/lib/util/colors";
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdiSvg", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
  theme: {
    themes: {
      light: {
        primary: colors.green.lighten2,
        secondary: colors.green.lighten1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        info: "#7CB342",
        background: colors.green.lighten4,
        button: "#9CCC65",
      },
      dark: {
        primary: colors.grey.darken2,
        background: colors.grey.darken4,
        error: colors.red.accent4,
        info: "#212121",
      },
    },
  },
});
