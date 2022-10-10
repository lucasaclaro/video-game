const angryBird = document.querySelector('.angry-bird');
const pipe = document.querySelector('.cano-chao');

function voar() {
    angryBird.classList.add('voar');

    setTimeout(() => {
        angryBird.classList.remove('voar')
    }, 500)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const angryPosition = +window.getComputedStyle(angryBird).bottom.replace('px', '');


    if (pipePosition <= 120 && pipePosition > 0 && angryPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        angryBird.style.animation = 'none';
        angryBird.style.bottom = `${angryPosition}px`;

        angryBird.style.width = '75px'
        angryBird.style.marginLeft = '50px'
    }

},10);


document.addEventListener('keydown', voar)