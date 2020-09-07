<template>
  <div class="row">
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
