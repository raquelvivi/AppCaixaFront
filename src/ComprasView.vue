<template>

    <CabecalhoView />
    
    <!-- INPUT DE BUSCA -->
        <div class="pesquisa">

            <input type='text' v-model='produto' @keyup.enter="copiou(produto)" @input="buscarProdutos(produto)"
                class='inputProdut' autofocus placeholder="  Escanei o codigo ou Escreva o nome" />
        </div>
    <main>

        <ComprasProdtVendd 
            :produtos="this.produtos"
            @limpar-produtos="produtos = [], produto = ''"
            @enviar-ObjetosCompras="receberCompras"
             />
        <CarrinhoDeCompras 
            :ObjetosCompras="ObjetosCompras"
            />

        

    </main>

</template>




<script>
import CabecalhoView from "./components/CabecalhoView.vue"
import ComprasProdtVendd from "./components/ComprasProdt&Vendd.vue"
import CarrinhoDeCompras from "./components/CarrinhoDeCompras.vue"

import axios from 'axios'

export default {
    name: 'ComprasView',
    components: {
        CabecalhoView,
        ComprasProdtVendd,
        CarrinhoDeCompras
    },
    data() {
        return {
            produto: '',
            ObjetosCompras: [], // array para os objetos de compras
            //vendedores: [],
            produtos: [],

        }
    },
    
    methods: { 
        //Buscar produtos
        async buscarProdutos(produto) {
            if (produto.length > 2 && produto != " ") { // para não fazer requisição com 1 ou 2 caracteres, o que não é necessário
                const response = await axios.get(
                    `http://localhost:3000/prods/label/${produto}`
                )

                this.produtos = response.data
                
            } else {
                this.produtos = '';
            }
        },
        // BUSCAR PRODUTO PELO CODIGO DE BARRAS
        async copiou(produto) {
            if (produto && produto != " ") {

                const response = await axios.get(
                    `http://localhost:3000/prods/${produto}`
                );
                let dados = response.data;

                console.log(dados[0]);

                if (response.status >= 200 && response.status < 300) {

                    this.produtos = dados[0]
                    this.produto = ""
                }
            }

        },
        receberCompras(lista){
            this.ObjetosCompras = lista
        }
        }
        
        
    

}

</script>




<style scoped>

main {
    display: flex;
    justify-content: space-around;
    margin: 0 0 0 8%;
}


.pesquisa {
    width: 70vw;
    padding-top: 8vh;
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

.inputProdut:focus {
    outline: none;
    border-color: var(--colorVerde);
    box-shadow: 0 0 5px var(--colorVerde);
}


</style>
