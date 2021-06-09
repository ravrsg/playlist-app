<template>
  <div style="padding-left: 50px">
    <div v-if="!showMore">
      <div v-for="(song, index) in songs" :key="index">
        <table v-if="index < 5" @click="addSong(song)" class="pointer">
          <thead>
            <tr>
              <th colspan="2" rowspan="2">
                <img :src="song.img" width="40" height="40" />
              </th>
              <th colspan="4">{{ song.title }}</th>
            </tr>
            <tr>
              <td colspan="4">{{ song.artist }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <div v-else>
      <div v-for="(song, index) in songs" :key="index">
        <table @click="addSong(song)" class="pointer">
          <thead>
            <tr>
              <th colspan="2" rowspan="2">
                <img :src="song.img" width="40" height="40" />
              </th>
              <th colspan="4">{{ song.title }}</th>
            </tr>
            <tr>
              <td colspan="4">{{ song.artist }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from "../main";
export default {
  props: {
    songs: Array,
    showMore: Boolean,
  },
  methods: {
    addSong(x) {
      bus.$emit("addedSong", x);
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
