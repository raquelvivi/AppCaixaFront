
<template>

     

  <FinalizarCompra v-if="mostrarFinalizar" 
    :lista="ItemProduto"
    :valor-total="valorTotal"
    :quantidade-total="tdPro"
    @fechar="fecharFinalizar"
  />

  <CabecalhoView />

  <div>
    <div class="pesquisa">

      <input type='text' v-model='produto' @keyup.enter="copiou(produto)" @input="buscarProdutos(produto)" class='inputProdut' autofocus
        placeholder="  Escanei o codigo" />

      <p class="x">X</p>

      <input v-model="quant" class="quant" type="text" />
    </div>

    <ul v-if="produtos.length" class="listaResposte">
        <li v-for="(item, index) in produtos" :key="index" @click="escolheuProdut(item)">
          <p>{{ item.nome }}</p> <p>{{ item.precovenda }}</p> 
        </li>
    </ul>

  </div>
  




  <ul class="UlLista">
    <li v-for="(item, index) in ObjetosCompras" :key="index" class="lista">
      <p> {{ item.quantidadeV }}</p> <p>{{ item.nome }}</p> <p>{{ item.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</p>
    </li>
  </ul>




  <main>


    <img class="img" src="@/assets/logo fundo verde.png" alt="logo">

    <div class="info">
      <div class="bt">
        <p class="noticias">
          Valor: {{ valorTotal.toLocaleString('pt-BR', {  // 2 decimais no minimo e maximo
                      minimumFractionDigits: 2, 
                      maximumFractionDigits: 2 
                    }) }}

          Produtos: {{ tdPro.toLocaleString('pt-BR', {  // 2 decimais no minimo e maximo
                      minimumFractionDigits: 2, 
                      maximumFractionDigits: 2 
                    }) }}
        </p>
      </div>


      <div @click="TelaPaga" class="botao">
        <p style=" margin-top: 13%;">Salvar</p>
      </div>

    </div>

  </main>


  <!-- <p>coisa amarga {{quant}}</p> -->



</template>

<!-- <script setup>
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
</script> -->

<script>
import axios from 'axios'
import FinalizarCompra from "./components/FinalizarCompra.vue"
import CabecalhoView from "./components/CabecalhoView.vue"

export default {
    name: 'CaixaView',
  components: {
    FinalizarCompra,
    CabecalhoView
  },
  
  data() {
    return {
      quant: 1,
      valorTotal: 0,
      tdPro: 0,
      lista: [],
      ObjetosCompras: [{ nome: "Item", valor: "Preço Total", quantidadeV: "Quantidade" }],
      ItemProduto: [],
      mostrarFinalizar: false,
      produto: '',
      produtos: []
    };
  },

  methods: {
    TelaPaga() {
      if(this.mostrarFinalizar == true){
        this.mostrarFinalizar = false;
      }else{
        this.mostrarFinalizar = true;
      }
      
    },
    async copiou(produto) {
      if (produto && produto != " ") {

        const response = await axios.get(
          `http://localhost:3000/prods/${produto}`
        );
        let dados = response.data;

        console.log(dados[0]); 

        if(response.status >= 200 && response.status < 300){
        
        this.escolheuProdut(dados[0]);
        this.produto = ""
    }
        
      }

    },
    apagar() {
      alert("apagou");
    },

    async buscarProdutos(produto) {
      if (produto.length > 2 && produto != " ") { // para não fazer requisição com 1 ou 2 caracteres, o que não é necessário
        const response = await axios.get(
          `http://localhost:3000/prods/label/${produto}`
        )

        this.produtos = response.data
      }else {
          this.produtos = '';
        }
    },

    escolheuProdut(item){
      // this.lista.push(item);

      //lista de itens
      this.ObjetosCompras.push( { codigo: item.codigo, nome: item.nome, valor: (item.precovenda * this.quant), quantidadeV: this.quant } );
      this.valorTotal = this.valorTotal + (item.precovenda * this.quant); //valor total
      this.tdPro = parseFloat(this.tdPro) + parseFloat(this.quant) ; // quantidade de produtos

      this.ItemProduto.push({ id: item.codigo, quantComprada: this.quant, preco: item.precovenda, nome: item.nome, quantAntesCompra: item.quant }) //lista de objetos para enviar para o banco;

      //limpando variaveis
      this.produto = '';
      this.produtos = [];
      this.quant = 1;
    },
    fecharFinalizar(){
      this.mostrarFinalizar = false;
      this.valorTotal = 0;
      this.tdPro = 0;
      this.ObjetosCompras = [{ nome: 'Item', valor: 'Preço Total', quantidadeV: 'Quantidade' }];
      this.ItemProduto = [];
    },


  }
};



</script>
<style>
#app{
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  font-size: 20px;
}
</style>

<style scoped>

header {
  margin-top: -8vh;
}

.pesquisa {
  display: flex;
  justify-content: space-evenly;
  margin: 0 10% 0 5%;
  margin-top: 8vh;
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
}

.quant {
  width: 4%;
  height: 7vh;
  font-size: 25px;
  border: var(--colorVerde) 2px solid;
  border-radius: 10px;
  text-align: center;
  background-color: transparent;
  outline: none;

}

.inputProdut:focus {
  outline: none;
  border-color: var(--colorVerde);
  box-shadow: 0 0 5px var(--colorVerde);
}



.noticias {

  white-space: pre-line;
  width: 12vw;
  text-align: left;
  font-size: 25px;
  padding: 20px 0 20px 0;
  margin-left: 20px;

}

.bt {
  border: var(--colorVerde) 3px solid;
  border-radius: 10px;
  background-color: var(--colorBranco);
  position: relative;
  
}

.botao {
  background-color: var(--colorVerde);
  width: 12vw;
  height: 10vh;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  color: var(--colorBranco);
  box-shadow: 2px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  /*sombra*/


}

.img {
  width: 28%;
  margin: 30px;
  margin-top: 20px;
  margin-bottom: -20px;
  margin-left: -40%;
}

.UlLista {
  position: absolute;
  right: 5vw;
  margin-top: 20vh;
  width: 40vw;
  height: 60vh;
  background-color: var(--colorBranco);
  border: var(--colorVerde) 2px solid;
  border-radius: 10px;
}

.UlLista li {
  padding: 5px 0 0px 0;
  display: flex;
  justify-content: space-between;
}

.UlLista li p{
   padding: 0 5% 0 5%;
}

.info {
  display: flex;
  width: 50vw;
  /* background-color: blue; */
  justify-content: space-evenly;
  align-items: center;
}

.listaResposte {
  position: absolute;
  width: 50%;
  max-height: 50vh;
  font-size: 20px;
  z-index: 2;
  margin-left: calc(5px + 10%);
  border: none;
  border: var(--colorVerde) 2px solid;
  border-radius: 10px;
  transition: all 0.2s;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
  background-color: var(--colorBranco);
}

.listaResposte li{
  margin: 5px 0 5px 0;
  padding: 15px 0 15px 0;
  justify-content: space-between;
  display: flex;
}
.listaResposte li:hover{
  background-color: var(--colorVerde);
  color: var(--colorBranco);
  cursor: pointer;
}
.listaResposte li p{
  padding: 0 10% 0 10%;

}


</style>
