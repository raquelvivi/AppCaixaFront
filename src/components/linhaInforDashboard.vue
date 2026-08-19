<template>
    <div class="dadosEstoque_Financeiro">

        <div class="blocoDados">
          <div class="bolaIcon" style="background-color: #cfffd1;">
            <ShoppingCart :size="25" style="color: #05ab0e;" />
          </div>
          <div class="textoBlocoDados">
            <p class="TituloBlocoDados" >Vendas Totais</p>
            <p class="numeroValor" style="color: #05ab0e;">R$ {{ PesquisaDashboard.Financeiro?.soma_total_mes || 0 }}</p>
            <p class="descricao">Vendas do Mês</p>
          </div>
        </div>

        <div class="blocoDados">
          <div class="bolaIcon" style="background-color: #b6d1ff;">
            <ShoppingBag :size="25" style="color: #2305ab;" />
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
            <p class="numeroValor" style="color: #9505ab;">R$ {{ PesquisaDashboard.Financeiro?.soma_total_mes || 0 }}</p>
            <p class="descricao">Vendas do Dia</p>
          </div>
        </div>

        <div class="blocoDados">
          <div class="bolaIcon" style="background-color: #ffb6b6;">
            <ShoppingBag :size="25" style="color: #ab0505;" />
          </div>
          <div class="textoBlocoDados">
            <p class="TituloBlocoDados">Despesas Do Dia</p>
            <p class="numeroValor" style="color: #ab0505;">R$ {{ PesquisaDashboard.Financeiro?.despesas_mes || 0 }}</p>
            <p class="descricao">Despesas do Dia</p>
          </div>
        </div>


      </div>
</template>