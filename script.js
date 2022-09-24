const poke = document.querySelector('.poke');
const pipe = document.querySelector('.pipe');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const jump = () => {
    poke.classList.add('jump');

    setTimeout(() => {
        poke.classList.remove('jump');
    }, 500);
}

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');
 
      clearInterval(this.loop);
      alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML}`);
  }

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const pokePosition = +window.getComputedStyle(poke).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && pokePosition < 114){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        poke.style.animation = 'none';
        poke.style.bottom = `${pokePosition}px`;

        poke.src = './imagens/game-over.png'
        poke.style.width = '75px'
        poke.style.marginLeft = '50px'

        clearInterval(this.parar);

        checkEndGame();

        window.location.href = "login.html";

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);

const startTimer = () => {
    this.parar = setInterval(() => {

        currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime +5;

    }, 1000);
}

window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem('jogador');
    startTimer();
}
