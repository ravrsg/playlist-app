import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchedSongs: {},
  },
  actions: {
    fetchAPIData({ commit }, q) {
      fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + q, {
        method: "GET",
        mode: "cors",
        headers: {
          "x-rapidapi-key": "0336a60903mshfaec923400988fcp191410jsn0127ccd85343",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          commit("setSongs", data);
        });

      return new Promise((resolve, reject) => {
        this.resolvePromise = resolve;
        this.rejectPromise = reject;
      });
    },
  },
  mutations: {
    setSongs(state, data) {
      state.searchedSongs = data;
      this.resolvePromise(true);
    },
  },
});
