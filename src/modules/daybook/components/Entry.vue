<template>
  <div class="entry-container pointer mb-3 p-2" @click="$router.push({
    name: 'entry-view',
    params: {
      id: 21,
    },
  })">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold ">07</span>
      <span class="mx-1 fs-5">Agosto</span>
      <span class="mx-2 fw-light">1999</span>
    </div>
    <div class="entry-description">
      Ut do excepteur reprehenderit elit. Non ex magna nostrud proident Lorem minim fugiat nostrud reprehenderit duis labore. Minim veniam incididunt sit nisi deserunt Lorem eiusmod aliqua.
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  
})
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;
  &:hover {
    background-color: lighten($color: grey, $amount: 45 );
  }
  entry-description: {
    font-size: 12px;
  }
}
</style>