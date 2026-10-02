<template>

  <div class="cardMaisVendidos">

    <div class="cabecalho">

      <div>
        <h3>Produtos mais vendidos</h3>
        <p>Produtos com maior quantidade de vendas no mês</p>
      </div>

      <ShoppingCart :size="22" />

    </div>


    <div class="listaProdutos">

      <div
        class="produto"
        v-for="(produto, index) in produtos"
        :key="produto.codigo || produto.nome"
      >

        <div class="numero">
          {{ index + 1 }}
        </div>


        <div class="informacoes">

          <div class="linhaProduto">

            <span class="nomeProduto">
              {{ produto.nome }}
            </span>

            <span class="quantidade">
              {{ produto.total_vendido || produto.ValorTotalVendido }} un.
            </span>

          </div>


          <div class="barraFundo">

            <div
              class="barra"
              :style="{
                width: calcularPorcentagem(produto) + '%'
              }"
            ></div>

          </div>

        </div>

      </div>

    </div>

  </div>

</template>


<script>

import { ShoppingCart } from "lucide-vue-next";


export default {

  name: "MaisVendidos",

  components: {
    ShoppingCart
  },

  props: {

    produtos: {
      type: Array,
      default: () => []
    }

  },

  computed: {

    maiorQuantidade() {

      if (!this.produtos.length) {
        return 1;
      }

      return Math.max(
        ...this.produtos.map(produto =>
          Number(
            produto.total_vendido || produto.ValorTotalVendido || 0
          )
        )
      );

    }

  },

  methods: {

    calcularPorcentagem(produto) {

      const quantidade = Number(
        produto.total_vendido || produto.ValorTotalVendido || 0
      );

      return (quantidade / this.maiorQuantidade) * 100;

    }

  }

}

</script>


<style scoped>

.cardMaisVendidos {

  background-color: white;
    margin-top: 20px;
  border-radius: 15px;

  padding: 25px;

  width: 50%;

  box-sizing: border-box;

  border: 1px solid #eeeeee;

  box-shadow: 0 1px 20px rgba(73, 73, 73, 0.08);

}


.cabecalho {

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 25px;

  color: #05ab0e;

}


.cabecalho h3 {

  margin: 0;

  color: #333;

  font-size: 18px;

  font-weight: 600;

}


.cabecalho p {

  margin: 5px 0 0;

  color: #888;

  font-size: 13px;

}


.listaProdutos {

  display: flex;

  flex-direction: column;

  gap: 18px;

}


.produto {

  display: flex;

  align-items: center;

  gap: 15px;

}


.numero {

  width: 30px;

  height: 30px;

  border-radius: 50%;

  background-color: #cfffd1;

  color: #05ab0e;

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 13px;

  font-weight: bold;

}


.informacoes {

  flex: 1;

}


.linhaProduto {

  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-bottom: 7px;

}


.nomeProduto {

  font-size: 14px;

  font-weight: 500;

  color: #333;

}


.quantidade {

  font-size: 13px;

  font-weight: 600;

  color: #05ab0e;

}


.barraFundo {

  width: 100%;

  height: 7px;

  background-color: #eeeeee;

  border-radius: 10px;

  overflow: hidden;

}


.barra {

  height: 100%;

  background-color: #05ab0e;

  border-radius: 10px;

  transition: width 0.5s ease;

}


</style>