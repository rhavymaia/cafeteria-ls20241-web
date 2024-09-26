// Função chamada quando o botão é clicado
const incrementarOnclick = (event) => {
  console.log('Clicou no botão');  // Exibe uma mensagem no console
};

// Função chamada quando o mouse passa sobre o botão
const incrementarOnmouseover = (event) => {
  console.log('Passou o mouse no botão');  // Exibe uma mensagem no console
};

// Seleciona o botão com o id 'incrementar'
let incrementarButton = document.getElementById('incrementar');

// Adiciona o evento de clique ao botão, chamando a função correspondente
incrementarButton.onclick = incrementarOnclick;

// Adiciona o evento de mouseover ao botão, chamando a função correspondente
incrementarButton.onmouseover = incrementarOnmouseover;
