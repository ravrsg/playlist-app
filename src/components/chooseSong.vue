<template>
  <v-card elevation="2" class="scrollOnlyY" height="70vh" color="primary">
    <v-row>
      <v-col cols="12" md="10">
        <v-text-field v-model="search" label="Search" class="mx-4"></v-text-field>
      </v-col>
      <v-col cols="12" md="2">
        <v-btn color="button" @click="searchAPI()">SEARCH</v-btn>
      </v-col>
    </v-row>
    <song :songs="songs" :showMore="showMore"></song>
    <v-btn color="button" v-if="songs.length > 0 && !showMore" @click="showMore = true">More</v-btn>
  </v-card>
</template>

<script>
import song from "./song.vue";
export default {
  components: { song },
  data() {
    return {
      songs: [],
      search: "",
      showMore: false,
    };
  },
  methods: {
    searchAPI() {
      this.$store.dispatch("fetchAPIData", this.search).then(() => {
        this.showMore = false;
        this.makeSongs(this.$store.state.searchedSongs);
      });
    },
    makeSongs(tab) {
      var ret = [];
      const entries = Object.entries(tab);
      if (entries[0][0] === "error") {
        this.$notify({
          type: "error",
          title: "Error",
          text: "Can't connect to API. Try again.",
        });
      } else {
        entries[0][1].forEach((el) => {
          ret.push({ img: el.album.cover, title: el.album.title, artist: el.artist.name });
        });
        this.songs = ret;
      }
    },
  },
};
</script>

<style>
.scrollOnlyY {
  overflow-y: auto;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 10px;
}
</style>
