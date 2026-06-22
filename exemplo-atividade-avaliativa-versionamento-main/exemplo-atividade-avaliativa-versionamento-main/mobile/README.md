# Desenvolvimento Mobile

## 📝 Descrição do Projeto/Atividade
Criação de um aplicativo demonstrativo utilizando React Native e Expo para o aprendizado prático de posicionamento de elementos em telas móveis. O projeto foca na aplicação e estilização de estruturas usando o sistema Flexbox, simulando a distribuição de blocos de conteúdo de forma responsiva em diferentes tamanhos de telas de smartphones.

## 🧠 Reflexão de Aprendizado
### 1. O que aprendi?
Aprendi a iniciar um ecossistema de desenvolvimento móvel utilizando o Expo com TypeScript, compreendendo como os componentes nativos são renderizados. Pratiquei conceitos fundamentais de Flexbox aplicados ao Mobile, assimilando que, diferentemente da Web, a propriedade `flexDirection` no React Native adota o padrão `column` (coluna). Compreendi como manipular o alinhamento dos eixos com `justifyContent` (eixo principal) e `alignItems` (eixo cruzado) usando a folha de estilos otimizada `StyleSheet.create`.

### 2. Para que serve (Por que aprendi)?
Dominar o Flexbox no desenvolvimento mobile é essencial para construir interfaces fluidas que se adaptam automaticamente a qualquer tamanho, proporção ou resolução de tela de celular (Android e iOS). Compreender o comportamento de layouts móveis evita que elementos fiquem cortados ou sobrepostos, garantindo a usabilidade, acessibilidade e uma experiência profissional para o usuário final.

## 🛠️ Tecnologias e Ferramentas Utilizadas
* React Native (Componentes nativos como View e Text)
* Expo (Framework e CLI de desenvolvimento mobile)
* TypeScript (Tipagem estática e segurança no código)
* Flexbox (Sistema de estilização e alinhamento de layout)

## 💻 Demonstração e Como Rodar

### Código Relevante Comentado
Abaixo está o trecho estruturado no arquivo App.tsx demonstrando o container que alinha as caixas horizontalmente:

const styles = StyleSheet.create({
  containerFlex: {
    flex: 1, // Ocupa todo o espaço disponível do bloco
    flexDirection: 'row', // Organiza os elementos filhos em linha (horizontal)
    justifyContent: 'space-around', // Distribui os itens criando espaços iguais ao redor deles
    alignItems: 'center', // Centraliza os itens verticalmente no eixo oposto
    backgroundColor: '#e2e8f0',
    borderRadius: 10,
  }
});

### Instruções para Executar
Como este projeto utiliza Node.js, Expo e TypeScript, siga as instruções abaixo no terminal de dentro da pasta do aplicativo (my-app):

1. Instale as dependências do projeto:
   npm install

2. Inicie o servidor de desenvolvimento do Expo:
   npx expo start

3. Para visualizar a aplicação:
   * Abra o aplicativo "Expo Go" no seu celular e escaneie o código QR exibido no terminal.
   * Ou pressione "a" no teclado se tiver um emulador Android configurado.
   * Ou pressione "i" no teclado se tiver um simulador iOS configurado (macOS).
