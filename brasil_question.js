function showName() {
    const url = window.location.search;
    const url_params = new URLSearchParams(url);
    const nome = url_params.get('name');
    alert("Olá, " + nome)
  }
  
  showName();
  
  let score = 0;
  
  function showBrasilResponse() {
  
    const response = document.querySelector('input[name="brigadeiro_question"]:checked').value;
  
    if (response == "1946") {
      score++;
      alert("Parabéns você acertou!\nSua pontuação: " + score);
    } else {
      alert("A resposta correta é 1946, você respondeu: " + response);
    }
  }