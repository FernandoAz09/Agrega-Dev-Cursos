const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

//  ABRIR MODAL E TROCAR O ID

for (let card of cards) {
    card.addEventListener('click', function () {
        const listId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${listId}`
    })
}


// FECHAR MODAL

document.querySelector(".close-modal").addEventListener('click', function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ""
})
