<template>
  <v-card elevation="2" height="70vh">
    <v-card-title>
      Your playlist
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
export default {
  components: {
    "song-list": songList,
  },
  data() {
    return {
      songs: [
        {
          title: "s",
        },
      ],
    };
  },
  watch: {
    songs() {
      console.log(this.songs.length);
      this.$emit("updateSongs", this.songs.length);
    },
  },
};
</script>

<style></style>
