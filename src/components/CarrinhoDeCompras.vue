<template>

<!-- <div class="ViewCompra" v-if="abrir">
    <h3 class="tituloFinalizaComp">Finalizar Compra</h3>

    <div class="container">
        <div>
            <p>Valor Total: R$ {{ ObjetosCompras.reduce((total, item) => total + (item.valor * item.quant), 0).toFixed(2) }}</p>
            <p>Produtos: {{ ObjetosCompras.reduce((total) => total + 1, 0) }}</p>
            <p>Vendedores: {{ [...new Set(ObjetosCompras.map(item => item.vendedor))].length }}</p>
        
            <div  style=" margin-top: 100%;" class="botao">
                <p style=" height: 100%; padding-top: 10% ">ENVIAR</p>
            </div>
        </div>

        <div class="formu">

            <li :key="-1" class="list" style=" background-color: #E7F5E7">

                <p class="PNomePequeno"> quant </p>
                <p class="PNomeGrande"> nome </p>


                <p class="PNomeGrande"> Vendedor </p>


            </li>

            <li v-for="(item, index) in ObjetosCompras" :key="index" class="list"
                :style="{ backgroundColor: (index % 2) === 0 ? 'white' : '#E7F5E7' }">

                <div style="display: flex;">
                      <p class="PNomePequeno" @click="retirar(item, this.ObjetosCompras)"
                        style=" cursor: pointer; color: brown; margin-right: 15px;">X</p> -->

                    <!-- <p v-if="!item.editando" class="PNomePequeno" @click="item.editando = true">
                        {{ item.quant }}
                    </p>

                    <input v-else v-model="this.quantNova" class="inputAtualiza"
                        @keyup.enter="item.editando = false; atualizarItem(item, this.ObjetosCompras, this.quantNova)"
                        @blur="item.editando = false; atualizarItem(item, this.ObjetosCompras, this.quantNova)" />
                </div>

                <p class="PNomeGrande">{{ item.nome }}</p>
                <p class="vendedorP PNomeGrande">{{ item.vendedor }}</p>

            </li>

        </div>
    </div>


</div> --> 

    <!-- LISTA DE COMPRAS -->
    <div class="listaCompras">
        <p>Lista de Compras:</p>
        <ul class="UlLista">
            <li :key="-1" class="lista" style=" background-color: #E7F5E7">
                <div style="display: flex;">
                    <p style="margin-right: 20px; opacity: 0;">x</p>
                    <p class="PNomePequeno">compra</p>
                </div>

                <p class="PNomePequeno"> quant </p>
                <p class="PNomeGrande"> nome </p>

                <p class="PNomeGrande"> preço de venda </p>


            </li>

            <li v-for="(item, index) in ObjetosCompras" :key="index" class="lista"
                :style="{ backgroundColor: (index % 2) === 0 ? 'white' : '#E7F5E7' }">

                <div style="display: flex;">
                    <p class="PNomePequeno" @click="retirar(item, this.ObjetosCompras)"
                        style=" cursor: pointer; color: brown; margin-right: 15px;">X</p>

                    <p class="PNomePequeno" v-if="!item.editandoValor" @click="item.editandoValor = true">
                        {{ item.valor }}
                    </p>

                    <input v-else v-model="this.quantNovaValor"
                        @keyup.enter="item.editandoValor = false; atualizarItemValor(item, this.ObjetosCompras, this.quantNovaValor)"
                        class="inputAtualiza"/>
                </div>

                <div style="display: flex;">

                    <p v-if="!item.editando" class="PNomePequeno" @click="item.editando = true">
                        {{ item.quant }}
                    </p>

                    <input v-else v-model="this.quantNova" class="inputAtualiza"
                        @keyup.enter="item.editando = false; atualizarItem(item, this.ObjetosCompras, this.quantNova)"
                         />
                </div>

                <p class="PNomeGrande">{{ item.nome }}</p>

                <div style="display: flex;">

                    <p v-if="!item.NewPrice" class="PNomeGrande" @click="item.NewPrice = true">
                        {{ item.PrecoVenda }}
                    </p>

                    <input v-else v-model="this.NewPriceV" class="inputAtualiza"
                        @keyup.enter="item.NewPrice = false; updateItem(item, this.ObjetosCompras, this.NewPriceV)"
                         />
                         <!-- @blur="item.editando = false; atualizarItem(item, this.ObjetosCompras, this.quantNova)" -->
                </div>
                

            </li>
        </ul>
        <div @click="comprarCoisas" class="botao">
            <p style=" margin-top: 13%;">Comprar</p>
        </div>
    </div>

