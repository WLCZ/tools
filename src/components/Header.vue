<template>
  <div class="col-12 bg-m-secondary text-center  text-white py-3 mb-3">
    <h4>{{ titulo }}</h4>
    <p>{{ subtitulo }}</p>
  </div>
</template>

<script>
export default {
  props: ["titulo", "subtitulo"]
};
</script>

<style></style>
