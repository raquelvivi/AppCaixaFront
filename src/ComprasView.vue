<template>

    <CabecalhoView />

        <!-- INPUT DE BUSCA -->
    <div class="pesquisa">

        <input type='text' v-model='produto' @keyup.enter="copiou(produto)" @input="buscarProdutos(produto)"
            class='inputProdut' autofocus placeholder="  Escanei o codigo ou Escreva o nome" />
    </div>

    <main>

        <div>
            <!-- LISTA DE PRODUTOS -->
            <div>
                <ul class="listaResposte">
                    <li v-for="(item, index) in produtos" :key="index" @click="escolheuProdut(item)">
                        <p>{{ item.nome }}</p>
                        <p>{{ item.precovenda }}</p>
                    </li>
                </ul>

            </div>

            <!-- LISTA DE VENDEDORES -->
            <div class="listaVendedores">
                <p>Vendedores:</p>
                <ul class="listaResposte ulVend">
                    <li v-for="(item, index) in vendedores" :key="index" @click="escolheuProdut(item)">
                        <p>{{ item.vendedor }}</p>
                        <p>{{ item.Preco }}</p>
                    </li>
                    <li style="color: red;"  @click="addVendedores(item)">
                        <p>Adicionar Vendedor</p>
                        <p>+</p>
                    </li>
                </ul>

            </div>

        </div>

        <!-- LISTA DE COMPRAS -->
        <div class="listaCompras">
            <p>Lista de Compras:</p>
            <ul class="UlLista">
            
            <li v-for="(item, index) in ObjetosCompras" :key="index" class="lista"
                :style="{ backgroundColor: (index % 2) === 0 ? 'white' : '#E7F5E7' }">
                <p v-if="!item.editando" @click="item.editando = true">
                    {{ item.quantidadeV }}
                </p>

                <input v-else v-model="this.quantNova"
                    @blur="item.editando = false; atualizarItem(item, this.ObjetosCompras, this.quantNova)" />
                <p>{{ item.nome }}</p>

                <div style="display: flex;">
                    <p>{{ item.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
                    </p>
                    <p :style="{ display: index === 0 ? 'none' : 'block' }" @click="retirar(item, this.ObjetosCompras)"
                        style=" cursor: pointer; color: brown;">X</p>
                </div>

            </li>
        </ul>
        </div>

    </main>









</template>




<script>
import axios from 'axios'
import CabecalhoView from "./components/CabecalhoView.vue"

export default {
    name: 'ComprasView',
    components: {
        CabecalhoView
    },
    data() {
        return {
            produto: '',    // v-model do input principal
            quant: 1,       // v-model da quantidade
            produtos: [],   // array para a lista do v-for
            vendedores: [],   // array para a lista de vendedores
        }
    },
    methods: { //BUSCAR PRODUTOS
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

                    this.escolheuProdut(dados[0]);
                    this.produto = ""
                }
            }

        },
        async escolheuProdut(item) {
            console.log(item);
            const response = await axios.get(
                    `http://localhost:3000/tem/${item.codigo}`
                );
            this.vendedores = response.data;
            console.log(this.vendedores);
            this.produtos = []; // Limpa a lista após escolher
        },
        async addVendedores(item) {
            console.log("Adicionar vendedor:", item);
            // Lógica para adicionar um novo vendedor
        },
         
    }

}

</script>




<style scoped>
.pesquisa {

    margin: 0 10% 0 0%;
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

.ulVend{
    min-height: 30vh;
    max-height: 30vh;
    overflow-y: auto;
}

.listaResposte {
    width: 40vw;
    height: 35vh;
    font-size: 20px;
    z-index: 2;
    
    margin-top: 2%;
    border: none;
    border: var(--colorVerde) 2px solid;
    border-radius: 10px;
    transition: all 0.2s;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.222);
    background-color: var(--colorBranco);
}

.listaResposte li {
    margin: 5px 0 5px 0;
    padding: 15px 0 15px 0;
    justify-content: space-between;
    display: flex;
}

.listaResposte li:hover {
    background-color: var(--colorVerde);
    color: var(--colorBranco);
    cursor: pointer;
}

.listaResposte li p {
    padding: 0 10% 0 10%;

}

.listaVendedores {
    margin-top: 5vh;
    justify-content: center;
    display: flex;
    flex-direction: column;
    
}

.listaVendedores ul {
    margin-top: 5px;
    height: 20vh;
}

main {
    display: flex;
    justify-content: space-around;
    margin: 0 10%;
}

.listaCompras {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
}
.UlLista {
    width: 20vw;
    height: 60vh;
    background-color: var(--colorBranco);
    border: var(--colorVerde) 2px solid;
    border-radius: 10px;
    overflow: auto;
}

.UlLista li {
    padding: 5px 5% 0px 0;
    display: flex;
    justify-content: space-between;
}

.UlLista li p {
    padding: 0 5% 0 5%;
}

.info {
    display: flex;
    width: 50vw;
    /* background-color: blue; */
    justify-content: space-evenly;
    align-items: center;
}

/* .listaResposte {
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

} */
</style>
