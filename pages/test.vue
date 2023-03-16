<template>
  <div>
<h1>Home eeeeeeeeeeee</h1>
<First message="yes"/>
<Button  text="butneeee" color="red"/>
<Button  text="greeen" color="green"/>


  </div>
</template>

<script>

  import First from '../components/First.vue'
  import Button from "../components/Button.vue"
  export default {
    name: "test",
    color:"red",
   
    components: {
      First,
      Button
    }
   
  }
</script>

<style lang="sass" scoped>

</style>