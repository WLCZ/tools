<template>
  <div class="row">
    <div class="col-12 bg-primary text-center text-white mb-5 pt-3">
      <h4>ToolBox</h4>
      <p>Sua caixa de ferramentas online!</p>
    </div>
    <ListaApps />
  </div>
</template>

<script>
// @ is an alias to /src
import ListaApps from "@/components/ListaApps.vue";

export default {
  name: "Home",
  components: {
    ListaApps
  }
};
</script>
