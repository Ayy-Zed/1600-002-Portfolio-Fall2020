import { getRandomPosition, addStarField } from './utils/index.js'

const charTab = document.querySelector('.characters')
const filmsTab = document.querySelector('.films')
const starshipsTab = document.querySelector('.starships')
const info = document.querySelector('.mainPageInfo')

const mainFrame = document.querySelector('.mainFrame')


charTab.addEventListener('click', () => {
    charTab.classList.add("is-active")
    filmsTab.classList.remove("is-active")
    starshipsTab.classList.remove("is-active")
    info.remove()

    mainFrame.src = "./star-wars-characters/index.html"
})

filmsTab.addEventListener('click', () => {
    charTab.classList.remove("is-active")
    filmsTab.classList.add("is-active")
    starshipsTab.classList.remove("is-active")
    info.remove()

    mainFrame.src = "./star-wars-films/index.html"
})

starshipsTab.addEventListener('click', () => {
    charTab.classList.remove("is-active")
    filmsTab.classList.remove("is-active")
    starshipsTab.classList.add("is-active")
    info.remove()

    mainFrame.src = "./starships?index.html"
})


addStarField(document.querySelector('body'), 1000)