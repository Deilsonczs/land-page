document.addEventListener('DOMContentLoaded', () => {
  const inputBox = document.getElementById("input-box");
  const resultsBox = document.querySelector(".result-box");
  let questoes = [];

  // Carregar o JSON
  fetch('questoes.json')
    .then(response => response.json())
    .then(data => {
      questoes = data;
    })
    .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));

  inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value.trim();
    if (input.length) {
      result = questoes.filter((q) => {
        return q.pergunta.toLowerCase().includes(input.toLowerCase());
      });
      console.log(result);
    }
    display(result, input);
  }

  function display(result, input) {
    if (input.length === 0) {
      resultsBox.innerHTML = '';
    } else if (result.length) {
      const content = result.map((q) => {
        return `<li>${q.pergunta}<div class="resposta"><b>Resposta:</b> ${q.resposta}</div></li>`;
      }).join("");
      resultsBox.innerHTML = `<ul>${content}</ul>`;
    } else {
      resultsBox.innerHTML = '<p class="no-results">Questão não encontrada</p>';
    }
  }
});

function openModal(){
  const modal = document.getElementById('modal-container');
  modal.classList.add('mostrar');

  modal.addEventListener('click', (e) => {
    if (e.target.id == 'modal-container' || e.target.id == "fechar") {
      modal.classList.remove('mostrar');
      localStorage.fechaModal = 'modal-container';
    }
  });
}

