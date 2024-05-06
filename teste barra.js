let availablekeywords = [
  /* #1 */
  ' PERGUNTA: Leia o trecho abaixo Gerentes com responsabilidades sobre software assim como gerentes da maioria das áreas frequentemente estão sob pressão para manter os orçamentos evitar deslizes nos cronogramas e elevar a qualidade Como uma pessoa que está se afogando e se agarra à crença em um mito do software para aliviar a pressão mesmo que temporariamente Fonte PRESSMAN, Roger S MAXIM, Bruce R Engenharia de Software Uma Abordagem Profissional 8 ed Porto Alegre Amgh 2016 p 23Considerando essas informações e o conteúdo estudado, é possível afirmar que o trecho acima está relacionado ao: RESPOSTA CORRETA: MITO DE GERENCIAMENTO.',
  /* #2 */
  'PERGUNTA:  Leia o trecho a seguir: “O SWEBOK é recomendado para diversos tipos de público, em todo o mundo, com o objetivo de ajudar organizações a terem uma visão consistente da Engenharia de Software. É endereçado a gerentes, engenheiros de software, às sociedades profissionais, estudantes, professores e instrutores desta área de conhecimento.” Fonte: TORRES, André Luís de Lucena. Uma introdução ao SWEBOK. Disponível em: http://www.cin.ufpe.br/~processos/TAES3/Livro/00-LIVRO/11-SWEBOK-v8_CORRIGIDO_Versao_Final_OK.pdf. Acesso em: 25 abr. 2019. O trecho acima retrata as funcionalidades do SWEBOK. A partir dessas informações e do conteúdo estudado sobre o tema, pode-se concluir que o objetivo do SWEBOK é: RESPOSTA CORRETA: AUXILIAR AS EMPRESAS A OBSERVAREM DE MANEIRA MAIS AMPLA A ENGENHARIA DE SOFTWARE COMO UM TODO',
  'javaScript',
  'Easy tutorials',
  'web design tutorials',
  'were to learn coding online',
  'were to learn web design',
  'how to create a website',
  ];
  
  const resultsBox = document.querySelector(".result-box");
  const inputBox = document.getElementById("input-box");
  
  inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
      result = availablekeywords.filter((keyword)=>{
       return keyword.toLowerCase().includes(input.toLowerCase());
      });
      console.log(result);
    }
    display(result);
  }
  
  function display(result){
    const content = result.map((list)=>{
      return "<li>" + list + "</li>";
    });
  
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
  }

  function openModal(){
    const modal = document.getElementById('modal-container')
    modal.classList.add('mostrar')

    modal.addEventListener('click', (e) =>{
        if (e.target.id == 'modal-container' || e.target.id == "fechar"){
            modal.classList.remove('mostrar')
            localStorage.fechaModal = 'modal-container'
        }
    })
}