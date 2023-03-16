<template>
  <div>
    <v-app-bar :elevation="2" rounded>
      <v-app-bar-nav-icon to="/">Home</v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <router-link to="/signup">
        <v-app-bar-title>Signup</v-app-bar-title>
      </router-link>
      <router-link to="/test" class="mrg">
        <v-app-bar-title>test</v-app-bar-title>
      </router-link>
     
      <router-link to="/table" class="mrg">
        <v-app-bar-title>table</v-app-bar-title>
      </router-link>
       <router-link to="/grid" class="mrg">
        <v-app-bar-title>Grid</v-app-bar-title>
      </router-link>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mrg {
  margin-left: 50px;
}
</style>
