<template>
  <div id="app">
    <v-app>
      <v-app-bar app> b</v-app-bar>
      <v-main>
        <v-container fluid>
          <v-row>
            <v-col cols="12" lg="5">
              <playlist @updateSongs="checkSaveBtn"></playlist>
            </v-col>
            <v-col cols="12" lg="7">
              <songs></songs>
            </v-col>
          </v-row>
          <v-btn fixed right bottom @click="openModal"
            >Save
            <v-icon>mdi-cloud-download</v-icon>
          </v-btn>
        </v-container>
      </v-main>
    </v-app>
    <modalSavePlaylist ref="modalSavePlaylist"></modalSavePlaylist>
  </div>
</template>

<script>
import playlist from "./components/playlist";
import songs from "./components/chooseSong";
import modalSavePlaylist from "./components/modalSavePlaylist";
export default {
  name: "App",
  components: {
    playlist: playlist,
    songs: songs,
    modalSavePlaylist: modalSavePlaylist,
  },
  data() {
    return {
      showSaveBtn: false,
    };
  },
  methods: {
    checkSaveBtn(s) {
      this.showSaveBtn = s > 0 ? true : false;
    },
    openModal() {
      this.$refs.modalSavePlaylist.openModal();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
