
<template>




    <main>

        <header>
            <h2>CADASTRO</h2>
            <input type='text' v-model='produto' @keyup.enter="copiou" class='inputProdut' autofocus
                placeholder="  Escanei o codigo" />


        </header>

        <div>
            <ul>
                <li><label for="">Preço de Compra: </label><input v-model='produto' type="text"></li>
                <li><label for="">Quantidade: </label><input type="text"></li>
                <li><label for="">Nome: </label><input type="text"></li>
                <li><label for="">Validade: </label><input type="date"></li>
                <li>
                    <select name="Categoria" id="categoria" onchange="selecaoSelect()">
                        <option value="none">Categorias</option>

                        <!-- 🌱 Hortifruti / Plantas comestíveis -->
                        <option value="frutas">Frutas</option>
                        <option value="verduras">Verduras</option>
                        <option value="folhas">Folhas</option>
                        <option value="raizes">Raízes</option>

                        <!-- 🥩 Carnes e relacionados -->
                        <option value="boi">Carnes Bovinas</option>
                        <option value="porco">Carnes Suínas</option>
                        <option value="aves">Aves</option>
                        <option value="peixes">Peixes</option>
                        <option value="industrializadas">Carnes Industrializadas</option>

                        <!-- 🧂 Temperos e condimentos -->
                        <option value="temperos">Temperos</option>

                        <!-- 🛒 Produtos de prateleira -->
                        <option value="graos">Grãos</option>
                        <option value="cereais">Cereais (arroz, milho de pipoca, aveia)</option>
                        <option value="farinhas">Farinhas e derivados</option>
                        <option value="massas">Massas</option>
                        <option value="enlatados">Enlatados e conservas</option>
                        <option value="doces">Doces</option>

                        <!-- 🍦 Itens de freezer / sorvetes -->
                        <option value="sorvete">Sorvetes</option>
                        <option value="polpas">Polpas de fruta congeladas</option>

                        <option value="outros">Outros</option>
                    </select>

                </li>
            </ul>
        </div>

        <label for="">Preço de Venda</label><input type="text">
        <p>Lucro</p>


    </main>


    <!-- <p>coisa amarga {{quant}}</p> -->



</template>

<!-- <script setup>
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
</script> -->

<script>


export default {
  data() {
    return {
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

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
    font-size: 20px;

}

.inputProdut {
    width: 70%;
    height: 8vh;
    font-size: 25px;
    border: none;
    border-bottom: var(--colorVerde) 2px solid;
    border-radius: 10px;
    /* outline: none; */
    transition: all 0.2s;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
    margin-top: 20px;
}
</style>

