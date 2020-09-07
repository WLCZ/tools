<template>
  <div class="">
    <div class="row">
      <Header
        titulo="Gerador de border-radius"
        subtitulo="Crie rapidamente códigos css para bordas."
      ></Header>
      <div class="container">
        <div class="row">
          <div class="col-6">
            <input type="number" v-model="tl" class="form-control" />
          </div>
          <div class="col-6">
            <input type="number" v-model="tr" class="form-control" />
          </div>
          <div class="col-12 py-5 d-flex justify-content-center">
            <div :style="border" class="bg-m-secondary frame"></div>
          </div>
          <div class="col-6">
            <input type="number" v-model="bl" class="form-control" />
          </div>
          <div class="col-6">
            <input type="number" v-model="br" class="form-control" />
          </div>
          <div class="col-12 py-5">
            <span id="code" class="bg-light px-2 py-3">
              {{ border }}
            </span>
          </div>
          <div class="col-12 d-flex justify-content-center">
            <button
              id="copiar"
              data-clipboard-target="#code"
              class="btn btn-m-primary btn-custom btn-lg"
            >
              COPIAR
            </button>
          </div>
        </div>
      </div>
      <Menu></Menu>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/MenuBase.vue";
import Header from "@/components/Header.vue";

import ClipboardJS from "clipboard";
new ClipboardJS("#copiar");
export default {
  components: {
    Menu,
    Header
  },
  data: function() {
    return {
      tl: "",
      tr: "",
      br: "",
      bl: ""
    };
  },
  computed: {
    border: function() {
      let bordas = `border-radius: ${this.tl}px ${this.tr}px ${this.br}px ${this.bl}px;`;
      return bordas;
    }
  }
};
</script>

<style lang="scss" scooped>
.frame {
  width: 70vw;
  height: 70vw;
}
.btn-custom {
  width: 100%;
}
@media (min-width: 750px) {
  .frame {
    width: 500px;
    height: 500px;
  }
  .btn-custom {
    width: 40%;
  }
}
</style>
