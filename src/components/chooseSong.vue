<template>
  <v-card elevation="2" height="70vh">
    <v-text-field v-model="search" label="Search" class="mx-4"></v-text-field>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style></style>
