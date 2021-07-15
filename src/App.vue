<template>
  <div id="app">
    <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
      <v-app-bar app color="secondary"
        ><div>
          <v-tooltip v-if="!$vuetify.theme.dark" bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" color="info" small @click="darkMode">
                Dark Mode On
              </v-btn>
            </template>
          </v-tooltip>

          <v-tooltip v-else bottom>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" color="info" small @click="darkMode">
                Dark Mode Off
              </v-btn>
            </template>
          </v-tooltip>
        </div></v-app-bar
      >
      <v-main>
        <v-container fluid>
          <v-row>
            <v-col cols="12" lg="5">
              <playlist></playlist>
            </v-col>
            <v-col cols="12" lg="7">
              <songs></songs>
            </v-col>
          </v-row>
          <v-btn color="button" fixed right bottom @click="openModal"
            >Save
            <v-icon>mdi-cloud-download</v-icon>
          </v-btn>
        </v-container>
      </v-main>
    </v-app>
    <modalSavePlaylist ref="modalSavePlaylist"></modalSavePlaylist>
    <notifications />
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
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  data() {
    return {
      showSaveBtn: false,
    };
  },
  methods: {
    openModal() {
      this.$refs.modalSavePlaylist.openModal();
    },
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  mounted() {
    if (
      localStorage.length > 0 &&
      localStorage.getItem("playlistName") !== null &&
      localStorage.getItem("songs") !== null
    ) {
      this.$store.dispatch("doPlaylistName", localStorage.getItem("playlistName"));
      this.$store.dispatch("songsFromLocalStorage", JSON.parse(localStorage.getItem("songs")));
    }
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
