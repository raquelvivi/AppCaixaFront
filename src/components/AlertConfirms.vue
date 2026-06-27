
<template>

    <p>Clique no botão para exibir a caixa de confirmação.</p>

    <button onclick="funcao1()">Clique aqui</button>

    <p id="demo"></p>

</template>


<script>
    function funcao1(){
        var x;
        var r=confirm("Escolha um valor!");
        
        if (r==true){
            x="você pressionou OK!";

         }else{
            x="Você pressionou Cancelar!";
        }
        document.getElementById("demo").innerHTML=x;
    }
</script>


