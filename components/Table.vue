<template>
  <v-data-table :headers="headers" :items="items">
    <template v-slot:item="{ item: row, action: rowAction }">
      <v-icon small class="mr-2" @click="editItem(row, rowAction)">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(row, rowAction)">mdi-delete</v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Age', value: 'age' },
        { text: 'Gender', value: 'gender' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      items: [
        { name: 'John', age: 25, gender: 'Male' },
        { name: 'Jane', age: 30, gender: 'Female' },
        { name: 'Bob', age: 40, gender: 'Male' },
      ],
    };
  },
  methods: {
    editItem(item, action) {
      // Handle edit item logic here
    },
    deleteItem(item, action) {
      // Handle delete item logic here
      console.log(item.age);
    },
  },
};
</script>
