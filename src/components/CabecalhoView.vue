<template>

    <header>

        <!-- Casa - InicioView -->
        <div class="hearderIco">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" @click="this.$router.push('/')" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6 ico" cursor="pointer">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <p>Home</p>
        </div>

        <!-- Pasta - CadastroProdutos -->
        <div class="hearderIco">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" @click="this.$router.push('/CadastroProdutos')"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" cursor="pointer" class="size-6 ico">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
            </svg>
            <p>Cadastro</p>
        </div>

        <!-- Grafico - DashBoardView -->
        <div class="hearderIco">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                @click="this.$router.push('/DashBoardView')" stroke-width="1.5" stroke="currentColor" cursor="pointer"
                class="size-6 ico">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
            </svg>
            <p>Dados</p>
        </div>

        <!-- Carrinho - CaixaView -->
        <div class="hearderIco">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" @click="this.$router.push('/CaixaView')"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 ico" cursor="pointer">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>

            <p>Compras</p>
        </div>
    </header>
</template>


<script>
export default {
    name: 'CabecalhoView',
}
</script>


<style scoped>
header {
    max-height: 100vh;
    width: 100px;
    height: 100vh;
    padding-bottom: 80px;
    z-index: 1;
    position: absolute;
    background-color: rgb(255, 255, 255);
    display: block;
    border: var(--colorVerde) 2px solid;
    border-top: none;
    border-left: none;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;

    /* var(--colorBranco) */
}

.ico {
    margin-top: 20px;
    width: 50%;


}

.hearderIco p {
    border-bottom: var(--colorVerde) 2px solid;
    width: 80%;
    margin: 0 auto;
    font-size: 15px;
}
</style>
