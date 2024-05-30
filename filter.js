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
    let input = inputBox.value;
    if (input.length) {
      result = questoes.filter((q) => {
        return q.pergunta.toLowerCase().includes(input.toLowerCase());
      });
      console.log(result);
    }
    display(result);
  }

  function display(result) {
    if (result.length) {
      const content = result.map((q) => {
        return `<li>${q.pergunta} <br><b>Resposta:</b> ${q.resposta}</li>`;
      }).join("");
      resultsBox.innerHTML = `<ul>${content}</ul>`;
    } else {
      resultsBox.innerHTML = '';
    }
  }
});
