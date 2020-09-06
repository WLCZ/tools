<template>
  <div class="row">
    <div class="col-12 text-center bg-primary text-white pt-3">
      <h4 class="">TOOLBOX</h4>
      <p>sua caixa de ferramentas!</p>
    </div>
    <div class="col-12 px-5 pt-5">
      <ListaDeApps />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ListaDeApps from "@/components/ListaDeApps.vue";

export default {
  name: "Home",
  components: {
    ListaDeApps
  }
};
</script>
