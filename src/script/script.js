// Seleciona todos os cards
const cards = document.querySelectorAll(".card");
// Seleciona modal e botão de fechar
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const closeBtn = document.querySelector("#fechar");

// Quando clicar em um card
cards.forEach((card) => {
  card.addEventListener("click", () => {
    // Pega informações do card
    const imgSrc = card.querySelector("img").src;
    const title = card.querySelector("h3").innerText;
    const desc = card.dataset.descricao;
    const price = card.querySelector("p").innerText;

    // Atualiza modal
    document.getElementById("modal-img").src = imgSrc;
    document.getElementById("modal-nome").innerText = title;
    document.getElementById("modal-descricao").innerText = desc;
    document.getElementById("modal-preco").innerText = price;

    // Mostra modal
    modal.style.display = "flex";
  });
});

// Fechar modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fecha modal clicando fora do conteúdo
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
