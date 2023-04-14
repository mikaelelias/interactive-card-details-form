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
