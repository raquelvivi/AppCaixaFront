
<template>

  <CabecalhoView />
  
    <main style="margin-left: 6%;">
      <h2 style="margin-bottom: 20px; padding-top: 40px;">FECHAMENTO DE CAIXA</h2>
      <div class="dadosEstoque_Financeiro">

        <div class="blocoDados">
          <div class="bolaIcon" style="background-color: #cfffd1;">
            <Store :size="25" style="color: #05ab0e;" />
          </div>
          <div class="textoBlocoDados">
            <p class="TituloBlocoDados" >Vendas Totais</p>
            <p class="numeroValor" style="color: #05ab0e;">R$ {{ PesquisaDashboard.Financeiro?.soma_total_mes || 0 }}</p>
            <p class="descricao">Vendas do Mês</p>
          </div>
        </div>

        <div class="blocoDados">
          <div class="bolaIcon" style="background-color: #b6d1ff;">
            <Receipt :size="25" style="color: #2305ab;" />
          </div>
          <div class="textoBlocoDados">
            <p class="TituloBlocoDados">Despesas Totais</p>
            <p class="numeroValor" style="color: #2305ab;">R$ {{ PesquisaDashboard.Financeiro?.despesas_mes || 0 }}</p>
            <p class="descricao">Despesas do Mês</p>
          </div>
        </div>

        <div class="blocoDados">
          <div class="bolaIcon" style="background-color: #fffbb6;">
            <CircleDollarSign :size="25" style="color: #ab7f05;" />
          </div>
          <div class="textoBlocoDados">
            <p class="TituloBlocoDados">Lucro Bruto</p>
            <p class="numeroValor" style="color: #ab7f05;">R$ {{ PesquisaDashboard.Financeiro?.Lucro_mes || 0 }}</p>
            <p class="descricao">Lucro do Mês</p>
          </div>
        </div>

        <div class="blocoDados">
          <div class="bolaIcon" style="background-color: #eeb6ff;">
            <ShoppingCart :size="25" style="color: #9505ab;" />
          </div>
          <div class="textoBlocoDados">
            <p class="TituloBlocoDados" >Vendas Do Dia</p>
            <p class="numeroValor" style="color: #9505ab;">R$ {{ PesquisaDashboard.Financeiro?.soma_total_hoje || 0 }}</p>
            <p class="descricao">Vendas do Dia</p>
          </div>
        </div>

        <div class="blocoDados">
          <div class="bolaIcon" style="background-color: #ffb6b6;">
            <ChartNoAxesCombined :size="25" style="color: #ab0505;" />
          </div>
          <div class="textoBlocoDados">
            <p class="TituloBlocoDados">Despesas Do Dia</p>
            <p class="numeroValor" style="color: #ab0505;">R$ {{ PesquisaDashboard.Financeiro?.despesas_hoje || 0 }}</p>
            <p class="descricao">Despesas do Dia</p>
          </div>
        </div>


      </div>


      <div class="grafico">
        <GraficoLinha
        :labels="PesquisaDashboard.Arrays?.Vendas_ultimos_7_dias.map(v => v.dia_formatado) || []"
        :dados="PesquisaDashboard.Arrays?.Vendas_ultimos_7_dias.map(v => v.total) || []"
      />

      <GraficoPizza
          :categorias="PesquisaDashboard.Arrays?.Compra_Por_Categoria || []"
        />
      </div>
    

      <div class="dadosEstoque_Financeiro">

        <div class="blocoDados">
          <div class="bolaIcon" style="background-color: #ffb6ec;">
            <Package :size="25" style="color: #ab058a;" />
          </div>
          <div class="textoBlocoDados">
            <p class="TituloBlocoDados" >Estoque</p>
            <p class="numeroValor" style="color: #ab058a;">{{ PesquisaDashboard.Estoque?.Quantidade_produtos_No_Estoque || 0 }}</p>
            <p class="descricao">total de produtos no estoque</p>
          </div>
        </div>

        <div class="blocoDados">
          <div class="bolaIcon" style="background-color: #b6fbff;">
            <Boxes :size="25" style="color: #0598ab;" />
          </div>
          <div class="textoBlocoDados">
            <p class="TituloBlocoDados">Valor do Estoque</p>
            <p class="numeroValor" style="color: #0598ab;">R$ {{ PesquisaDashboard.Estoque?.Valor_Retido_no_Estoque || 0 }}</p>
            <p class="descricao">Estimativa de ganho com a venda do estoque</p>
          </div>
        </div>

        <div class="blocoDados">
          <div class="bolaIcon" style="background-color: #d8ffb6;">
            <TriangleAlert :size="25" style="color: #6eab05;" />
          </div>
          <div class="textoBlocoDados">
            <p class="TituloBlocoDados">Estoque Baixo</p>
            <p class="numeroValor" style="color: #6eab05;">{{ PesquisaDashboard.Estoque?.Produtos_Sem_Estoque || 0 }}</p>
            <p class="descricao"> </p>
          </div>
        </div>

        <div class="blocoDados">
          <div class="bolaIcon" style="background-color: #feffb6;">
            <Users :size="25" style="color: #aba805;" />
          </div>
          <div class="textoBlocoDados">
            <p class="TituloBlocoDados" >Vendedores</p>
            <p class="numeroValor" style="color: #aba805;">{{ PesquisaDashboard.Outros?.vendedores || 0 }}</p>
            <p class="descricao">Vendedores Cadastrados</p>
          </div>
        </div>

        <div class="blocoDados">
          <div class="bolaIcon" style="background-color: #ffb6ea;">
            <CalendarDays :size="25" style="color: #ab0574;" />
          </div>
          <div class="textoBlocoDados">
            <p class="TituloBlocoDados">Ultima Compra</p>
            <p class="numeroValor" style="color: #ab0574;">R$ {{ PesquisaDashboard.Outros?.ultima_Compra.total || 0 }}</p>
            <p class="descricao">{{ formatarData(PesquisaDashboard.Outros?.ultima_Compra?.data) }}</p>
          </div>
        </div>


      </div>
   

      <div class="dadosMais">

        <!-- <div class="lista">
          <h4 style="margin-bottom: 10px;">Produtos Mais Vendidos</h4>
          <ul>
            <li class="DadosMais" v-for="produto in PesquisaDashboard.Arrays?.Mais_Vendidos_mes || []" :key="produto.nome">
              <p>{{ produto.nome }}</p>
              <p>Vendido: {{ produto.ValorTotalVendido }} Ganho: {{ produto.ValorTotalVendido }}</p>
            </li>
          </ul>
          
        </div> -->

        <GraficoBarrasProdutos
          :produtos="
            PesquisaDashboard.Arrays?.Mais_Vendidos_mes || []
          "
        />



        

        <!-- <hr style="border: 1px var(--colorVerde) solid;">

        <div class="lista">
          <h4 style="margin-bottom: 10px;">Produtos Mais Parados</h4>
          <ul>
            <li class="DadosMais" v-for="produto in PesquisaDashboard.Arrays?.Mais_Parados_mes || []" :key="produto.nome">
              <p>{{ produto.nome }}</p>
              <p>Quantidade Vendida: {{ produto.total_vendido }}</p>
            </li>
          </ul>
        </div> -->

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
import GraficoPizza from "./components/GraficoDashboardPizza.vue"
import GraficoBarrasProdutos from "./components/graficoBarrasDashboard.vue"
import {
  ShoppingCart,
  CircleDollarSign,
  CalendarDays,
  Receipt,
  Store,
  Boxes,
  Package,
  TriangleAlert,
  ChartNoAxesCombined,
  Users
} from "lucide-vue-next";


