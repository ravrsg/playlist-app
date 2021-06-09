<template>
  <v-card elevation="2" min-height="70vh">
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
    name() {
      return sessionStorage.length > 0 ? sessionStorage.playlistName : "Your unsaved playlist";
    },
  },
  data() {
    return {
      songs: [],
    };
  },
  created() {
    bus.$on("addedSong", (data) => {
      if (this.songs.length >= 5) {
        alert("można dodać masymalnie 5 piosenek");
      } else {
        this.songs.push(data);
      }
    });
  },
};
</script>

<style></style>
