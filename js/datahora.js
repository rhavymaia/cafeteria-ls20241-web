const dataHora = () => {
  let horaP = document.getElementById('hora');
  let dataP = document.getElementById('data');
  let dataHora = new Date();

  horaP.innerHTML = dataHora.toLocaleTimeString();
  dataP.innerHTML = dataHora.toLocaleDateString();
};

let iniciarButtton = document.getElementById('iniciar');
let idInterval = 0;

iniciarButtton.onclick = (event) => {
  idInterval = setInterval(dataHora, 1000);
};

let pararButton = document.getElementById('parar');
pararButton.onclick = (event) => {
  console.log(idInterval);
  clearInterval(idInterval);
};

let body = document.body;
body.onmouseleave = (event) => {
  let mensagemP = document.getElementById('mensagem');
  mensagemP.innerHTML = `
    Por favor, não nos deixe.
    <img src='../imagem/please.png' width='10%'/>
  `;
};

body.onmouseenter = (event) => {
  let mensagemP = document.getElementById('mensagem');
  mensagemP.innerHTML = `
    Que bom sua volta.
    <img src='../imagem/happy.png' width='10%'/>
  `;
};
