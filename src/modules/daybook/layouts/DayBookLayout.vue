<template>
  <NavBar />

  <div class="d-flex">
    <div class="col-4">
      <EntryList/>
    </div>
    <div class="col">
      <router-view/>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineAsyncComponent, defineComponent } from 'vue'

export default defineComponent({
  components: {
    NavBar: defineAsyncComponent(() => import(
      /* webpackChunkName: "NavBar" */ '../components/NavBar.vue'
    )),
    EntryList: defineAsyncComponent(() => import(
      /* webpackChunkName: "EntryList" */ '../components/EntryList.vue'
    ))
  }
})
</script>
