// Array contendo objetos que representam diferentes tipos de café
let itens = [
  {
    titulo: 'Café Expresso',
    descricao:
      'Café expresso feito com grãos selecionados com máquina profissional.',
    alt: 'Café Expresso',
    imagemUrl:
      'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    titulo: 'Prensa Francesa',
    descricao: 'Sabor suave do café selecionado.',
    alt: 'Prensa Francesa',
    imagemUrl:
      'https://images.unsplash.com/photo-1444594975920-e69885b357d5?q=80&w=1712&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    titulo: 'Café Filtrado',
    descricao: 'Café filtrado v60 com todas as notas sensoriais.',
    alt: 'Café Filtrado',
    imagemUrl:
      'https://images.unsplash.com/photo-1498603536246-15572faa67a6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    titulo: 'Café verde',
    descricao: 'Café filtrado v60 com todas as notas sensoriais.',
    alt: 'Café Filtrado',
    imagemUrl:
      'https://plus.unsplash.com/premium_photo-1674327105074-46dd8319164b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

// Verifica se 'produtos' não existe no localStorage e o cria com os itens definidos
if (localStorage.getItem('produtos') == undefined) {
  localStorage.setItem('produtos', JSON.stringify(itens));
}

// Função para criar os cartões e exibi-los na interface
const createCards = () => {
  // Obtém os produtos armazenados no localStorage
  let produtos = JSON.parse(localStorage.getItem('produtos'));
  
  // Para cada produto, cria um cartão e adiciona ao DOM
  for (let produto of produtos) {
    let card = createCardItem(produto);  // Chama a função para criar o HTML do card
    let cardsDiv = document.getElementById('cards');  // Seleciona a div onde os cartões serão inseridos
    cardsDiv.insertAdjacentHTML('beforeend', card);  // Insere o cartão no final da div
  }
};

// Função que cria o HTML para cada cartão de produto
const createCardItem = (item) => {
  return `<div class="col m-2">
      <div class="card">
        <img src="${item.imagemUrl}" class="card-img-top" alt="${item.alt}">
        <div class="card-body">
          <h5 class="card-title">${item.titulo}</h5>
          <p class="card-text">${item.descricao}</p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>
    </div>`;
};

// Exemplos de loops comentados (pode-se usar enquanto ou for, ou métodos como map e forEach)
// while
// for(;;)
// itens.map(()=>{});
// itens.forEach(()=>{});

// Chama a função para criar e exibir os cartões
createCards();
