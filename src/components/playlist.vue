<template>
  <v-card elevation="2" min-height="70vh" color="primary">
    <v-card-title>
      {{ name }}
    </v-card-title>
    <v-card-text>
      <div v-if="songs.length === 0">
        Add some of your songs
      </div>
      <div v-else>
        <song-list :songs="songs"></song-list>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import songList from "./songList";
import { bus } from "../main";
export default {
  components: {
    "song-list": songList,
  },
  computed: {
    songs() {
      return this.$store.state.songs;
    },
    name() {
      return this.$store.state.name;
    },
  },
  data() {
    return {};
  },
  created() {
    bus.$on("addedSong", (data) => {
      if (this.songs.length >= 5) {
        this.$notify({
          type: "warn",
          position: "top center",
          title: "Warning!",
          text: "You can only add 5 songs to Your playlist.",
        });
      } else {
        this.$store.dispatch("newSong", data);
      }
    });
  },
};
</script>

<style></style>
