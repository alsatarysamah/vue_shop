<template>
  <div>
    <v-btn @click="go">Home</v-btn>
  </div>
</template>

<script>
import router from"../router";
export default {
  name: "navop",
  methods: {
    go() {
      
      router.push('/'); // navigate to the "test" route
    },
  },
};
</script>

<style lang="sass" scoped></style>
