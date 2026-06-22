const axios = require('axios');

async function aplicarCupomDesconto(valorTotal, nomeCupom) {
  const resposta = await axios.get('https://exemplo.com' + nomeCupom);
  const cupomValido = resposta.data.valido;
  
  if (cupomValido) {
    return valorTotal * 0.9;
  }
  
  return valorTotal;
}

module.exports = aplicarCupomDesconto;
