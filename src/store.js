import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchedSongs: {},
    songs: [],
    name: "Your unsaved playlist",
  },
  actions: {
    async fetchAPIData({ commit }, q) {
      await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + q, {
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
    },
    doPlaylistName({ commit }, q) {
      commit("setPlaylistName", q);
    },
    newSong({ commit }, q) {
      commit("addSong", q);
    },
    removeSong({ commit }, q) {
      commit("deleteSong", q);
    },
    songsFromLocalStorage({ commit }, q) {
      commit("setSongsLocalStorage", q);
    },
  },
  mutations: {
    setSongs(state, data) {
      state.searchedSongs = data;
    },
    setSongsLocalStorage(state, data) {
      state.songs = data;
    },
    setPlaylistName(state, name) {
      state.name = name;
    },
    addSong(state, song) {
      state.songs.push(song);
    },
    deleteSong(state, index) {
      state.songs.splice(index, 1);
    },
  },
});
