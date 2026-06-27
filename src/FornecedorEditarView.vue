
<template>

    <p style="text-align: center; font-size: 30px; margin-top: 20px;">
        Editar {{ fornecedor.nome }}
    </p>

    <div class="container">
        <div class="dados">
            <p style="text-align: left; width: 100%; margin-left: 100px;">Dados do Produto:</p>
            <label>Nome:</label>
            <input v-model="fornecedor.nome" class="input-grande"/>
            <div class="linhas">
                <div class="unidade">
                    <label>Site:</label>
                    <input v-model="fornecedor.site" class="input-pequeno"/>
                </div>
                <div class="unidade">
                    <label>Vinda por Mês:</label>
                    <input v-model="fornecedor.vindames" class="input-pequeno"/>
                </div>
            </div>
            <div class="linhas">
                <div class="unidade">
                    <label>CNPJ:</label>
                    <input v-model="fornecedor.cnpj" class="input-pequeno"/>
                </div>
                <div class="unidade">
                    <label>Contato:</label>
                    <input v-model="fornecedor.contato" class="input-pequeno"/>
                </div>
            </div>
        </div>

        <div class="acoes">
            <p class="tituloAcoes"> Ações:</p>

            <p class="acoesAlterar bt" @click="alterar()"> Salvar Alterações</p>
            <p class="acoesExcluir bt" @click="excluir()"> 🗑️ Excluir Produto</p>
            <p class="acoesVoltar bt"  @click="voltar()"> Voltar para Pesquisa</p>

        </div>

    </div>

</template>


<script>

import axios from 'axios';

export default {
    name: 'FornecedorView',
  components: {
  },
  async created() {
    console.log("entrei")
    const fornecedorId = this.$route.params.id; // Pega o ID da URL
    console.log(fornecedorId)
    const response = await axios.get(`http://localhost:3000/venderd/${fornecedorId}`);
    this.fornecedor = response.data;
    console.log(this.fornecedor)
},
  
  data() {
    return {
      fornecedor: [],
      
    };
  },

  methods: {
    voltar(){
        this.$router.push({ name: 'PesquisaView'});
    },
    async excluir(){

         alert("você tem certeza que quer apagar o produto? Não sera possivel obte-lo novamente");

        const response = await axios.delete(
                `http://localhost:3000/venderd/${this.fornecedor.id}`
            )

            if (response.status === 200) {
                alert("Atualização bem Sucedida")
                
            } else {
                alert("Erro ao atualizar o valor.");
            }

    },
    async alterar(){

        alert("você tem certeza que quer mudar o  produto?");

        const response = await axios.put(
                `http://localhost:3000/venderd/${this.fornecedor.id}`,
                { 
                    nome: this.fornecedor.nome,
                    site: this.fornecedor.site,
                    vindames: this.fornecedor.vindames,
                    cnpj: this.fornecedor.cnpj,
                    contato: this.fornecedor.contato,
                 }
            )

            if (response.status === 200) {
                alert("Atualização bem Sucedida")
                
            } else {
                alert("Erro ao atualizar o valor.");
            }

    },
  }
};

    
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: row;
    margin: 2% 4% 0 0;
}

.dados{
    height: 80vh;
    width: 70%;
    margin: 0 4% 0 8%;
    background-color: white;
    border-radius: 10px;
    /* border: 2px solid var(--colorVerde); */
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
}

.dados label, .dados input{
    font-size: 17px;
    margin: 8px 0;
}

.dados input{
    border-radius: 5px;
    border: 1px double var(--colorVerde);
    border-style: dashed;
    height: 40px;
    text-align: center;
}
.input-grande{
   width: 70%;
    
}
.input-pequeno{
   width: 150%;
    
}
.unidade{
    
    display: flex;
    flex-direction: column;
    align-items: center;
}
.linhas{
    width: 100%;
    display: flex;
    justify-content: space-around;

}

.acoes{
    width: 20vw;
    height: 30vh;
    background-color: white;
    border-radius: 10px;
    /* border: 2px solid var(--colorVerde); */
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);

}
.tituloAcoes{
    text-align: left;
    padding: 20px 0 0 20px;
}
.bt{
    padding: 8px;

    background-color: blanchedalmond;
    margin: 10px 10% 0 10%;
    border-radius: 5px;
    cursor:pointer
}
.acoesAlterar{
    background-color: rgb(39, 185, 39);
    color: rgb(232, 255, 231);
    border: rgb(25, 156, 25) solid 2px;
}
.acoesExcluir{
    background-color: rgb(248, 134, 134);
    color: rgb(144, 4, 4);
    border: rgb(144, 4, 4) solid 2px;
}
.acoesVoltar{
    background-color: #ffffff;
    color: rgb(0, 0, 0);
    border: rgb(176, 176, 176) solid 2px;
}

</style>


