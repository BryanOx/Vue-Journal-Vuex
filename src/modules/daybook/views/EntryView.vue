<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-2 fw-bold">11</span>
      <span class="mx-1 fs-2">October</span>
      <span class="mx-2 fs-4 fw-light">2021, Monday</span>
    </div>
    <div>
      <button class="btn btn-outline-danger mx-2">
        Delete
        <i class="fa fa-trash-alt"></i>
      </button>

      <button class="btn btn-outline-primary">
        Upload
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Que sucedió hoy?" />
  </div>
  <Fab icon="fa-save" />
  <img
    src="https://wallpaperforu.com/wp-content/uploads/2021/04/Wallpaper-Uchiha-Itachi-Illustration-Naruto-Sasuke-Uchiha46-1536x864.jpg"
    alt="entry-picture"
    class="img-thumbnai"
  />
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
  components: {
    Fab: defineAsyncComponent(() =>
      import(
        /* webpackChunkName: "Fab" */ "@/modules/daybook/components/Fab.vue"
      )
    )
  }
});
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