export default {
  name: 'DashboardView',
  components: {
  CabecalhoView,
  GraficoLinha,
  GraficoPizza,
  GraficoBarrasProdutos,

  ShoppingCart,
  CircleDollarSign,
  CalendarDays,
  Receipt,
  Store,
  Boxes,
  Package,
  TriangleAlert,
  ChartNoAxesCombined,
  Users
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
				`${process.env.VUE_APP_API_URL}/compras/dashboard/`
			);

			this.PesquisaDashboard = response.data;

		},
  

  formatarData(data) {

    if (!data) {
      return '';
    }

    const dataObj = new Date(data);

    const dia = String(dataObj.getDate()).padStart(2, '0');
    const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
    const hora = String(dataObj.getHours()).padStart(2, '0');

    return `${dia}/${mes} as ${hora}h`;
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
    border: 1px #cfcfcf solid;
    box-shadow: 0 1px 20px rgba(73, 73, 73, 0.15);
    width: 15vw;
    height: 15vh;
    align-items: center;
    display: flex;
    flex-direction: row;
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
  .descricao{
    font-size: 12px;
    margin-top: 5px;
    color: rgb(95, 95, 95);
  }
  .TituloBlocoDados{
    font-size: 15px;
    margin: 2px 0 8px 0;
    font-weight: 100;
  }
  .textoBlocoDados{
    text-align: left;
  }
  .bolaIcon{
    padding: 10px 12px;
    margin: 15px;
    
    border-radius: 40px;
    align-items: center;
  }
  .icone{
    color: #ffb6ea;
    background-color: #ab0574;;
  }
  .numeroValor{
    font-size: 18px;
    font-weight: 300;
  }
  .grafico{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
</style>

