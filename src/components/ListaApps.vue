<template>
  <div class="col-12">
    <div class="list-group">
      <div class="list-group-item">
        <router-link class="text-dark" to="/gerador-whatsapp">
          GERADOR DE LINKS PARA WHATSAPP
        </router-link>
      </div>
      <div class="list-group-item">
        <router-link class="text-dark" to="/gerador-de-border-radius">
          GERADOR DE BORDER-RADIUS
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListaApps",
  props: {
    msg: String
  }
};
</script>
