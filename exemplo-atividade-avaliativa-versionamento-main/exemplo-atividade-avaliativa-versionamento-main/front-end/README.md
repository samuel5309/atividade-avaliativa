# Desenvolvimento Front-end

📝 Descrição do Projeto/Atividade
Criação de uma aplicação web de contador interativo com gerenciamento de estado global centralizado através do Redux Toolkit. O projeto conta com uma interface moderna integrada a uma folha de estilos avançada, apresentando total responsividade para dispositivos móveis e suporte nativo ao Modo Escuro (Dark Mode) baseado no sistema do usuário.

🧠 Reflexão de Aprendizado
1. O que aprendi?
Aprendi a estruturar um projeto moderno utilizando o React junto ao ecossistema do Vite. Compreendi os conceitos fundamentais de gerenciamento de estado global com Redux Toolkit, utilizando ferramentas como `createSlice` para unificar reducers e actions de forma limpa, evitando o prop drilling. No CSS moderno, aprofundivei conhecimentos em arquitetura com variáveis nativas (`:root`), aninhamento de seletores (nesting), pseudo-elementos (`::before` e `::after`) e media queries para responsividade.

2. Para que serve (Por que aprendi)?
O gerenciamento de estado centralizado serve para construir aplicações web escaláveis e previsíveis no mercado de trabalho real, onde múltiplos componentes precisam acessar e alterar o mesmo dado de forma organizada. Estilizar interfaces elegantes, acessíveis e que suportam preferências do usuário (como o Modo Escuro) é essencial para garantir uma excelente experiência de uso (UI/UX) e acessibilidade em qualquer tipo de dispositivo.

🛠️ Tecnologias e Ferramentas Utilizadas
* HTML5 / CSS3 Avançado
* JavaScript (ES6+)
* React (Componentização e Hooks)
* Vite (Ambiente de Desenvolvimento rápido)
* Redux Toolkit & React-Redux (Arquitetura de Estado Global)

💻 Demonstração e Como Rodar

Código Relevante Comentado
Abaixo está o trecho do arquivo `App.jsx` que demonstra a criação da store global do Redux e a alteração lógica do contador:

```jsx
// Criação do Slice do Redux unificando o estado e as regras de negócio
const contadorSlice = createSlice({
  name: 'contador',
  initialState: { valor: 0 }, // Define o valor inicial do estado
  reducers: {
    incrementar: (state) => {
      state.valor += 1; // Incrementa o estado de forma simples usando Immer internamente
    },
    decrementar: (state) => {
      state.valor -= 1; // Decrementa o valor
    },
    incrementarPorValor: (state, action) => {
      state.valor += action.payload; // Adiciona um valor dinâmico enviado via parâmetro
    }
  }
});
```

Instruções para Executar
Como este projeto utiliza Node.js, Vite e React, siga as instruções de terminal abaixo de dentro da pasta do projeto:

1. Instale todas as dependências do projeto:
   ```bash
   npm install
   ```

2. Inicialize o servidor de desenvolvimento local:
   ```bash
   npm run dev
   ```

3. Acesse o link gerado no seu terminal para visualizar a aplicação:
   * Endereço padrão: `http://localhost:5173`
