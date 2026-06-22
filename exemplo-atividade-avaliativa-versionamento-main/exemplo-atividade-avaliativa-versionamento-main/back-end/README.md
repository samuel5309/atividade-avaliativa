# ⚙️ Desenvolvimento Back-end

## 📝 Descrição do Projeto/Atividade
Site para o monitoramento e conectar o arduino ao site

---

## 🧠 Reflexão de Aprendizado

### 1. O que aprendi?
Aprendi a fazer um site pelo terminal do vs code
---

## 🛠️ Tecnologias e Ferramentas Utilizadas
*   Node.js
*   Express
*   TypeScript
 

---

## 💻 codigo releante

### Código Relevante Comentado
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Permite que o front-end acesse o back-end
app.use(cors());

// Serve os arquivos estáticos (HTML, CSS, JS) que estão na pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// ROTA DA API: Simula os dados dos sensores em tempo real
app.get('/api/sensores', (req, res) => {
    // Simulação de dados realistas (Umidade entre 40% e 80%, Temp entre 22°C e 32°C)
    const umidadeSolo = Math.floor(Math.random() * (80 - 40 + 1)) + 40;
    const temperatura = (Math.random() * (32 - 22) + 22).toFixed(1);
    const consumoAgua = (Math.random() * (150 - 50) + 50).toFixed(1);
   
    // Envia os dados em formato JSON para o site
    res.json({
        umidade: umidadeSolo,
        temperatura: temperatura,
        consumo: consumoAgua,
        status: umidadeSolo < 50 ? "Irrigando..." : "Estável",
        timestamp: new Date().toLocaleTimeString('pt-BR')
    });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`\n🚀 Servidor rodando em: http://localhost:${PORT}`);
    console.log(`💧 Sistema de Irrigação AgroSmart ativo!\n`);
});

```

### Instruções para Executar
1. Instale as dependências na pasta do projeto:
   ```bash
   npm install
   ```
2. Configure as variáveis de ambiente necessárias em um arquivo `.env` (se aplicável).
3. Execute o script de inicialização do servidor:
   ```bash
   npm start
   # ou para modo de desenvolvimento:
   npm run dev
   ```
4. Teste as rotas utilizando uma ferramenta de requisições HTTP (como Postman, Insomnia ou a extensão Thunder Client do VS Code).
