<template>
  <v-container>
    <div class="d-flex flex-wrap justify-content-center">
      <v-btn @click="addNewItem"> Add </v-btn>
      <v-btn @click="showDialog = true"> Create</v-btn>
      <Dialog :closeDialog="closeDialog" v-if="showDialog" :addNewItem="addNewItem" />

      <v-row>
        <v-col
          sm="4"
          md="4"
          lg="2"
          v-for="element in getItems"
          :key="element.id"
        >
          <Item :element="element" />
        </v-col>
      </v-row>
    </div>
    <div class="my-3">
      <v-btn @click="fetchCat"> cat </v-btn>
      <p>{{ getCat }}</p>
    </div>
  </v-container>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "grid",

  computed: {
    ...mapGetters({
      getItems: "getItems",
      getCat: "getCat",
    }),
  },
  data() {
    return {
      showDialog: false,
    };
  },
  methods: {
    ...mapActions([
      "cats", // maps the `cats` action to a local method called `cats`
    ]),
    fetchCat() {
      this.cats(); // dispatches the `cats` action
    },
    ...mapMutations(["addItems"]), // map the addItems mutation to the addItem method
    addNewItem(newItem) {
      console.log(newItem);
      this.addItems(newItem); // call the addItems mutation with the new item as the payload
    },
    closeDialog() {
      this.showDialog = false;
    },
    async getUser() {
      const res = await this.$axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      console.log(res.data);
      this.userCount = res.data.count;
    },
  },
 
};
</script>

<style>
.box {
  background-color: #c22b2b;
  padding: 20px;
  margin: 10px;
}
</style>
