
<template>
    <!-- Finalizar compra -->
  <section>
    <h3 class="tituloFinalizaComp">Finalizar Compra</h3>

    <div class="linha">
        <div>
            <p>Total: {{ valor }}</p>
            <p>Produtos: {{ quantidadePro }}</p>
        </div>
        <input type="text" placeholder="Cliente">
    </div>

    <center>
    <div class="divImputPago">
        <p class="labelPago">Valor Pago:</p>
        <input class="pago" type="number"  @input="formatarData" placeholder="  Digite o valor pago">
    </div>
    </center>

    <div class="salvar">
        <div class="salvarDiv">
            <p>Troco: </p> <p class="pSalvar">37.00</p>
        </div>

        <button class="ButSalvar">Salvar</button>
        
    </div>
    
    

  </section>

</template>




<script>


export default {
     data() {
    return {
      quantidadePro: 0, //7898912284129
      valor: 0,
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
