<template>
  <div class="graficoPizza">

    <div class="cabecalhoGrafico">
      <div>
        <h5>Vendas por categorias</h5>
      </div>
    </div>

    <div class="conteudoGrafico">

      <div class="pizza">
        <Doughnut
          :data="chartData"
          :options="chartOptions"
        />
      </div>

      <div class="legenda">

        <div
          v-for="(categoria, index) in categorias"
          :key="categoria.categoria"
          class="itemLegenda"
        >

          <div class="nomeCategoria">

            <span
              class="bolinha"
              :style="{
                backgroundColor: cores[index % cores.length]
              }"
            ></span>

            <span>
              {{ categoria.categoria }}
            </span>

          </div>

          <div class="valorCategoria">

            <strong>
              {{ Number(categoria.percentual).toFixed(1) }}%
            </strong>

            <span>
              R$ {{ formatarMoeda(categoria.valor_total_vendido) }}
            </span>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>


<script>
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

import { Doughnut } from 'vue-chartjs'


ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)


export default {

  name: 'GraficoPizza',

  components: {
    Doughnut
  },

  props: {

    categorias: {
      type: Array,
      default: () => []
    }

  },

  data() {

    return {

      cores: [
        '#4CAF50',
        '#2196F3',
        '#FFC107',
        '#FF7043',
        '#9C27B0',
        '#00ACC1',
        '#795548'
      ]

    }

  },

  computed: {

    chartData() {

      return {

        labels: this.categorias.map(
          item => item.categoria
        ),

        datasets: [

          {
            data: this.categorias.map(
              item => Number(item.valor_total_vendido)
            ),

            backgroundColor: this.categorias.map(
              (_, index) =>
                this.cores[index % this.cores.length]
            ),

            borderWidth: 3,

            borderColor: '#ffffff',

            hoverOffset: 8

          }

        ]

      }

    },


    chartOptions() {

      return {

        responsive: true,

        maintainAspectRatio: false,

        cutout: '65%',

        plugins: {

          legend: {
            display: false
          },

          tooltip: {

            callbacks: {

              label: (context) => {

                const categoria =
                  this.categorias[context.dataIndex]

                return ` R$ ${this.formatarMoeda(
                  categoria.valor_total_vendido
                )} (${Number(
                  categoria.percentual
                ).toFixed(1)}%)`

              }

            }

          }

        }

      }

    }

  },


  methods: {

    formatarMoeda(valor) {

      return Number(valor).toLocaleString(
        'pt-BR',
        {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }
      )

    }

  }

}
</script>


<style scoped>

.graficoPizza {
  background-color: white;
  border-radius: 15px;
  padding: 10px;
  width: 40%;
  height: 40vh;
  margin: 15px;
  box-sizing: border-box;
  border: 1px solid #eeeeee;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

}
.cabecalhoGrafico {
  margin-bottom: 20px;
}
.cabecalhoGrafico h3 {
  margin: 0;
  font-size: 19px;
  font-weight: 600;
}
.cabecalhoGrafico p {
  margin-top: 5px;
  color: #888;
  font-size: 13px;
}
.conteudoGrafico {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
}
.pizza {
  width: 200px;
  height: 200px;
}
.legenda {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.itemLegenda {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: 1px solid #eeeeee;
}
.nomeCategoria {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14x;
}


.bolinha {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}
.valorCategoria {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 3px;
}
.valorCategoria strong {
  font-size: 14px;
}
.valorCategoria span {
  font-size: 12px;
  color: #888;
}

</style>