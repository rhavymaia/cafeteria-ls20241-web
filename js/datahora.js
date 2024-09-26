// Função que atualiza a hora e a data no HTML
const dataHora = () => {
  // Seleciona os elementos HTML onde a hora e a data serão exibidas
  let horaP = document.getElementById('hora');
  let dataP = document.getElementById('data');
  // Cria um novo objeto Date com a data e hora atuais
  let dataHora = new Date();

  // Atualiza o conteúdo HTML com a hora e a data formatadas
  horaP.innerHTML = dataHora.toLocaleTimeString();  // Hora no formato local
  dataP.innerHTML = dataHora.toLocaleDateString();  // Data no formato local
};

// Seleciona o botão "iniciar" e inicializa um identificador para o intervalo
let iniciarButtton = document.getElementById('iniciar');
let idInterval = 0;

// Adiciona um evento de clique ao botão "iniciar"
iniciarButtton.onclick = (event) => {
  // Inicia um intervalo que chama a função dataHora a cada 1000 milissegundos (1 segundo)
  idInterval = setInterval(dataHora, 1000);
};

// Seleciona o botão "parar" e adiciona um evento de clique
let pararButton = document.getElementById('parar');
pararButton.onclick = (event) => {
  // Log do id do intervalo atual no console (para depuração)
  console.log(idInterval);
  // Para o intervalo que atualiza a hora e a data
  clearInterval(idInterval);
};

// Seleciona o corpo do documento
let body = document.body;

// Adiciona um evento que dispara quando o mouse sai da área do corpo
body.onmouseleave = (event) => {
  let mensagemP = document.getElementById('mensagem');
  mensagemP.innerHTML = `
    Por favor, não nos deixe.
    <img src='../imagem/please.png' width='10%'/>
  `;
};

// Adiciona um evento que dispara quando o mouse entra na área do corpo
body.onmouseenter = (event) => {
  let mensagemP = document.getElementById('mensagem');
  mensagemP.innerHTML = `
    Que bom sua volta.
    <img src='../imagem/happy.png' width='10%'/>
  `;
};
