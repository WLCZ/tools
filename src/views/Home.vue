<template>
  <div class="row">
    <Header
      titulo="ToolBox"
      subtitulo="Sua caixa de ferramentas online!"
    ></Header>
    <ListaApps />
  </div>
</template>

<script>
// @ is an alias to /src
import ListaApps from "@/components/ListaApps.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    ListaApps,
    Header
  }
};
</script>
