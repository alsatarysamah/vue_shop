<template>
  <div>
    <v-dialog v-model="show" @click:outside="closeDialog">
      <v-card>
       
          <NewItem :closeDialog="closeDialog" :addNewItem="addNewItem" @newOne="addNewItem"/>
       
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import NewItem from "../components/NewItem";
export default {
  props: {
    closeDialog: { type: Function },
    
    addNewItem: { type: Function },
  },
  components: {
    NewItem,
  },
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.show = true;
    console.log(this.show);
  },
  mounted() {
    // this.getUser();
  
    // this.$on("newOne", this.addNewItem);
  },
};
</script>
