 // const filterElement = document.querySelector('header input')
 // const cards = document.querySelectorAll('.cards li')

 // filterElement.addEventListener('input', filterCards)

 // function filterCards() {
  //  if(filterElement.value != '') {
   //   for (let card of cards) {
   //     let title = card.querySelector('h2')
    //    title = title.textContent.toLowerCase()
   //     let filterText = filterElement.value.toLowerCase()
   //     if(!title.includes(filterText)) {
   //       card.style.display = "none"
   //     }
     //   else{
   //       card.style.display = "block"
   //      card.parentElement.style.display = "flex"; // Define o pai do card como flexível
  //       card.parentElement.style.justifyContent = "center"; // Centraliza horizontalmente o conteúdo
  //       card.parentElement.style.alignItems = "center"; // Centraliza verticalmente o conteúdo 
 //       }
 //     }      
//    } else {
 //     for (let card of cards) {
 //       card.style.display = "block"
//        card.parentElement.style.display = ""; // Remove a exibição flexível para voltar ao estado original
//        card.parentElement.style.justifyContent = ""; // Remove a justificação horizontal
 //       card.parentElement.style.alignItems = ""; // Remove a centralização vertical
  //  

 //   }
 // } 


  document.addEventListener('DOMContentLoaded', function() {
    const filterElement = document.querySelector('header input');
    const clearButton = document.getElementById('clear-button');
    const cards = document.querySelectorAll('.cards li');
  
    // Adiciona um listener de evento para o botão de limpar
    clearButton.addEventListener('click', function() {
      filterElement.value = ''; // Limpa o valor do campo de entrada
      filterCards(); // Chama a função filterCards para mostrar todos os cards novamente
    });
  
    // Adiciona um listener de evento para o input na caixa de pesquisa
    filterElement.addEventListener('input', filterCards);
  
    function filterCards() {
      if (filterElement.value !== '') {
        for (let card of cards) {
          let title = card.querySelector('p').textContent.toLowerCase();
          let filterText = filterElement.value.toLowerCase();
          if (!title.includes(filterText)) {
            card.style.display = "none";
          } else {
            card.style.display = "block";
            card.parentElement.style.display = "flex"; // Define o pai do card como flexível
            card.parentElement.style.justifyContent = "center"; // Centraliza horizontalmente o conteúdo
            card.parentElement.style.alignItems = "center"; // Centraliza verticalmente o conteúdo 
          }
        }
      } else {
        for (let card of cards) {
          card.style.display = "block";
          card.parentElement.style.display = ""; // Remove a exibição flexível para voltar ao estado original
          card.parentElement.style.justifyContent = ""; // Remove a justificação horizontal
          card.parentElement.style.alignItems = ""; // Remove a centralização vertical
        }
      }
    }
  });

/**
 * Custom cursor
 */

const cursor = document.querySelector("[data-cursor]");
const hoverElements = [...document.querySelectorAll("a"), ...document.querySelectorAll("button")];

const cursorMove = function (event) {
  cursor.style.top = `${event.clientY}px`;
  cursor.style.left = `${event.clientX}px`;
}

window.addEventListener("mousemove", cursorMove);

addEventOnElements(hoverElements, "mouseover", function () {
  cursor.classList.add("hovered");
});

addEventOnElements(hoverElements, "mouseout", function () {
  cursor.classList.remove("hovered");
});

  
//Links Úteis
//Explorer: https://rocketseat.com.br/explorer
//Phosphor Icons: https://phosphoricons.com/