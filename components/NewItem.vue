<template>
  <v-col
    md="6"
    sm="8"
    class="container d-flex flex-column justify-content-center align-items-center"
  >
    <v-card class="shadow" width="100%">
      <v-card>
        <v-card-title>New Item</v-card-title>

        <v-form @submit.prevent="handleSubmit" class="kyu">
          <v-text-field
            v-model="id"
            label="id"
            required
            class="right"
            type="number"
          ></v-text-field>
          <v-text-field
            v-model="img"
            label="Image URL"
            class="right"
            type="email"
            required
          ></v-text-field>
          <v-text-field
            v-model="desc"
            label="desc"
            type="email"
            class="right"
            required
          ></v-text-field>

          <div class="m-5">
            <v-btn color="yellow" type="submit">Submit</v-btn>
          </div>
        </v-form>
      </v-card>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "newItem",
  props:{
    closeDialog:{type:Function}
  },
  data() {
    return {
      id: "",
      img: "",
      desc: "",
    };
  },
  methods: {
    handleSubmit() {
      const newItem = {
        id: this.id,
        image: this.img,
        desc: this.desc,
      };
      // console.log({ newItem });
      this.$emit("newOne",newItem);
      this.closeDialog()
    },
  },
};
</script>

<style scoped>
.kyu {
  text-align: center;
}
.right {
  margin-inline-start: 10%;
  margin-inline-end: 10%;
}
</style>
