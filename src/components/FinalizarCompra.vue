
<template>
    <!-- Finalizar compra -->
  <section>
    <h3 class="tituloFinalizaComp">Finalizar Compra</h3>

    <div class="linha">
        <div>
            <p>Total: {{ valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</p>
            <p>Produtos: {{ quantidadeTotal }}</p>
        </div>
        <input v-model="pagoCom" type="text" placeholder="Ex: Dinheiro">
    </div>

    <center>
    <div class="divImputPago">
        <p class="labelPago">Valor Pago:</p>
        <input v-model="recebido" class="pago" type="number"  @input="formatarData" placeholder="  Digite o valor pago">
    </div>
    </center>

    <div class="salvar">
        <div class="salvarDiv">
            <p>Troco: </p> <p class="pSalvar">{{ (recebido - valorTotal).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</p>
        </div>

        <button class="ButSalvar" @click="EfetuarCompra">Salvar</button>
        
    </div>
    
    

  </section>

</template>




<script>
import axios from 'axios'

export default {
    props: {
    lista: {
      type: Array,
      required: true
    },
    valorTotal: {
      type: Number,
      required: true
    },
    quantidadeTotal: {
      type: Number,
      required: true
    }
  },
     data() {
    return {
        pagoCom: "",
        recebido: 0,
        mostrarFinalizar: true,
    };
  },
  methods: {
  formatarMoeda() {
    let numero = this.valor.replace(/\D/g, '')
    numero = Number(numero) / 100

    this.valor = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(numero)
  },
  async EfetuarCompra() {

    const response = await axios.post(
          `http://localhost:3000/compras`,
    {
      compra: this.pagoCom,
      item: this.lista
    });
       console.log(response);
       if(response.status >= 200 && response.status < 300){
        alert("Compra realizada com sucesso!");
        this.$emit('fechar');  // emite um evento para fechar a tela de finalizar compra
    }

  }
}
 
};


</script>




<style scoped>
section{
    width: 50vw;
    height: 50vh;
    background-color: #E7E7E7;
    position: absolute;
    z-index: 2;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    margin-left: calc((100vw - 50vw)/2); /*ou 25vw*/
    margin-top: calc((25vh - 8vh));
}
.tituloFinalizaComp{
    padding: 4vh;
}
.linha{
    display: flex;
    justify-content: space-around;
}
.pago{
    height: 40px;
    width: 100%;
    font-size: 20px;
}
.labelPago{
    text-align: left;
}
.divImputPago{
    width: 50%;
    margin: 5vh;
}
.salvar{
    display: flex;
    justify-content: space-around;
    align-items: center;

}
.pSalvar{
    margin-left: 10px;
    color: #ffffff;
    background-color: var(--colorVerde);  
    padding: 10% 25% 10% 25%;
    border-radius: 10px;
}
.salvarDiv{
    display: flex;
    align-items: center;
}
.ButSalvar{
    padding: 2% 4% 2% 4%;
    font-size: 20px;
    border: none;
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
    
}




</style>
