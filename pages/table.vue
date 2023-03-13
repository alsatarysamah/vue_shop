<template>
  <v-data-table :headers="headers" :items="items">
    
  </v-data-table>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Age', value: 'age' },
        { text: 'Actions', value: 'actions' },
      ],
      items: [
        { name: 'John', age: 32 },
        { name: 'Jane', age: 27 },
        { name: 'Bob', age: 41 },
      ],
    }
  },
  methods: {
    editItem(item) {
      // Handle edit action here
    },
    deleteItem(item) {
      // Handle delete action here
    },
  },
}
</script>
