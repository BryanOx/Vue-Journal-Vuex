<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">Nothing selected</h1>
  </div>
  <Fab />
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
  components: {
    Fab: defineAsyncComponent(() =>
      import(/* webpackChunkName: "Fab" */ "../components/Fab.vue")
    )
  }
});
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>
