
function showName() {
    const url = window.location.search;
    const url_params = new URLSearchParams(url);
    const nome = url_params.get('name');
    alert("Olá, " + nome)
  }
  
  showName();
  
  let score = 0;
  
  function showWorldFoodResponse() {
    const response = document.querySelector('input[name="foodQuestion"]:checked').value;
    if (response == "africa") {
      score++;
      alert("Parabéns você acertou!\nSua pontuação: " + score);
    }
    else {
      alert("A resposta correta é África, você respondeu: " + response);
    }
  }
  
  function showFamousFoodQuestion() {
    const response = document.querySelector('input[name="famousFoodQuestion"]:checked').value;
    if (response == "italiana") {
      score++;
      alert("Parabéns você acertou!\nSua pontuação: " + score);
    }
    else {
      alert("A resposta correta é italiana, você respondeu: " + response + "\nSua pontuação: " + score);
      score--;
    }
  }
  
  function showMostConsumedFood() {
    const response = document.querySelector('input[name="consumedFoodQuestion"]:checked').value;
    if (response == "leite") {
      score++;
      alert("Parabéns você acertou!\nSua pontuação: " + score);
    }
    else {
      score--;
      alert("A resposta correta é Leite, você respondeu: " + response + "\n Sua pontuação: " + score);
    }
  }