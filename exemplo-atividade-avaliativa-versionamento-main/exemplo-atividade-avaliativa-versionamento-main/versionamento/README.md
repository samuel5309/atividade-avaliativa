# Depuração e Controle de Estados

## 📝 Descrição do Projeto/Atividade
Atividade prática focada na implementação e depuração de fluxos de dados utilizando o Redux clássico de forma nativa (Vanilla JS). O objetivo principal é analisar o comportamento das actions e reducers através da extensão Redux DevTools, inspecionando o histórico de mutações e simulando o comportamento de "Time-Travel" (viagem no tempo) para rastrear e corrigir o estado da aplicação em tempo real.

## 🧠 Reflexão de Aprendizado
### 1. O que aprendi?
Aprendi a configurar a arquitetura Redux convencional utilizando a função `createStore` e a criar funções `reducer` puras para manipular o estado de maneira previsível. Pratiquei a integração com ferramentas avançadas de diagnóstico ao injetar a propriedade global `__REDUX_DEVTOOLS_EXTENSION__` no código. Com isso, compreendi como monitorar o disparo de ações via `store.dispatch` diretamente pelas ferramentas de desenvolvedor do navegador (F12).

### 2. Para que serve (Por que aprendi)?
Saber inspecionar e rastrear o histórico de alterações no código serve para diagnosticar falhas lógicas complexas e entender exatamente quando e por que um dado mudou de valor. Aprendi isso porque, em ambientes de desenvolvimento profissionais, o controle rigoroso sobre os estados do software reduz o tempo de manutenção, evita comportamentos imprevistos na interface e garante que a aplicação seja altamente estável antes de ser enviada ao usuário.

## 🛠️ Tecnologias e Ferramentas Utilizadas
* HTML5 / JavaScript (ES6+ Nativo)
* Redux (Biblioteca via CDN para fluxo de dados)
* Redux DevTools Extension (Ferramenta de inspeção e debug de estados)
* Chrome DevTools / Console do navegador (Análise de logs e execução)

## 💻 Demonstração e Como Rodar

### Código Relevante Comentado
Abaixo está o bloco central do arquivo index.html que inicializa a store e ativa a ponte de comunicação com a extensão do navegador:

// Reducer que recebe a ação e gera o novo estado de tarefas
function reducer(state = { tasks: [] }, action) {
  if (action.type === 'ADD') return { tasks: [...state.tasks, action.text] };
  return state;
}

// Criação da store integrando o middleware visual do Redux DevTools
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Disparos iniciais para simular a linha do tempo no debugger
store.dispatch({ type: 'ADD', text: 'Aprender Redux DevTools' });

### Instruções para Executar
Siga as etapas abaixo para visualizar o comportamento do fluxo de dados:

1. Instale a extensão "Redux DevTools" na loja de complementos do seu navegador.
2. Abra o arquivo index.html diretamente no navegador de sua preferência.
3. Pressione a tecla F12 no teclado para abrir as Ferramentas do Desenvolvedor.
4. Clique na aba "Redux" para visualizar a linha do tempo, as actions disparadas e o estado se atualizando dinamicamente.
