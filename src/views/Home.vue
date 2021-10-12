<template>
  <h1>Home Screen</h1>
  <button class="btn btn-primary">primary</button>
  <button @click="goDaybook" class="btn btn-secondary">Day Book</button>
  <button class="btn btn-success">success</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  methods: {
    goDaybook() {
      this.$router.push({ name: "no-entry" });
    }
  }
});
</script>
