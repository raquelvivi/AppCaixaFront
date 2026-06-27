
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


            </div>

        </div>



         <div class="centro" >

            <div id="btFornecedores" class="btdados" style=" z-index: 8; background-color: #ffe6d5; margin: -20px 0 0 15vw"  @click="mudar(2)">
                <p>
                    Fornecedores
                </p>
            </div>

            <div id="pgFornecedores" class="pgdados" style=" z-index: 7; background-color: #ffe6d5; margin: 14px 0 0 0; opacity: 0.9;">

                
            </div>

        </div>


         <div class="centro">

            <div id="btVendas" class="btdados" style=" z-index: 6; background-color: #ded5ff; margin: -40px 0 0 25vw"  @click="mudar(3)">
                <p>
                    Vendas
                </p>
            </div>

            <div id="pgVendas" class="pgdados" style=" z-index: 5; background-color: #ded5ff; margin: -6px 0 0 0;">

                
            </div>

        </div>




    </div>



</template>


<script>

//import axios from 'axios';
import CabecalhoView from "./components/CabecalhoView.vue";

export default {
    name: 'PesquisaView',
  components: {
    CabecalhoView
  },
  
  data() {
    return {
    //   quant: 1,
    //   valorTotal: 0,
    //   tdPro: 0,
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
    min-height: 95vh;
    width: calc(100vw - 6.5vw);
    position: absolute;
    margin-top: 35px;
 }

 .pgdados,.btdados{
    background-color: #ffffff;
    border: 1px solid #00000041;
    border-bottom: none;
 }

</style>


