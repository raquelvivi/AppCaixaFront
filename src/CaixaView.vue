
<template>

     

  <FinalizarCompra v-if="mostrarFinalizar" 
    :lista="ItemProduto"
    :valor-total="valorTotal"
    :quantidade-total="tdPro"
    @fechar="fecharFinalizar"
  />

  <!-- Cabeçario -->
  <header>

    <!-- logo -->
    <!-- <img class="ico" style="width: 100%;" src="@/assets/Design sem nome.png" alt="logo"> -->

    <div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6 text-blue-500 ico" style=" margin-top: 40px;">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684
          2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6
          20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75
          0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>  
            <p>Infor</p>
    </div>
    <!-- Icone de carrinho -->
    

    <!-- Icone de Dasbord -->
    <!-- <a href="#Dasbord"> -->
      <div>
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" @click="this.$router.push('/CadastroProdutos')" stroke-width="1.5" stroke="currentColor" cursor="pointer"
          class="size-6 ico">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
        <p>Cadastros</p>
      </div>
    
    <!-- </a> -->


  </header>

  <div>
    <div class="pesquisa">

      <input type='text' v-model='produto' @keyup.enter="copiou" @input="buscarProdutos(produto)" class='inputProdut' autofocus
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

          Produtos: {{ tdPro }}
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


export default {
    name: 'CaixaView',
  components: {
    FinalizarCompra
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
    },

    async buscarProdutos(produto) {
      if (produto.length > 2) {
        const response = await axios.get(
          `http://localhost:3000/prods/label/${produto}`
        )

        this.produtos = response.data
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
  max-height: 100vh;
  width: 100px;
  margin-top: -8vh;
  margin-left: -5px;
  padding-bottom: 80px;
  z-index: 1;
  position: absolute;
  background-color: rgb(255, 255, 255);
  display: block;
  border: var(--colorVerde) 2px solid;
  border-top: none;
  border-left: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* var(--colorBranco) */
}

.ico {
  margin-top: 20px;
  width: 50%;

  border-bottom: var(--colorVerde) 2px solid;
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
