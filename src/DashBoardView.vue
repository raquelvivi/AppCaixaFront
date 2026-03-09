
<template>

  <CabecalhoView />
  
    <main>
        


    </main>


    <!-- <p>coisa amarga {{quant}}</p> -->



</template>

<!-- <script setup>
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
</script> -->

<script>
import CabecalhoView from "./components/CabecalhoView.vue"

export default {
  name: 'DashboardView',
  components: {
    CabecalhoView
  },
  data() {
    return {
      // vendedor: '',
   
    };
  },
  methods: {
    apagar() {
      alert("apagou");
    }
  },
};



</script>

<style scoped>


</style>

