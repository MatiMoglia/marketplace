


const btnCart = document.querySelector('.conteinericon')

const conteinercarrito = document.querySelector('.conteinercarrito')

btnCart.addEventListener('click', () => {
    conteinercarrito.classList.toggle('hiddencarrito')
})