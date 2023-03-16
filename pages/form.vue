<template>
  <div>
    <v-row class="d-flex justify-content-center align-items-center mt-5">
      <v-col md="4" lg="3" xs="12">
        <div class="ml-4 mr-2"></div>
        <Form />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Form from "../components/Form";
export default {
  name: "Form",
  components: { Form },
};
</script>

<style lang="sass" scoped></style>
