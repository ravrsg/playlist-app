<template>
  <v-dialog v-model="modal" persistent max-width="30vw">
    <v-card>
      <v-card-title>
        Save
      </v-card-title>
      <v-card-text>
        <v-form ref="form" class="mx-2" lazy-validation>
          <v-text-field
            v-model="plName"
            label="Playlist name"
            class="mx-4"
            :rules="[rules.required, rules.counter]"
          ></v-text-field>
          <v-text-field
            v-model="plMail"
            label="E-mail"
            class="mx-4"
            :rules="[rules.required, rules.email]"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="modal = false">
          Cancel
        </v-btn>
        <v-btn color="green darken-1" text @click="savePlaylist">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
      plName: "",
      plMail: "",
      minLength: 3,
      rules: {
        required: (value) => !!value || "Required.",
        counter: (value) => value.length >= this.minLength || "Min length for this field is: " + this.minLength,
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Required format name@example.com";
        },
      },
    };
  },
  methods: {
    openModal() {
      this.clearForm();
      this.modal = true;
    },
    savePlaylist() {
      if (this.$refs.form.validate()) {
        this.fetchAPIData("eminem");
        this.modal = false;
      }
    },
    clearForm() {
      this.plName = "";
      this.plMail = "";
    },
  },
};
</script>

<style></style>
