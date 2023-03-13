<template>
  <div>
    <v-btn :style="{background:color}">{{text}}</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    color: String,
    text:String
  },
};
</script>

<style lang="sass" scoped></style>
