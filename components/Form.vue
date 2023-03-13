<template>
  <div>
    <v-card>
      <v-card-title>Signup</v-card-title>

      <v-form @submit.prevent="handleSubmit">
        <v-text-field v-model="firstName" label="First Name"></v-text-field>
        <v-text-field v-model="lastName" label="Last Name"></v-text-field>
        <v-btn color="red" type="submit">Submit</v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {

    data() {
    return {
      firstName: '',
      lastName: '',
    }},
    methods:{
       handleSubmit(){
        console.log(this.firstName);
        console.log(this.lastName);
       } 
    }
};
</script>

<style lang="sass" scoped></style>
