<template>
    <div class="grafico-container">
        <Line :data="chartData" :options="chartOptions" />
    </div>
</template>

<script>
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
} from 'chart.js'

import { Line } from 'vue-chartjs'

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
)

export default {
    name: 'GraficoLinha',
    components: { Line },

    props: {
        dados: Array,
        labels: Array
    },

    computed: {
        chartData() {
            const ctx = document.createElement('canvas').getContext('2d')

            const gradient = ctx.createLinearGradient(0, 0, 0, 400)
            gradient.addColorStop(0, 'rgba(76, 175, 80, 0.4)')
            gradient.addColorStop(1, 'rgba(76, 175, 80, 0)')


            return {
                labels: this.labels,
                datasets: [
                    {
                        label: 'Vendas últimos 7 dias',
                        data: this.dados,
                        fill: true,
                        backgroundColor: gradient,
                        borderColor: '#4CAF50',
                        tension: 0.4,
                        borderWidth: 3,
                        pointRadius: 4,
                        pointHoverRadius: 7,
                        pointBackgroundColor: '#4CAF50',
                        pointBorderColor: '#fff',

                    }
                ]
            }
        },
        scales: {
            y: {
                ticks: {
                    callback: function (value) {
                        return 'R$ ' + value
                    }
                },
                grid: {
                    color: '#eee'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Desempenho de Vendas (7 dias)',
                font: {
                    size: 16
                }
            }
        },

        chartOptions() {
            return {
                responsive: true,
                maintainAspectRatio: false,

                animation: {
                    duration: 1200,
                    easing: 'easeOutQuart'
                },

                animations: {
                    y: {
                        from: 0
                    },
                    radius: {
                        duration: 500,
                        from: 0,
                        easing: 'easeOutCubic'
                    }
                },

                plugins: {
                    legend: { display: false }
                },

                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return 'R$ ' + Number(context.raw)
                                .toLocaleString('pt-BR', { minimumFractionDigits: 2 })
                        }
                    }
                }
            }
        }
    }
}
    


</script>

<style scoped>
.grafico-container {
    width: 80%;
    height: 40vh;
    margin: 40px auto;
    background: white;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

}
</style>