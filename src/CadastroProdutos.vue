
<template >
    <main>

        <!-- <header>
            <h2>CADASTRO</h2>
            <input type='text' v-model='produto' @keyup.enter="copiou" class='inputProdut' autofocus
                placeholder="  Escanei o codigo" />


        </header> -->
        <div class="CadastroVendedor" v-if="mostrarFinalizar">
          <p class="tituloCadastroVendedor">Cadastro Vendedor</p>
          <div class="form-grid">
          <div class="formVendedor form-group ">
            <label>Nome</label>
            <input v-model="nomeVendedor" type="text">
          </div>

          <div class="formVendedor form-group">
            <label>Contato</label>
            <input v-model="contato" type="text">
          </div>

          <div class="formVendedor form-group" >
            <label>CNPJ</label>
            <input v-model="cnpj" type="number">
          </div>

          <div class="formVendedor form-group" >
            <label>Vinda no Mês</label>
            <input v-model="vindaMes" type="number">
          </div>
          </div>

          <button class="btVendedor" @click="CadastroVendedor">Salvar vendedor</button>

        </div>



        <p class="titulo">Cadastro</p>

        <div class="caixa">
  <div class="form-grid">

    <div class="form-group grande">
      <label>Código</label>
      <input v-model="codigo" autofocus type="text">
    </div>

    <div class="form-group grande">
      <label>Nome</label>
      <input v-model="nome" type="text">
    </div>

    <div class="form-group">
      <label>Quantidade Mínima</label>
      <input v-model="qMinimo" type="number">
    </div>

    <div class="form-group">
      <label>Validade</label>
      <input v-model="validade" type="date">
    </div>

    <div class="form-group">
      <label>Quantidade</label>
      <input v-model="qAtual" type="number">
    </div>

    <div class="form-group">
      <label>Vendedor</label>
      <select v-model="vendedor">
        <option value="">Selecione um vendedor</option>
        <option 
          v-for="v in vendedores" 
          :key="v.id" 
          :value="v.id">
          {{ v.nome}}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label>Preço de Compra</label>
      <input v-model="precoCompra" type="text">
    </div>

    <div class="form-group">
      <label>Categoria</label>
      <select>
        <option value="none">Categorias</option>
        <option value="frutas">Frutas</option>
        <option value="verduras">Verduras</option>
        <option value="graos">Grãos</option>
        <option value="prateleiras">Prateleiras</option>
        <option value="bagana">Bagana</option>
        <option value="carnes">Carnes</option>
        <option value="congelados">Congelados</option>
        <option value="outros">Outros</option>
      </select>
    </div>

  </div>
  
  <button class="NoVendedor" @click="TelaPaga">Não Achou Vendedor? Vamos Criar!</button>

  <button class="btnSalvar" @click="CadastroProduto">Salvar Produto</button>
</div>

        


    </main>


    <!-- <p>coisa amarga {{quant}}</p> -->



</template>

<!-- <script setup>
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
</script> -->

<script>
import axios from 'axios'


export default {
  name: 'DashboardView',

  async created() { // Chamado quando o componente é criado
    await this.Inicio();
  },

  data() {
    return {
      codigo: '',
      precoCompra: 0,
      validade: '',
      qMinimo: 3,
      qAtual: 0,
      mostrarFinalizar: false,
      nomeVendedor: '',
      contato: '',
      cnpj: '',
      vindaMes: '',
      vendedor: '',
      vendedores: [],

      // produto: "", //7898912284129
      // quant: "1",
      // valor: 0,
      // tdPro: 0,
      // vendedores: [],
      // vendedoresObjetos: [
      //   { codigo: "", nome: "", valor: 0, quantidade: 0 },
      //   {}]
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
    async CadastroVendedor() {
      if(this.codigo){

        const response = await axios.post(
          `http://localhost:3000/venderd`,
          {
            nome: this.nomeVendedor,
            contato: this.contato,
            cnpj: this.cnpj,
            vindames: this.vindaMes
          }
        );

        if(response.status >= 200 && response.status < 300){
          alert(`Vendedor ${this.nomeVendedor} cadastrado com sucesso!`);
        }

        this.nomeVendedor = '';
        this.contato = '';
        this.cnpj = '';
        this.vindaMes = '';
        this.mostrarFinalizar = false;
      }else{
        alert("Preencha todos os campos para cadastrar o vendedor!");
      }
    },
    async Inicio() {

        try {
          const response = await axios.get(`http://localhost:3000/venderd`);
          this.vendedores = response.data;
          console.log(this.vendedores); 
        } catch (error) {
          console.error("Erro ao buscar vendedores:", error);
  }

  },
  async CadastroProduto(){
    if(this.codigo && this.nomeProduto && this.precoCompra && this.validade && this.qMinimo && this.qAtual && this.categoria && this.vendedor){

        const response = await axios.post(
          `http://localhost:3000/venderd`,
          {
            nome: this.nomeVendedor,
            contato: this.contato,
            cnpj: this.cnpj,
            vindames: this.vindaMes
          }
        );

        if(response.status >= 200 && response.status < 300){
          alert(`Vendedor ${this.nomeVendedor} cadastrado com sucesso!`);
        }

        this.nomeVendedor = '';
        this.contato = '';
        this.cnpj = '';
        this.vindaMes = '';
        this.mostrarFinalizar = false;
      }else{
        alert("Preencha todos os campos para cadastrar o vendedor!");
      }


  },




},


};



</script>

<style scoped>
main {
  min-height: 100vh;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(135deg, #9ebb9a, #739173);
}

.titulo {
  font-size: 32px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
}

.caixa {
  width: 80%;
  max-width: 900px;
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.grande {
  grid-column: span 2;
}

label {
  margin-bottom: 6px;
  font-weight: 600;
  color: #2e7d32;
}

input, select {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  transition: 0.2s;
}

input:focus, select:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 0 3px rgba(76,175,80,0.2);
}

.btnSalvar {
  margin-top: 10px;
  width: 100%;
  padding: 14px;
  background: #2e7d32;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.btnSalvar:hover {
  background: #1b5e20;
  transform: translateY(-2px);
}
.NoVendedor{
 padding: 10px;
 background-color: var(--colorVerdeClaro);
 cursor: pointer;
 border-radius: 10px;
 margin: 10px 40px 0 40px;
 width: 60%;
}
.CadastroVendedor{
  /* background-color: var(--colorVerdeClaro);  */
  backdrop-filter: blur(15px);
  position: absolute;
  margin-top: 20vh;
  width: 55vw;
  height: 50vh;
  border-radius: 10px;
  border: #2e7d32 solid 2px;
  background: rgba(124, 140, 121, 0.4);
}
.formVendedor{
  /* margin-top: 10px; */
  margin:0 5% 5% 5%;
  border-radius: 10px;
}
.formVendedor input{
  border-bottom: #4caf50 2px solid;
}
.tituloCadastroVendedor{
  font-size: 20px;
  margin: 20px;
}
.btVendedor{
  margin-top: 10px;
  width: 60%;
  padding: 14px;
  background: var(--colorBranco);
  color: #2e7d32;
  border: #2e7d32 solid 2px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}
.btVendedor:hover {
  background: #438248;
  color: var(--colorBranco);
  border: var(--colorBranco) solid 2px;
  transform: translateY(-2px);
  
}


</style>

