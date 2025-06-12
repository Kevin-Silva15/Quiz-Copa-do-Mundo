 const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  // document.getElementById('prevBtn').addEventListener('click', () => {
  //   currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  //   showSlide(currentIndex);
  // });

  document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  //-------------PEGAR OS DADOS CERTOS X ERRADOS
  document.getElementById('formRadio').addEventListener('submit', function(event) {
  event.preventDefault();

const respostas = [];
const totalPerguntas = 10;

for (let i = 1; i <= totalPerguntas; i++) {
    const selecionado = document.querySelector(`input[name="pq${i}"]:checked`);
    if (selecionado) {
      respostas.push(selecionado.value);
    } else {
      respostas.push(null);
    }
  }
console.log(respostas);

  const acertos = respostas.filter(letra => letra === 'c').length;

  console.log(acertos);

  if (acertos >= 1 && acertos <= 3) {
      document.getElementById('frase').innerHTML = "Xiiii! Tá precisando faltar na escola pra estudar!";
    } else if (acertos >= 4 && acertos <= 7) {
      document.getElementById('frase').innerHTML = "Ééé, até que foi bem!";
    } else if (acertos >= 8) {
      document.getElementById('frase').innerHTML = "Parabéns, foi muito bem! Mas que tal parar de assistir futebol e ir ter uma vida social?";
    } else {
      document.getElementById('frase').innerHTML = "----------------";
    }

   
   
});
 






