
<template>

    <CabecalhoView/>

    <div>

        <div class="centro">

            <div id="btProdutos" class="btdados" style=" z-index: 10; " @click="mudar(1)">
                <p>
                    Produtos
                </p>
            </div>

            <div id="pgProdutos" class="pgdados" style=" z-index: 9;">

                <div class="containerInput">
                    <input type='text' v-model='produto' @input="buscarProdutos(produto)" class='inputProdut'
                    placeholder="Que produto você procura?" />

                    <p>
                        Filtros
                    </p>
                </div>

                <div class="tabela-container">
                    <table class="tabela-produtos">
                        <colgroup>
                        <col class="col-nome" />
                        <col class="col-validade" />
                        <col class="col-preco" />
                        <col class="col-categoria" />
                        </colgroup>

                        <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Validade</th>
                            <th>Preço de compra</th>
                            <th>Categoria</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr v-for="produtoItem in produtos" :key="produtoItem.codigo" @click="abrirProduto(produtoItem.codigo)">
                            <td :title="produtoItem.nome">
                            {{ produtoItem.nome }}
                            </td>

                            <td>
                            {{ produtoItem.validade }}
                            </td>

                            <td>
                            R$ {{ produtoItem.precocompra }}
                            </td>

                            <td :title="produtoItem.categoria">
                            {{ produtoItem.categoria }}
                            </td>
                        </tr>

                        <tr v-if="produtos.length === 0">
                            <td colspan="4" class="sem-produtos">
                            Nenhum produto encontrado.
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>

            </div>

        </div>













         <div class="centro" >

            <div id="btFornecedores" class="btdados" style=" z-index: 8; background-color: #ffe6d5; margin: -20px 0 0 15vw"  @click="mudar(2)">
                <p>
                    Fornecedores
                </p>
            </div>

            <div id="pgFornecedores" class="pgdados" style=" z-index: 7; background-color: #ffe6d5; margin: 14px 0 0 0;">

                <div class="containerInput">
                    <input type='text' v-model='fornecedor' @input="buscarFornecedor(fornecedor)" class='inputProdut'
                    placeholder="Qual fornecedor você procura?" />

                    <p>
                        Filtros
                    </p>
                </div>

                <div class="tabela-container">
                    <table class="tabela-produtos">
                        <colgroup>
                        <col class="col-nome" />
                        <col class="col-validade" />
                        <col class="col-preco" />
                        <col class="col-categoria" />
                        </colgroup>

                        <thead>
                        <tr>
                            <th>Nome</th>
                            <th>cnpj</th>
                            <th>contato</th>
                            <th>produtos</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr v-for="fornecedorItem in fornecedores" :key="fornecedorItem.id" @click="abrirfornecedor(fornecedorItem.id)">
                            <td :title="fornecedorItem.nome">
                            {{ fornecedorItem.nome }}
                            </td>

                            <td>
                            {{ fornecedorItem.cnpj }}
                            </td>

                            <td>
                            R$ {{ fornecedorItem.contato }}
                            </td>

                            <!-- //quantidade de produtos que compramos dele -->
                            <td :title="fornecedorItem.produtos">  
                            {{ fornecedorItem.produtos }}
                            </td>
                        </tr>

                        <tr v-if="fornecedores.length === 0">
                            <td colspan="4" class="sem-produtos">
                            Nenhum fornecedor encontrado.
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                
            </div>

        </div>















         <div class="centro">

            <div id="btVendas" class="btdados" style=" z-index: 6; background-color: #ded5ff; margin: -40px 0 0 25vw"  @click="mudar(3)">
                <p>
                    Vendas
                </p>
            </div>

            <div id="pgVendas" class="pgdados" style=" z-index: 5; background-color: #ded5ff; margin: -6px 0 0 0;">

                <div class="containerInput">
                    <input type='text' v-model='vendasFeitas' @input="buscarVendas(vendasFeitas)" class='inputProdut'
                    placeholder="Qual vendas você procura?" />

                    <p>
                        Filtros
                    </p>
                </div>

                <div class="tabela-container">
                    <table class="tabela-produtos">
                        <colgroup>
                        <col class="col-nome" />
                        <col class="col-validade" />
                        <col class="col-preco" />
                        <col class="col-categoria" />
                        </colgroup>

                        <thead>
                        <tr>
                            <th>id</th>
                            <th>total</th>
                            <th>data</th>
                            <th>hora</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr v-for="vendaItem in vendas" :key="vendaItem.id" @click="abrirvenda(vendaItem.id)">
                            <td :title="vendaItem.nome">
                            {{ vendaItem.id }}
                            </td>

                            <td>
                            {{ vendaItem.total}}
                            </td>

                            <td>
                            {{ vendaItem.data}}
                            </td>

                            <td :title="vendaItem.produtos"> 
                            {{ vendaItem.produtos }}
                            </td>
                        </tr>

                        <tr v-if="vendas.length === 0">
                            <td colspan="4" class="sem-produtos">
                            Nenhum venda encontrado.
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                
            </div>

        </div>




    </div>



</template>


<script>

import axios from 'axios';
import CabecalhoView from "./components/CabecalhoView.vue";

