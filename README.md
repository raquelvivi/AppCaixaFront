# 🖥️ App Caixa 

#### O App Caixa Front é a interface de usuário (front-end) do ecossistema App Caixa. O projeto completo é integrado ao repositório: [App Caixa Back](https://github.com/raquelvivi/appCaixaBack).

#### Este sistema web foi desenvolvido especificamente para a gestão comercial de mercados e kitandas. A solução surgiu da necessidade real de mapear o fluxo de vendas, controle de estoque e margem de lucro de um comércio local. O projeto consolida anos de experiência no setor de vendas, traduzindo necessidades práticas em funcionalidades de controle financeiro, gestão de perdas, compras e conformidade com taxas governamentais.

#### O principal objetivo do projeto é implementar uma gestão estratégica na Kitanda do Vitor (empresa de médio porte). Anteriormente, a empresa operava sem métricas de diagnóstico ou previsões futuras, enfrentando um cenário de endividamento crescente. O sistema visa sanar lacunas de inteligência de negócio, respondendo a perguntas fundamentais como: "Qual o lucro real da operação?" e "Qual a viabilidade financeira do modelo de negócio?".

#### Atualmente, o sistema encontra-se em fase de desenvolvimento, com as funcionalidades principais de interface já operacionais. O projeto adota a metodologia ágil Scrum, focando em ciclos de entrega rápidos e melhoria contínua do produto.

## 🛠️ Tecnologias Utilizadas
<div align="center">
<table border="0">
  <tr>
<td valign="top">

#### 🎨 Front-end
<a href="https://github.com/search?q=user%3Araquelvivi+language%3AVue"><img src="https://img.shields.io/badge/Vue-249900.svg?logo=vue.js&logoColor=white"></a>
<a href="https://github.com/search?q=user%3Araquelvivi+language%3AJavaScript"><img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-f72585.svg?logo=javascript&logoColor=white"></a>
<a href="https://github.com/search?q=user%3Araquelvivi+language%3AHTML"><img src="https://img.shields.io/badge/HTML-cc6300.svg?logo=html5&logoColor=white"></a>
<a href="https://github.com/search?q=user%3Araquelvivi+language%3ACSS"><img src="https://img.shields.io/badge/CSS-007ACC.svg?logo=css3&logoColor=white"></a>

</td>
<!-- <td valign="top">-->
   
<!--#### 😶‍🌫️ Outros

<img src="https://img.shields.io/badge/Dark%20Mode-212529.svg?logo=darkreader&logoColor=white"> 
<img src="https://img.shields.io/badge/MVC-c625cc.svg"> 
<img src="https://img.shields.io/badge/Clean%20Code-822608.svg"> 
<img src="https://img.shields.io/badge/Validação%20de%20Dados-fffd70.svg"> 

<br/>

</td> -->
 </tr>
</table>
</div>

<br/><br/>

## 🚀 Executar

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npm run serve
   ```
   <!-- 
   front vue = npm run serve
   back nest = npm run start:dev   
   -->

<br/><br/>
## 🖼️ Imagens

<img width="1902" height="911" alt="Captura de tela 2026-04-06 231401" src="https://github.com/user-attachments/assets/66fd43a3-2f36-4325-83c6-5c57c9fc7a5d" />
<img width="1910" height="911" alt="image" src="https://github.com/user-attachments/assets/a75451a0-cbdc-4a84-95f3-fa4986b7cb10" />
<img width="1918" height="957" alt="image" src="https://github.com/user-attachments/assets/c6d8cb03-6c0e-4d87-a0cf-919fcd08c63e" />
<img width="1918" height="960" alt="image" src="https://github.com/user-attachments/assets/56583fb6-e4e9-4417-8c85-fdbfaaeaa111" />
<img width="1912" height="958" alt="image" src="https://github.com/user-attachments/assets/ce2cfb9c-6f57-4c27-97fa-5086dd160abf" />
<img width="1899" height="913" alt="Captura de tela 2026-04-06 231508" src="https://github.com/user-attachments/assets/9cbaef93-2bea-4401-927e-c91c5f75b61a" />
<img width="1910" height="914" alt="Captura de tela 2026-04-06 231531" src="https://github.com/user-attachments/assets/bc7943f5-6b5a-43a0-8560-5633ddebd211" />



</br></br>

## Problemas

#### Um dos principais desafios deste front-end é a definição de uma interface intuitiva e acessível. O sistema é utilizado por pessoas com pouca familiaridade com tecnologia, o que exige decisões cuidadosas de usabilidade, como escolha de cores, hierarquia visual e simplificação das interações. Nesse contexto, o desafio não é apenas técnico, mas também de experiência do usuário, buscando reduzir erros e tornar o uso o mais natural possível.

#### Outro desafio relevante está relacionado à modelagem da interface para produtos perecíveis, especialmente aqueles vendidos por peso, como carnes, frutas e verduras. Diferente de produtos industrializados, esses itens nem sempre possuem validade bem definida, o que dificulta a padronização no sistema. Assim, foi necessário pensar em formas eficientes de representar, registrar e manipular esses dados sem comprometer a praticidade, considerando que os usuários precisam realizar operações rápidas e simples no dia a dia.

<!--
## Problemas
#### Neste projeto, enfrentei um desafio baseado no clássico "na minha máquina funciona". O aplicativo operava perfeitamente no computador e no Expo, mas o cenário mudou na transformação para APK. Durante a execução do APK, a tela dinâmica /pg/[id] não carregava corretamente: ao navegar para ela, o aplicativo exibia a mensagem “Carregando...” indefinidamente.

#### O erro não estava relacionado à navegação ou ao parâmetro id, mas sim às requisições HTTP feitas para o backend hospedado na Render. Enquanto no ambiente de teste tudo fluía, no ambiente real a história era outra. O próprio Android bloqueava a requisição HTTP, o que, consequentemente, impedia a resposta e o carregamento da tela. A solução foi rápida: substituir o HTTP por sua versão segura e criptografada, o HTTPS.

#### Com isso, aprendi que ambientes de desenvolvimento são mais permissivos e aceitam HTTP, enquanto em produção as restrições são maiores. Este episódio serve como um lembrete para mim mesma: mesmo tendo estudado protocolos como HTTP, HTTPS, UDP e TCP, acabei caindo na cilada de utilizar uma conexão não segura em um ambiente restrito.


</br></br>


## Futuro
#### Para o futuro, planejo criar uma página com informações como: quantidade de compras, quantidade de pagamentos, número de fichas, valor total de dinheiro preso, entre outros dados relevantes. Além disso, pretendo incorporar ao aplicativo Fixas Caloteiro um gerenciador de estoque e preços para o mesmo mercado.

#### Para isso, será melhor unificar os dois bancos de dados, pois assim será mais fácil modificar, por exemplo, o preço da banana diretamente pelo celular, fazendo com que o valor seja automaticamente atualizado em todos os computadores do mercado.
-->
