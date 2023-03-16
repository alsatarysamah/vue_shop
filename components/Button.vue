<template>
  <div>
    <v-btn :style="{background:color}">{{text}}</v-btn>
  </div>
</template>

<script>
export default {
    props: {
    color: String,
    text:String
  },
  data() {
    return {};
  },

};
</script>

<style lang="sass" scoped></style>
