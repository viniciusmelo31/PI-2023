// Definindo o objeto com as perguntas e respostas
const perguntasRespostas = {
  "Olá": "Olá! Como posso ajudar você?",
  "O que você pode fazer?": "Bom eu estou aqui para auxiliar você em várias tarefas",
  "No que você pode me auxiliar?": "Eu posso falar pra você quais caminhões estão liberados, quais caminhoneiros estã disponives para trabalho e muito mais!",
  "Quais caminhoneiros podem trabalhar atualmente?": "Aqui esta a lista de quem está disponivel para viagens: Isabella Santos, Guilherme Santos, Laura Oliveira, Manuela Costa, Maria Almeida e Bruno Ferreira.",
  "Quantos caminhões estão disponiveis para viagem?": "Vinte e oito caminhões estão diponiveis",
  "Tem algum caminhão na oficina?": "Atualmente dois caminhões estão na oficina.",
  "Quantos caminhões estão em viagem atualmente?": "Atualmente três caminhões estão em viagem.",
  "Quais são os tipos de caminhões disponíveis para viagem?": "Os tipos de caminhões são scania 500, mercedes benz actros 2651s, volkswagen constellation, MAN, scania 450, DAF e Mercedes L1113",
  "Quais são as regiões em que os motoristas estão passando atualmente?": "Região sul de Santa Catarina",
  "Quais caminhões estarão disponiveis para viagem amanhã?": "Doze caminhões estarão disponiveis amanhã.",
  "Quais são os horários de trabalho dos motoristas disponíveis?": "Os horarios são das 6:00 horas da manhã até 19:00 horas da tarde.",
  "Para onde o Lucas Silva está indo?": "O Lucas Silva, está indo para o sul de Santa Catarina.",
  "O caminhão scania 500 está disponivel para viagem?": "Sim o caminhão scania 500 está disponivel para viagem",
  "O caminhão volkswagen constellation está aonde?": "No momento o volks constellation está na oficina.",
  "O caminhão mercedes benz actros 2651s está em em qual região nesse momento?": "Nesse momento o caminhão mercedes benz actros 2651s está na região sul.",
  "Quais são os motoristas que estão de férias no momento?": "Os motoristas que estão de férias atualmente são: Rafael Mendes e Gustavo Almeida.",
  "Quais motoristas estão em trajetoria?": "No momento, Lucas Silva, Sophia Lima e Pedro Oliveira, estão em trajetória.",
};

// Função para encontrar a resposta adequada com base na pergunta
function encontrarResposta(pergunta) {
  for (const chave in perguntasRespostas) {
      if (new RegExp(chave, "i").test(pergunta)) {
          return perguntasRespostas[chave];
      }
  }
  return "Desculpe, eu não entendi a pergunta.";
}
// Função para criar uma mensagem no chat
function criarMensagem(texto, classe) {
  const mensagem = document.createElement("div");
  mensagem.textContent = texto;
  mensagem.classList.add("mensagem", classe);
  return mensagem;
}

// Função para exibir a resposta na página
function exibirResposta(pergunta, resposta) {
  const chatContainer = document.getElementById("chat-container");
  const mensagemUsuario = criarMensagem(pergunta, "mensagem-usuario");
  const mensagemChatBot = criarMensagem("ChatBot: " + resposta, "mensagem-chatbot");

  chatContainer.appendChild(mensagemUsuario);
  chatContainer.appendChild(mensagemChatBot);

  // Rolando automaticamente para a última mensagem
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Função para ler a pergunta e exibir a resposta
function conversar() {
  const perguntaInput = document.getElementById("pergunta");
  const pergunta = perguntaInput.value;
  const resposta = encontrarResposta(pergunta);
  exibirResposta(pergunta, resposta);

  // Limpar o campo de entrada
  perguntaInput.value = "";
}

// Função para verificar a tecla pressionada
function verificarTecla(event) {
  if (event.keyCode === 13) {
      conversar();
      event.preventDefault();
  }
}