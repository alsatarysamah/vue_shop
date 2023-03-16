<template>
 
    
    <v-col md="6" sm="8" class="container d-flex flex-column justify-content-center align-items-center">
      <v-card class="shadow" width="100%">
        <v-card >
              
          <v-card-title   >Signup</v-card-title>

          <v-form @submit.prevent="handleSubmit" class="kyu">
            <v-text-field
              v-model="firstName"
              label="First Name"
              required
              class="right"
            ></v-text-field>
            <v-text-field
              v-model="lastName"
              label="Last Name"
              class="right"

              required
            ></v-text-field>
            <v-text-field
              v-model="username"
              label="username"
              type="email"
              class="right"

              required
              @input="usernameHandler"
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="password"
              type="password"
              class="right"

              required
            ></v-text-field>
            <div class="m-5">
              <v-btn color="yellow" type="submit">Submit</v-btn>
            </div>
          </v-form>
        </v-card>
      </v-card>
    </v-col>
 
</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      // console.log(this.firstName)
      // console.log(this.lastName)
      // console.log(this.password)
      // console.log(this.username)
    },
    usernameHandler() {
      console.log(this.username);
    },
  },
};
</script>

<style  scoped>

.kyu {
  text-align: center;
}
.right {
  margin-inline-start: 10%;
  margin-inline-end: 10%;
}
</style>
