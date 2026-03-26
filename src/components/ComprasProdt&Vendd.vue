<template>
    <div>
        

    
        <div class="container">
            <!-- LISTA DE PRODUTOS -->
            <div>
                <ul class="listaResposte">
                    <li v-for="(item, index) in produtos" :key="index" @click="escolheuProdut(item)">
                        <p>{{ item.nome }}</p>
                        <p>{{ item.precovenda }}</p>
                    </li>
                </ul>

            </div>

            <!-- LISTA DE VENDEDORES -->
            <div class="listaVendedores">
                <p>Vendedores:</p>
                <ul class="listaResposte ulVend">
                    <li v-for="(item, index) in vendedores" :key="index" @click="escolheuVendedor(item)">
                        <p>{{ item.vendedor }}</p>
                        <p>{{ item.Preco }}</p>
                    </li>
                    <li style="color: red;" @click="vendedores.length > 0 ? addVendedores(item) : semVendedores()">
                        <p>Adicionar Vendedor</p>
                        <p>+</p>
                    </li>
                </ul>

            </div>

        </div>
    </div>

</template>


<script>
import axios from 'axios'

export default {
    name: 'ComprasProdtVendd',

    props: ['produtos'],  

  data() {
    return {
      vendedores: [],
      ObjetosCompras: []
    }
  },
    methods: {
        
        async escolheuProdut(item) {
            console.log(item);
            const response = await axios.get(
                `http://localhost:3000/tem/${item.codigo}`
            );
            this.vendedores = response.data;
            console.log(this.vendedores);

            this.$emit('limpar-produtos')
            
        },
        escolheuVendedor(item) {
            console.log("Vendedor escolhido:", item);
            this.ObjetosCompras.push({
                quant: 1,
                nome: item.nome,
                codigo: item.codigo,
                Preco: item.Preco,
                vendedor: item.vendedor,
                idVendedor: item.idVendedor,
                valor: item.Preco
            });

            this.vendedores = []
            this.$emit('limpar-produtos')
            this.$emit('enviar-ObjetosCompras', this.ObjetosCompras)
        },
        async addVendedores(item) {
            console.log("Adicionar vendedor:", item);
            // Lógica para adicionar um novo vendedor
        },
        semVendedores() {
            alert('Escolha um produto para adicionar um vendedor');
        },



    }


}
</script>


<style scoped>
.listaResposte {
    width: 40vw;
    height: 35vh;
    font-size: 20px;
    z-index: 2;

    margin-top: 2%;
    border: none;
    border: var(--colorVerde) 2px solid;
    border-radius: 10px;
    transition: all 0.2s;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.222);
    background-color: var(--colorBranco);
    overflow: auto;
}

.listaResposte li {
    margin: 5px 0 5px 0;
    padding: 15px 0 15px 0;
    justify-content: space-between;
    display: flex;
}

.listaResposte li:hover {
    background-color: var(--colorVerde);
    color: var(--colorBranco);
    cursor: pointer;
}

.listaResposte li p {
    padding: 0 10% 0 10%;

}

.listaVendedores {
    margin-top: 5vh;
    justify-content: center;
    display: flex;
    flex-direction: column;

}

.listaVendedores ul {
    margin-top: 5px;
    height: 20vh;
}

.ulVend {
    min-height: 30vh;
    max-height: 30vh;
    overflow-y: auto;
}
</style>