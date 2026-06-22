# Desenvolvimento Back-end e Testes

## 📝 Descrição do Projeto/Atividade
Desenvolvimento de uma função assíncrona de validação de cupons de desconto (cupom.js) para uma aplicação de Mini-Ecommerce. O módulo integra o consumo de APIs externas simuladas com a biblioteca Axios e valida regras de cálculo comercial, contando com uma suíte de testes unitários automatizados através do framework Jest para garantir a estabilidade do sistema.

## 🧠 Reflexão de Aprendizado
### 1. O que aprendi?
Aprendi a construir funções assíncronas (async/await) no ecossistema Node.js para lidar com requisições HTTP externas de forma não bloqueante utilizando o Axios. Compreendi como exportar módulos JavaScript (module.exports) para consumo em arquivos de testes externos. Pratiquei o isolamento e teste de fluxos lógicos e condicionais, verificando se o retorno de uma API impacta corretamente o cálculo de regras de negócio, como a aplicação de descontos em cascata.

### 2. Para que serve (Por que aprendi)?
Funções de integração com APIs e validação lógica formam a base do desenvolvimento back-end de qualquer sistema comercial moderno. Aprendi isso porque regras críticas (como validação de cupons financeiros) precisam ser processadas e testadas com rigores de qualidade no servidor. Garantir testes automatizados nessas funções impede falhas de prejuízo financeiro e falhas de integração com parceiros externos, mantendo o software confiável e resiliente a falhas.

## 🛠️ Tecnologias e Ferramentas Utilizadas
* Node.js / CommonJS (require e module.exports)
* JavaScript Assíncrono (async / await)
* Axios (Cliente HTTP para integração e consumo de dados)
* Jest (Framework para automação de testes lógicos e asserções)

## 💻 Demonstração e Como Rodar

### Código Relevante Comentado
Abaixo está o trecho do arquivo cupom.js demonstrando a lógica de integração da API e cálculo do desconto:

const axios = require('axios');

async function aplicarCupomDesconto(valorTotal, nomeCupom) {
  // Realiza a chamada assíncrona para buscar os dados de validação do cupom
  const resposta = await axios.get('https://exemplo.com' + nomeCupom);
  const cupomValido = resposta.data.valido;

  // Aplica o abatimento de 10% caso a resposta do servidor seja positiva
  if (cupomValido) {
    return valorTotal * 0.9;
  }

  // Retorna o valor original caso o cupom seja inválido ou expirado
  return valorTotal;
}

module.exports = aplicarCupomDesconto;

### Instruções para Executar
Siga as etapas abaixo utilizando o terminal dentro da pasta mini-ecommerce:

1. Instale os módulos necessários descritos no package.json:
   npm install

2. Execute o script mapeado de testes automatizados do Jest:
   npm run test

3. Acompanhe no console se todas as asserções e testes aplicados sobre o arquivo cupom.test.js foram executados com sucesso.
