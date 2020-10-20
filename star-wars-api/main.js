import { films } from './data/films.js'
import { people } from './data/people.js'

const main = document.querySelector('main')

films.forEach(film => {
    console.log(film.title)
    let newTitle = main.appendChild(document.createElement("h1"))
    newTitle.textContent = film.title;
}) 

people.forEach(person => {
    console.log(person.name)
    let personImg = document.createdElement('img')
    personImg.src = "https://starwars-visualguide.com/assets/img/characters/10.jpg"
    main.appendChild(personImg)
})