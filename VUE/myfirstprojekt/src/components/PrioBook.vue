<template>
  <div>
    <button @click="toggleState1">{{ buttonBuy }}</button>
    <button @click="toggleState2">{{ buttonRead }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      booked: false,
      read: false,
    };
  },
  computed: {
    buttonBuy() {
      return this.booked ? "🔴" : "🟢";
    },
    buttonRead() {
      return this.read ? "📖" : "📙";
    },
  },
  methods: {
    toggleState1() {
      this.booked = !this.booked;
    },
    toggleState2() {
      this.read = !this.read;
    },
  },
};
</script>

<style scoped>
/* Füge hier deinen eigenen CSS-Stil hinzu, falls benötigt */
</style>
