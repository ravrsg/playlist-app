<template>
  <div>
    <div v-for="(song, index) in songs" :key="index">
      {{ song.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    songs: Array,
  },
};
</script>

<style></style>
