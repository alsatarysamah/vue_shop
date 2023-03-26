<template>
  <div>
    <p>{{ id }}</p>
    <v-text-field v-model="id"></v-text-field>
    <p>{{ desc }}</p>
    <v-text-field v-model="desc"></v-text-field>
    <v-btn @click="handleEdit">Edit</v-btn>
  </div>
</template>

<script>

export default {
  name: "Edit",
  data() {
    return {
      id: 0,
      desc: "",
      image:""
    };
  },
  methods:{
    handleEdit(){

    }
  },
  created() {
    const query = this.$route.query;
    this.id = query.item.id;
    this.desc = query.item.desc;
  },
};
</script>

<style lang="sass" scoped></style>