</template>

<script>
    import axios from 'axios'

    export default {
    name: 'CarrinhoDeCompras',

    props: ['ObjetosCompras'],

    data() {
        return {
            quant: 1,       // v-model da quantidade
            abrir: true,
            NewPriceV: 0, 
            quantNova: 10, 
            quantNovaValor: 0,


        }
    },
    methods: { //BUSCAR PRODUTOS
        retirar(item, array) {

            const index = array.indexOf(item);
            if (index > -1) {
                array.splice(index, 1);
            }
        },
        atualizarItem(item, array, novaQuantidade) {
            const index = array.indexOf(item);
            if (index > -1) {

                item.quant = parseFloat(novaQuantidade); // atualiza a quantidade do item
            }
        },
        async atualizarItemValor(item, array, novaQuantidade) {
            alert("você tem certeza que quer mudar o valor de compra do produto? Seu valor sera mudado no banco de dados!")

            const response = await axios.put(
                    `http://localhost:3000/prods/product/${item.codigo}`,
                    { precocompra: parseFloat(novaQuantidade) }
                )

                if (response.status === 200) {
                    const index = array.indexOf(item);
                    if (index > -1) {

                        item.valor = parseFloat(novaQuantidade); // atualiza a quantidade do item
                    }
                    
                } else {
                    alert("Erro ao atualizar o valor.");
                }
            
        },
        async updateItem(item, array, novaQuantidade) {
            
            var r=confirm("você tem certeza que quer mudar o valor de Venda do produto? Seu valor sera mudado no banco de dados!");
            
            if (r==true){
                 const response = await axios.put(
                    `http://localhost:3000/prods/product/${item.codigo}`,
                    { precovenda: parseFloat(novaQuantidade) }
                )

                if (response.status === 200) {
                    const index = array.indexOf(item);
                    if (index > -1) {

                        item.PrecoVenda = parseFloat(novaQuantidade); // atualiza a quantidade do item
                    }
                    
                } else {
                    alert("Erro ao atualizar o valor.");
                }


            }
            

           
            
        },
        comprarCoisas(){
            if (this.abrir) {
                this.abrir = false;
            }else{
                this.abrir = true;
            }
            
        },
        

    }

}

</script>

<style scoped >

    
.listaCompras {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

}

.UlLista {
    width: 40vw;
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
.info {
    display: flex;
    width: 50vw;
    /* background-color: blue; */
    justify-content: space-evenly;
    align-items: center;
}

.inputAtualiza {
    width: 25%;
    height: 4vh;
    font-size: 15px;
    border: none;
    border-bottom: var(--colorVerde) 2px solid;
    border-radius: 10px;
    /* outline: none; */
    transition: all 0.2s;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
}

/* .vendedorP {
    width: 25%;
} */

.PNomePequeno{
    width: 1vw;
    font-size: 13px;
}
.PNomeGrande{
    width: 13vw;
    font-size: 13px;
}

.botao {
  background-color: var(--colorVerde);
  
  width: 10vw;
  height: 8vh;
  border-radius: 10px;
  color: var(--colorBranco);
  box-shadow: 2px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  margin: 0 auto;

}
.ViewCompra{
    position: absolute;
    z-index: 10;
    background-color: white;
    width: 60vw;
    height: 70vh;
    border: var(--colorVerde) 3px solid;
    border-radius: 10px;
}
.tituloFinalizaComp {
    padding: 4vh;
    font-weight: 100;
}






.container{
    display: flex;
    justify-content: space-evenly;
}
.formu {
    border: var(--colorVerde) 2px solid;
    border-radius: 10px;
    width: 30vw;
    height: 40vh;
}

li {
    text-decoration: none;
    list-style: none;
}
.list{
    padding: 5px 5% 0px 5%;
    display: flex;
    justify-content: space-between;
}

</style>