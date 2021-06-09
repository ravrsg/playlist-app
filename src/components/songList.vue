<template>
  <div style="padding-left: 50px">
    <div>
      <div v-for="(song, index) in songs" :key="index">
        <table>
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
export default {
  props: {
    songs: Array,
  },
};
</script>

<style></style>
