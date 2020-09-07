<template>
  <div class="">
    <div class="row">
      <div class="col-12">
        <h4>
          Gerador de Border-radius
        </h4>
      </div>
      <div class="col-6">
        <input type="number" v-model="tl" class="form-control" />
      </div>
      <div class="col-6">
        <input type="number" v-model="tr" class="form-control" />
      </div>
      <div class="col-12 py-5 d-flex justify-content-center">
        <div :style="border" class="bg-warning text-center frame"></div>
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
      <div class="col-12">
        <button
          id="copiar"
          data-clipboard-target="#code"
          class="btn btn-primary btn-block btn-lg"
        >
          COPIAR
        </button>
      </div>
    </div>
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from "@/components/MenuBase.vue";
import ClipboardJS from "clipboard";
new ClipboardJS("#copiar");
export default {
  components: {
    Menu
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
</style>
