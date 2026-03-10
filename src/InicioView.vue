<template>

  <CabecalhoView />

  <main>

    <div class="containerInicio">
      <h1>KITANDA DO VITOR</h1>
      <img class="img" src="@/assets/logo fundo verde.png" alt="logo">

    </div>

    <div class="dados">

      <div class="dadosBanco">
        <p class="titulo">Vendidos</p>
        <p>13/07 feijão preto</p>

        <button type="button">Retirar</button>

      </div>

      <div class="dadosBanco">

        <p class="titulo">Estoque Baixo</p>
        <p>13/07 feijão preto</p>

        <button type="button">Efetuar Compra</button>

      </div>

    </div>


  </main>



</template>

<script>
import CabecalhoView from "./components/CabecalhoView.vue"

export default {
  name: 'InicioView',
  components: {
    CabecalhoView
  },

  data() {
    return {
      //   quant: 1,
    };
  },

  methods: {
    TelaPaga() {
      if (this.mostrarFinalizar == true) {
        this.mostrarFinalizar = false;
      } else {
        this.mostrarFinalizar = true;
      }

    },
  }
}



</script>

<style scoped>
.containerInicio {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 61%;
  margin: 0 3% 0 auto;
  align-items: center;


}

.img {
  width: 10vw;
}

.dadosBanco {
  width: 20vw;
  height: 40vh;
  margin: 0 0 0 10vw;
  background-color: white;
  border: 3px solid var(--colorVerde);
  border-radius: 15px;
  font-size: 17px;

  display: flex;
  flex-direction: column;
}

.titulo {
  margin-top: 10px;
  font-size: 22px;
  margin-bottom: 20px;
}

button {
  width: 80%;
  height: 30px;
  background-color: var(--colorVerde);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 17px;

  margin-top: auto;
  align-self: center;
  margin-bottom: 20px;
}

.dados{
  display: flex;
}
</style>