export default {
    name: 'PesquisaView',
  components: {
    CabecalhoView
  },
  async created() { 
	await this.InicioBusca();
  await this.buscarVendas();
  await this.buscarfornecedoresTodos();
	},
  
  data() {
    return {
      produtos: [],
      fornecedores: [],
      vendas:[],
      fornecedor: '',
      produto: '',
    };
  },

  methods: {
    mudar(num) {

        let btFornecedores = document.getElementById("btFornecedores");
        let pgFornecedores = document.getElementById("pgFornecedores");
        let btVendas = document.getElementById("btVendas");
        let pgVendas = document.getElementById("pgVendas");

      if(num == 1){
        
        pgFornecedores.style.zIndex = 7;
        btFornecedores.style.zIndex = 8;

        pgVendas.style.zIndex = 5;
        btVendas.style.zIndex = 6;
        
      } else if(num == 2){

        pgFornecedores.style.zIndex = 11;
        btFornecedores.style.zIndex = 12;

        pgVendas.style.zIndex = 5;
        btVendas.style.zIndex = 6;
        
      } else if(num == 3){

        pgFornecedores.style.zIndex = 7;
        btFornecedores.style.zIndex = 8;

        pgVendas.style.zIndex = 11;
        btVendas.style.zIndex = 12;

      }else{
        console.log("erro de front end, por favor contate o desenvolvedor");
      }
      
    },

    async buscarProdutos(produto) {
      if (produto.length > 2 && produto != " ") { // para não fazer requisição com 1 ou 2 caracteres, o que não é necessário
        const response = await axios.get(
          `http://localhost:3000/prods/label/${produto}`
        )

        

        this.produtos = response.data
      }else {
          this.produtos = [];
        }
    },

    async InicioBusca() {
        const response = await axios.get(
          `http://localhost:3000/prods`
        )
        if (response.data.length > 20) {
          this.produtos = response.data.slice(0, 16); // Exibe apenas os primeiros 16 produtos
        } else {
          this.produtos = response.data
        }

        
    },

    async buscarFornecedor(fornecedor) {
      if (fornecedor.length > 2 && fornecedor != " ") { // para não fazer requisição com 1 ou 2 caracteres, o que não é necessário
        const response = await axios.get(
          `http://localhost:3000/venderd/nome/${fornecedor}`
        )

        this.fornecedores = response.data
      }else {
          this.fornecedores = [];
        }
    },

    async buscarVendas() {
        const response = await axios.get(
          `http://localhost:3000/compras/ultimas-vendas`
        )

        this.vendas = response.data
    },
    async buscarfornecedoresTodos() {
        const response = await axios.get(
          `http://localhost:3000/venderd`
        )

        this.fornecedores = response.data;
        // console.log("fornecedores", this.fornecedores);
    },
    abrirProduto(produtoId) {
      console.log("Produto clicado com ID:", produtoId);
      // Redireciona para a página de edição do produto com o ID do produto
      this.$router.push({ name: 'ProdutoEditar', params: { id: produtoId } });
    },
    abrirfornecedor(fornecedorId) {
      console.log("Produto clicado com ID:", fornecedorId);
      // Redireciona para a página de edição do produto com o ID do produto
      this.$router.push({ name: 'FornecedorEditar', params: { id: fornecedorId } });
    },
    abrirvenda(vendaId) {
      console.log("venda clicado com ID:", vendaId);
      // Redireciona para a página de edição do venda com o ID do venda
      this.$router.push({ name: 'VendaEditar', params: { id: vendaId } });
    },
  }
};

    
</script>

<style scoped>
 .centro{
    padding-top: 20px;
    margin-left: 6.5vw;
    

 }
 .btdados{
    display: flex;
    margin-left: 5vw;
    padding: 10px;
    font-size: 16px;
    width: 8vw;
    position: absolute; 
    justify-content: center;
    cursor: pointer;
    border-radius: 5px 5px 0 0 
    
 }

 .pgdados{
    height: 200vh;
    width: calc(100vw - 6.5vw);
    position: absolute;
    margin-top: 35px;
    
 }

 .pgdados,.btdados{
    background-color: #ffffff;
    border: 1px solid #000000;
    border-bottom: none;
 }

 .inputProdut {
    
    min-width: 50vw;
    height: 5vh;
    font-size: 20px;
    border: var(--colorVerde) 2px solid;
    text-align: center;
    background-color: #ffffff;
  }

  .containerInput p {
    padding: 6px 20px;
    font-size: 15px;
    border: #000000 1px solid;
    cursor: pointer;


  }

  .containerInput {

    width: 80%;
    margin-top: 2%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    right: auto;
    
  }

  .tabela-container {
    
    background-color:blue;
  width: 90%;
  max-width: 1200px;
  margin: 7% auto;
  overflow-x: auto;

  border: 1px solid #000000;
  border-radius: 8px;
}

.tabela-produtos {
  width: 100%;
  min-width: 700px;
  border-collapse: collapse;
  table-layout: fixed;
  background-color: white;
}

.tabela-produtos th,
.tabela-produtos td {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 10px 0;
}
/* .tabela-produtos td {
  padding: 14px 12px;
  text-align: left;
  border-bottom: 1px solid #00000020;

  /* A parte que impede textos gigantes de bagunçarem tudo */
  /* overflow-wrap: anywhere;
  word-break: break-word;
} */ 

.tabela-produtos th {
  background-color: var(--colorVerde);
  color: white;
  font-size: 13px;
}
.tabela-produtos tr {
  font-size: 13px;
  height: 30px;
}

.tabela-produtos tbody tr:hover {
  background-color: #e9fdea;
  cursor: pointer;
}

/* Largura de cada coluna */
.col-nome {
  width: 40%;
}

.col-validade {
  width: 18%;
}

.col-preco {
  width: 20%;
}

.col-categoria {
  width: 22%;
}

.sem-produtos {
  text-align: center !important;
  padding: 30px !important;
  color: #666;
}

</style>


