<template>
  <div>
    <Grid />
    <p><NuxtLink class="link" to="/test">Hooooooooome</NuxtLink></p>
  </div>
</template>

<script>
import Grid from "../components/Grid"
export default {
  name:"grid",
  components:{
    Grid
  }
};
</script>

<style scoped>
.link {
  background-color: green;
}
</style>
