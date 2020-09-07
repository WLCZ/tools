<template>
  <div class="">
    <div class="row">
      <div class="col-12 text-center text-white bg-primary">
        <h4>Gerador de Links para WhatsApp</h4>
      </div>
      <div class="container">
        <div class="col-12 py-5">
          <div class="form-group">
            <label for="">NÚMERO QUE RECEBERÁ AS MENSAGENS</label>
            <input
              type="text"
              v-model="numero"
              class="form-control"
              placeholder="+55 99 9 0000 0000"
            />
          </div>
          <div class="form-group">
            <label for="">MENSAGEM QUE O NÚMERO ESCOLHIDO RECEBERÁ</label>
            <textarea
              type="text"
              v-model="mensagem"
              class="form-control"
              placeholder="Opcional"
            />
          </div>
          <div v-show="showBtn" class="row">
            <div
              class="col-12 d-flex justify-content-between justify-content-lg-around"
            >
              <button @click="Geralink()" class="btn btn-success col-5">
                GERAR LINK
              </button>
              <button
                v-show="numero"
                @click="(numero = ''), (mensagem = ''), (url = '')"
                class="btn btn-danger col-5"
              >
                LIMPAR
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row" v-show="this.url">
        <div class="col-12">
          <div class="form-group">
            <label for="exampleFormControlTextarea1">SEU LINK FOI GERADO</label>
            <textarea
              class="form-control"
              id="url"
              rows="3"
              v-model="this.url"
              readonly
            ></textarea>
          </div>
        </div>
        <div
          class="col-12 d-flex justify-content-between justify-content-lg-around"
        >
          <button
            id="copiar"
            data-clipboard-target="#url"
            class="btn btn-primary col-5"
          >
            COPIAR
          </button>
          <a target="_blank" :href="this.url" class="btn btn-warning col-5"
            >TESTAR</a
          >
        </div>
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
  data() {
    return {
      numero: "",
      mensagem: "",
      url: "",
      showBtn: false
    };
  },
  methods: {
    Geralink() {
      let n = this.numero.replace(/[^0-9]/g, "");
      let m = encodeURI(this.mensagem);
      this.url = `https://wa.me/send?phone=${n}&text=${m}`;
    }
  },
  watch: {
    numero() {
      this.numero.replace(/[^0-9]/g, "").length >= 13
        ? (this.showBtn = true)
        : (this.showBtn = false);
    }
  }
};
</script>

<style>
textarea {
  resize: none;
}
</style>
