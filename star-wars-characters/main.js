import { people } from '../data/people.js'



// CONNECT TO HTML PAGE
const mainContent = document.querySelector('main')

populateDOM(people)


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



// PULLS THE GENDERS FROM THE PEOPLE LIST
const maleCharacters = people.filter( person => person.gender === 'male');

const femaleCharacters = people.filter( person => person.gender === 'female');

const otherCharacters = people.filter( person => {
    if (person.gender === 'n/a' || 
        person.gender === 'none' ||
        person.gender ==='hermaphrodite') {
        return person
    }
})




// BEGIN FUNCTION THAT PULLS GENDERS ON CLICK
maleButton.addEventListener('click', () => {populateDOM(maleCharacters)})

femaleButton.addEventListener('click', () => {populateDOM(femaleCharacters)})

otherButton.addEventListener('click', () => {populateDOM(otherCharacters)})



//GRABS THE NUMBER TO THE CORRESPONDING PICTURE
function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) === '/') {
        start++
    }

    return url.slice(start, end)
}



//CREATES IMAGE ELEMENT WITH CORRECT CAPTION AND IMAGE
function populateDOM(characters) {
    removeChildren(mainContent)
    characters.forEach(element => {

        const charFigure = document.createElement('figure')
        let charNum = getLastNumber(element.url)
    
        const charImg = document.createElement('img')
        charImg.src = 'https://starwars-visualguide.com/assets/img/characters/' + charNum + '.jpg'
        charImg.addEventListener('error', () => charImg.hidden = true) //genius level)
    
        const charCaption = document.createElement('figcaption')
        charCaption.textContent = element.name
    
        charFigure.appendChild(charImg)
        charFigure.appendChild(charCaption)
    
        mainContent.appendChild(charFigure)
    
        })

}


//THIS FUNCTION REMOVES THE CHILDREN SO WE CAN REPOPULATE
function removeChildren(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}










/* TO COMMENT MULTIPLE LINES:
    ALT + SHIFT A */