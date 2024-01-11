<!-- neue Tabelle mit INhalte aus den Daten-->
<!-- welche Tabelle -->
<!-- key Wort title-->
<template>
  <tr class="table-item__table-row">
    <td>{{ title }}</td>

    <td>{{ isbn }}</td>
    <td><BaseButton text="Add Bookmark" variant="secondary" /></td>
  </tr>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
export default {
  components: {
    BaseButton,
  },
  props: {
    // Daten Übergabe
    title: String,
    isbn: String,
  },
};
</script>

<style scoped>
.table-item__table td {
  padding: 12px 15px;
}
</style>
