import { people } from '../data/people.js'

// CONNECT TO HTML PAGE
const mainContent = document.querySelector('main')

// BEGIN CREATING MAIN HEADER FOR PAGE
const mainHeader = document.createElement('header')
mainHeader.className = 'mainHeader'
document.body.insertBefore(mainHeader, mainContent)

// BEGIN CREATING BUTTONS FOR FILTERING
const maleButton = document.createElement('button')
maleButton.textContent =  "Male Characters"
mainHeader.appendChild(maleButton)

const femaleButton = document.createElement('button')
femaleButton.textContent = "Female Characters"
mainHeader.appendChild(femaleButton)

const otherButton = document.createElement('button')
otherButton.textContent = "Other Characters"
mainHeader.appendChild(otherButton)



// PULLS THE MALES FROM THE PEOPLE LIST
const maleCharacters = people.filter( person => person.gender === 'male');


// BEGIN FUNCTION THAT PULLS MALES ON CLICK
maleButton.addEventListener('click', () => {
    maleCharacters.forEach(element => {

    const charFigure = document.createElement('figure')

    const charImg = document.createElement('img')
    charImg.src = 'https://starwars-visualguide.com/assets/img/characters/' + element.img + '.jpg'

    const charCaption = document.createElement('figcaption')
    charCaption.textContent = element.name

    charFigure.appendChild(charImg)
    charFigure.appendChild(charCaption)

    mainContent.appendChild(charFigure)

    })
})

let theURL = "https://swapi.co/api/people/1/"

function getLastNumber(url) {
    console.log(url)
}

getLastNumber(theURL);



`https://starwars-visualguide.com/assets/img/characters/1.jpg`