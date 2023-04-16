// seleciona o elemento do formulário
const form = document.querySelector('.form');

// adiciona um evento ao formulário para o evento de envio
form.addEventListener('submit', function(event) {
  // previne o envio padrão do formulário
  event.preventDefault();
  
  // seleciona os campos de entrada do formulário
  const cardNumber = document.querySelector('#cardNumber');
  const cardName = document.querySelector('#cardName');
  const expiryDate = document.querySelector('#expiryDate');
  const cvv = document.querySelector('#cvv');
  
  // verifica se os campos são válidos
  if (cardNumber.checkValidity() && cardName.checkValidity() && expiryDate.checkValidity() && cvv.checkValidity()) {
    // exibe a mensagem de validação
    const message = document.createElement('div');
    message.textContent = 'Dados recebidos';
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.backgroundColor = 'white';
    message.style.padding = '20px';
    message.style.borderRadius = '10px';

    document.body.appendChild(message);
    
    // limpa os campos 
    form.reset();
  }
})

const input1 = document.getElementById('cardNumber');
const texto = document.getElementById('texto1');

input1.addEventListener('input', () => {
  texto.innerText = input1.value;
});

const input2 = document.getElementById('cardName');
const texto2 = document.getElementById('texto2');

input2.addEventListener('input', () => { //TEM QUE TROCAR O TEXTO INNERTEXT
  texto2.innerText = input2.value;
});

const input3 = document.getElementById('expiryDate');
const texto3 = document.getElementById('texto3');

input3.addEventListener('input', () => { //TEM QUE TROCAR O TEXTO INNERTEXT
  texto3.innerText = input3.value;
});

const input4 = document.getElementById('cvv');
const texto4 = document.getElementById('texto4');

input4.addEventListener('input', () => { //TEM QUE TROCAR O TEXTO INNERTEXT
  texto4.innerText = input4.value;
});



