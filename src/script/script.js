// Seleciona todos os cards
const cards = document.querySelectorAll('.card');
// Seleciona modal e botão de fechar
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close-btn');

// Quando clicar em um card
cards.forEach(card => {
  card.addEventListener('click', () => {
    // Pega informações do card
    const imgSrc = card.querySelector('img').src;
    const title = card.querySelector('h3').innerText;
    const desc = card.querySelector('p').innerText;

    // Atualiza modal
    modalContent.querySelector('img').src = imgSrc;
    modalContent.querySelector('h3').innerText = title;
    modalContent.querySelector('p').innerText = desc;

    // Mostra modal
    modal.style.display = 'flex';
  });
});

// Fechar modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fecha modal clicando fora do conteúdo
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
