import { people } from '../data/people.js'
import { removeChildren,getLastNumber, getRandomPosition, addStarField } from '../utils/index.js'



// CONNECT TO HTML PAGE
const mainContent = document.querySelector('main')
const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const anchorWrap = document.querySelector('a')

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
maleButton.addEventListener('click', () => {populateDOM(maleCharacters), 
    maleButton.style.backgroundColor = "gray", 
    femaleButton.style.backgroundColor = "black",
    otherButton.style.backgroundColor = "black"})


femaleButton.addEventListener('click', () => {populateDOM(femaleCharacters)
    maleButton.style.backgroundColor = "black", 
    femaleButton.style.backgroundColor = "gray",
    otherButton.style.backgroundColor = "black"})

otherButton.addEventListener('click', () => {populateDOM(otherCharacters)
    maleButton.style.backgroundColor = "black", 
    femaleButton.style.backgroundColor = "black",
    otherButton.style.backgroundColor = "gray"})



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

addStarField(document.querySelector('body'), 1000)








/* TO COMMENT MULTIPLE LINES:
    ALT + SHIFT A */