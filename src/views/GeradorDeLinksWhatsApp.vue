<template>
  <div class="">
    <div class="row">
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
        <div v-show="showBtn" class="btn-group">
          <div class=" px-5 d-flex justify-content-center">
            <button
              @click="Geralink()"
              class="btn btn-success btn-block btn-lg"
            >
              GERAR LINK
            </button>
          </div>
          <div class=" px-5 d-flex justify-content-center">
            <button
              v-show="numero"
              @click="(numero = ''), (mensagem = ''), (url = '')"
              class="btn btn-danger btn-lg"
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
          ></textarea>
        </div>
      </div>
      <div class="col-12 d-flex justify-content-around">
        <button
          id="copiar"
          data-clipboard-target="#url"
          class="btn btn-success"
        >
          COPIAR
        </button>
        <a target="_blank" :href="this.url" class="btn btn-warning">TESTAR</a>
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
      numero: "",
      mensagem: "",
      url: "",
      showBtn: false
    };
  },
  methods: {
    Geralink: function() {
      let n = this.numero.replace(/[^0-9]/g, "");
      let m = encodeURI(this.mensagem);
      this.url = `https://wa.me/send?phone=${n}&text=${m}`;
    }
  },
  watch: {
    numero: function() {
      if (this.numero.replace(/[^0-9]/g, "").length >= 13) {
        this.showBtn = true;
      } else {
        this.showBtn = false;
      }
    }
  }
};
</script>

<style></style>
