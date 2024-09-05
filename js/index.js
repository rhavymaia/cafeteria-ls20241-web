const incrementarOnclick = (event) => {
  console.log('Clicou no botão');
};

const incrementarOnmouseover = (event) => {
  console.log('Passou o mouse no botão');
};

let incrementarButton = document.getElementById('incrementar');
incrementarButton.onclick = incrementarOnclick;
incrementarButton.onmouseover = incrementarOnmouseover;
