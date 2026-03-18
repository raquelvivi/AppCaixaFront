<template>

	<CabecalhoView />

	<main>

		<div class="containerInicio">
			<h1>KITANDA DO VITOR</h1>
			<img class="img" src="@/assets/logo fundo verde.png" alt="logo">

		</div>

		<div class="dados">

			<div class="dadosBanco">
				<p class="titulo">Vencidos</p>
				<div>
					<li v-for="(item, index) in vencidos" :key="index"
						:style="{ backgroundColor: (index % 2) === 0 ? 'white' : '#E7F5E7' }">
						<p @click="retirar(item, this.vencidos)">X</p>
						<p style="overflow-x: auto;">{{ item.nome }}</p>
						<p :style="{ color: new Date(item.validade) < data ? 'red' : 'green' }"> {{ item.validade }}</p>

					</li>
				</div>


				<button type="button" @click="retirarTudo">Retirar</button>

			</div>

			<div class="dadosBanco">

				<p class="titulo">Estoque Baixo</p>
				<div>
					<li v-for="(item, index) in estoqueBaixo" :key="index" style=""
						:style="{ backgroundColor: (index % 2) === 0 ? 'white' : '#E7F5E7' }">
						<p @click="retirar(item, this.estoqueBaixo)">X</p>
						<p style="overflow-x: auto;">{{ item.nome }}</p>
						<p>{{ item.quant }}</p>
					</li>
				</div>


				<a :href="`https://wa.me/5584996247885?text=Mensagem%20de%20Teste%20Nao%20Responda%0APedido%20de%20Compra%0A${mensagem()}%0AMensagem%20Automatica`"
					target="_blank">
					Efetuar Compra
				</a>



			</div>

		</div>


	</main>



</template>

<script>
import axios from 'axios';
import CabecalhoView from "./components/CabecalhoView.vue";

export default {
	name: 'InicioView',
	components: {
		CabecalhoView
	},

	async created() { // Chamado quando o componente é criado
		await this.BuscaValidade();
		await this.BuscaEstoqueB();
		console.log(this.data);
	},

	data() {
		return {
			vencidos: [],
			estoqueBaixo: [],
			data: new Date(),
		};
	},

	methods: {

		async BuscaValidade() {
			const response = await axios.get(
				`http://localhost:3000/prods/validade`
			);

			this.vencidos = response.data;

		},
		async BuscaEstoqueB() {
			const response = await axios.get(
				`http://localhost:3000/prods/repo`
			);

			this.estoqueBaixo = response.data;
		},
		async retirar(item, array) {

			const index = array.indexOf(item);
			if (index > -1) {

				const response = await axios.put(
					`http://localhost:3000/prods/${item.codigo}`
				);

				if (response.status === 200) {
					console.log('Produto retirado com sucesso!');
					array.splice(index, 1); // Remove o item do array local
				} else {
					console.error('Erro ao retirar o produto:', response.statusText);
				}
			}
		},
		async retirarTudo() {
			for (const item of this.vencidos) {
				await this.retirar(item, this.vencidos);
			}
		},
		mensagem() {
			let msg = '';
			this.estoqueBaixo.forEach(item => {
				msg += `%0A ${item.nome} - Quantidade: ${item.quant*10} ${item.categoria === 'Fruta' ? 'kilos' : 'unidades'}`;
			});
			return msg;
		}
	}
}


</script>

<style scoped>
.containerInicio {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	max-width: 61%;
	margin: 0 3% 0 auto;
	align-items: center;


}

.img {
	width: 10vw;
}

.dadosBanco {
	width: 25vw;
	height: 40vh;
	margin: 0 0 0 10vw;
	background-color: white;
	border: 3px solid var(--colorVerde);
	border-radius: 15px;
	font-size: 17px;

	display: flex;
	flex-direction: column;
}

.dadosBanco div {

	margin-bottom: 20px;
	OVERFLOW-Y: auto;
}

.titulo {
	margin-top: 10px;
	font-size: 22px;
	margin-bottom: 20px;
}

.dadosBanco button,
a {
	width: 80%;
	height: auto;
	background-color: var(--colorVerde);
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 17px;

	margin-top: auto;
	align-self: center;
	margin-bottom: 20px;
	padding: 5px;

}

.dados {
	display: flex;
}

.dadosBanco li {
	padding: 5px 0 0px 0;
	display: flex;
	justify-content: space-between;
	cursor: pointer;

	flex-direction: row;

}

.dadosBanco li p {
	padding: 0 5% 0 5%;
}
</style>
