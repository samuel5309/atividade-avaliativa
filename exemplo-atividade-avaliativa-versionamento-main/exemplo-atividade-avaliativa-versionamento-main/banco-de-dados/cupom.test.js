const aplicarCupomDesconto = require('./cupom');
const axios = require('axios');

jest.mock('axios');

describe('cupom.test.js', () => {
  
  test('Deve aplicar 10% de desconto quando o cupom for válido.', async () => {
    axios.get.mockResolvedValue({ data: { valido: true } });
    
    const result = await aplicarCupomDesconto(100, 'VALE10');
    expect(result).toBe(90);
  });

  test('Deve manter o valor original quando o cupom for inválido.', async () => {
    axios.get.mockResolvedValue({ data: { valido: false } });
    
    const result = await aplicarCupomDesconto(100, 'CUPOM_EXPIRADO');
    expect(result).toBe(100);
  });
  
});
