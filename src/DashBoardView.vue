
<template>

  <CabecalhoView />
  
    <main style="margin-left: 6%;">
      <h2 style="margin-bottom: 20px; padding-top: 40px;">FECHAMENTO DE CAIXA</h2>
      <div class="dadosEstoque_Financeiro">

        <div class="coluna">

          <div class="blocoDados">
            <p>Caixa De Hoje</p>
            <p class="numeroValor">R$ {{ PesquisaDashboard.Financeiro?.soma_total_hoje || 0 }}</p>
          </div>

          <div class="blocoDados">
            <p>Caixa Do Mês</p>
            <p class="numeroValor">R$ {{ PesquisaDashboard.Financeiro?.soma_total_mes || 0 }}</p>
          </div>

        </div>

        <div class="coluna">

          <div class="blocoDados">
            <p>Despesas De Hoje</p>
            <p class="numeroValor">R$ {{ PesquisaDashboard.Financeiro?.despesas_hoje || 0 }}</p>
          </div>

          <div class="blocoDados">
            <p>Despesas Do Mês</p>
            <p class="numeroValor">R$ {{ PesquisaDashboard.Financeiro?.despesas_mes || 0 }}</p>
          </div>

        </div>

        <div class="coluna">

          <div class="blocoDados lucro">
            <p>Lucro do Mes</p>
            <p class="numeroValor">R$ {{ PesquisaDashboard.Financeiro?.Lucro_mes || 0 }}</p>
          </div>

        </div>

        <div class="coluna">

          <div class="blocoDados">
            <p>Produtos no Estoque</p>
            <p class="numeroValor">{{ PesquisaDashboard.Estoque?.Quantidade_produtos_No_Estoque || 0 }}</p>
          </div>

          <div class="blocoDados">
            <p>Valor Monetario Do Estoque</p>
            <p class="numeroValor">R$ {{ PesquisaDashboard.Estoque?.Valor_Retido_no_Estoque || 0 }}</p>
          </div>

        </div>

      </div>

      <div class="grafico">
        <GraficoLinha
        :labels="PesquisaDashboard.Arrays?.Vendas_ultimos_7_dias.map(v => v.dia_formatado) || []"
        :dados="PesquisaDashboard.Arrays?.Vendas_ultimos_7_dias.map(v => v.total) || []"
      />
      </div>

      <div class="dadosMais">

        <div class="lista">
          <h4 style="margin-bottom: 10px;">Produtos Mais Vendidos</h4>
          <ul>
            <li class="DadosMais" v-for="produto in PesquisaDashboard.Arrays?.Mais_Vendidos_mes || []" :key="produto.nome">
              <p>{{ produto.nome }}</p>
              <p>Vendido: {{ produto.ValorTotalVendido }} Ganho: {{ produto.ValorTotalVendido }}</p>
            </li>
          </ul>
          
        </div>

        <hr style="border: 1px var(--colorVerde) solid;">

        <div class="lista">
          <h4 style="margin-bottom: 10px;">Produtos Mais Lucrativos</h4>
          <ul>
            <li class="DadosMais" v-for="produto in PesquisaDashboard.Arrays?.Mais_Lucrativos_mes || []" :key="produto.nome">
              <p>{{ produto.nome }}</p>
              <p>Quantidade Vendida: {{ produto.total_vendido }} Valor vendido: {{ produto.valor_total_vendido }}</p>
            </li>
          </ul>
        </div>

        <hr style="border: 1px var(--colorVerde) solid;">

        <div class="lista">
          <h4 style="margin-bottom: 10px;">Produtos Mais Parados</h4>
          <ul>
            <li class="DadosMais" v-for="produto in PesquisaDashboard.Arrays?.Mais_Parados_mes || []" :key="produto.nome">
              <p>{{ produto.nome }}</p>
              <p>Quantidade Vendida: {{ produto.total_vendido }}</p>
            </li>
          </ul>
        </div>

      </div>
      
        


    </main>


    <!-- <p>coisa amarga {{quant}}</p> -->



</template>

<!-- <script setup>
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
</script> -->

<script>
import axios from 'axios';
import CabecalhoView from "./components/CabecalhoView.vue"
import GraficoLinha from "./components/GraficoDashboard.vue"

export default {
  name: 'DashboardView',
  components: {
  CabecalhoView,
  GraficoLinha
},
  async created() { 
		await this.BuscaDashboard();
	},
  data() {
    return {
      PesquisaDashboard: [],
   
    };
  },
  methods: {
    async BuscaDashboard() {
			const response = await axios.get(
				`http://localhost:3000/compras/dashboard/`
			);

			this.PesquisaDashboard = response.data;

		},
  },
};



</script>

<style scoped>
  .dadosEstoque_Financeiro{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .coluna{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 25vh;
  }
  .blocoDados{
    background-color: white;
    border-radius: 10px;
    border: 2px solid var(--colorVerde);
    width: 18vw;
    height: 10vh;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .lucro{
    height: 20vh;
    font-size: 25px;
  }
  .numeroValor{
    color: var(--colorVerde);
    font-weight: bold;
  }
  .dadosMais{
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: 0 auto;
    justify-content: space-around;
  }
  .DadosMais{
    padding: 20px 10px;
    margin-bottom: 20px;
    background-color: white;
    border-radius: 10px;
    border: 2px solid var(--colorVerde);
    font-size: 15px;

  }
</style>

