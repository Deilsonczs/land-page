let availablekeywords = [
  ' Leia o trecho abaixo Gerentes com responsabilidades sobre software assim como gerentes da maioria das áreas frequentemente estão sob pressão para manter os orçamentos evitar deslizes nos cronogramas e elevar a qualidade Como uma pessoa que está se afogando e se agarra à crença em um mito do software para aliviar a pressão mesmo que temporariamente Fonte PRESSMAN, Roger S MAXIM, Bruce R Engenharia de Software Uma Abordagem Profissional 8 ed Porto Alegre Amgh 2016 p 23Considerando essas informações e o conteúdo estudado, é possível afirmar que o trecho acima está relacionado ao: RESPOSTA CORRETA: MITO DE GERENCIAMENTO',
  'CSS',
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