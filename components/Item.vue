<template>
  <div>
    <v-card>
      <v-card-title>{{ element.id }}</v-card-title>
      <img v-bind:src="element.image" @click="showDialog = true" />
      <!-- <v-card-media :src="element.image" height="200px"></v-card-media> -->
      <v-card-text>
        {{ element.desc }}
      </v-card-text>
      <v-btn @click="editHandler">Edit</v-btn>
    </v-card>
    <!-- <Dialog :element="element" :closeDialog="closeDialog" v-if="showDialog" /> -->
  </div>
</template>

<script>
export default {
  props: {
    element: {},
  },
  data() {
    return {
      showDialog: false,
    };
  },
  methods: {
    closeDialog() {
      this.showDialog = false;
    },
    editHandler() {
      this.$router.push({
        path: "edit",

        query: { item: this.element },
      });
    },
  },
};
</script>

<style lang="sass" scoped></style>
