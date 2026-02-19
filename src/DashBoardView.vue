
<template>
    <main>

        <!-- <header>
            <h2>CADASTRO</h2>
            <input type='text' v-model='produto' @keyup.enter="copiou" class='inputProdut' autofocus
                placeholder="  Escanei o codigo" />


        </header> -->

        <p class="titulo">Cadastro</p>

        <div class="caixa">
  <div class="form-grid">

    <div class="form-group grande">
      <label>Código</label>
      <input v-model="codigo" type="text">
    </div>

    <div class="form-group grande">
      <label>Nome</label>
      <input v-model="nome" type="text">
    </div>

    <div class="form-group">
      <label>Quantidade Mínima</label>
      <input v-model="qMinimo" type="number">
    </div>

    <div class="form-group">
      <label>Validade</label>
      <input v-model="validade" type="date">
    </div>

    <div class="form-group">
      <label>Quantidade</label>
      <input v-model="qAtual" type="number">
    </div>

    <div class="form-group">
      <label>Vendedor</label>
      <input v-model="vendedor" type="text">
    </div>

    <div class="form-group">
      <label>Preço de Compra</label>
      <input v-model="precoCompra" type="text">
    </div>

    <div class="form-group">
      <label>Categoria</label>
      <select>
        <option value="none">Categorias</option>
        <option value="frutas">Frutas</option>
        <option value="verduras">Verduras</option>
        <option value="graos">Grãos</option>
        <option value="outros">Outros</option>
      </select>
    </div>

  </div>

  <button class="btnSalvar">Salvar Produto</button>
</div>

        


    </main>


    <!-- <p>coisa amarga {{quant}}</p> -->



</template>

<!-- <script setup>
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
</script> -->

<script>


export default {
  name: 'DashboardView',

  data() {
    return {
      vendedor: '',
      codigo: '',
      precoCompra: 0,
      validade: '',
      qMinimo: 3,
      qAtual: 0,

      produto: "", //7898912284129
      quant: "1",
      valor: 0,
      tdPro: 0,
      lista: [],
      listaObjetos: [
        { codigo: "", nome: "", valor: 0, quantidade: 0 },
        {}]
    };
  },
  methods: {
    TelaPaga() {
      alert("clicou");
    },
    copiou() {
      if (this.produto && this.produto != " ") {

        //fazer verificação se o codigo de barras é achado ou o nome é achado
        //caso não seja cai no else
        this.lista.push(this.produto)
        this.produto = ""
      }

    },
    apagar() {
      alert("apagou");
    }
  },
};



</script>

<style scoped>
main {
  min-height: 100vh;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(135deg, #88b082, #4f694f);
}

.titulo {
  font-size: 32px;
  font-weight: bold;
  color: white;
  margin-bottom: 30px;
}

.caixa {
  width: 80%;
  max-width: 900px;
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.grande {
  grid-column: span 2;
}

label {
  margin-bottom: 6px;
  font-weight: 600;
  color: #2e7d32;
}

input, select {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  transition: 0.2s;
}

input:focus, select:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 0 3px rgba(76,175,80,0.2);
}

.btnSalvar {
  margin-top: 30px;
  width: 100%;
  padding: 14px;
  background: #2e7d32;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.btnSalvar:hover {
  background: #1b5e20;
  transform: translateY(-2px);
}


</style>

