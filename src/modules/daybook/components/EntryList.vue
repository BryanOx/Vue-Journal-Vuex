<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="text" class="form-control" placeholder="Buscar entradas" />
    </div>
    <div class="entry-scrollarea">
      <Entry v-for="item in 21" :key="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
  components: {
    Entry: defineAsyncComponent(() =>
      import(/* webpackChunkName: "Entry" */ "./Entry.vue")
    )
  }
});
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}
.entry-scrollarea {
  height: calc(100vh - 110px);
  overflow: scroll;
}
</style>
