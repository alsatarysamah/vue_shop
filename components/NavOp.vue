<template>
  <div>
    <v-btn @click="go">Home</v-btn>
  </div>
</template>

<script>

export default {
  name: "navop",
  methods: {
    go() {
      
     this.$router.push('/'); // navigate to the "test" route
    },
  },
};
</script>

<style lang="sass" scoped></style>
