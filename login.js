 const input = document.querySelector('.login-input');
 const senha = document.querySelector('.login-senha');
 const button = document.querySelector('.login-button');
 const form = document.querySelector('.form');
 const handleSubmit = (event) => {
     event.preventDefault();
     localStorage.setItem('jogador', input.value);
     window.location = 'index.html';
 }
 senha.addEventListener('input', validateInput);
 form.addEventListener('submit', handleSubmit);