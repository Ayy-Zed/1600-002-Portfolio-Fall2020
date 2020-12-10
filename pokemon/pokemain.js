const pokeGrid = document.querySelector('.pokemonGrid')
const loadButton = document.querySelector('.load')
const newPokemonButton = document.querySelector('.reRoll')

// Reusable async function to fetch data from the provided url
async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

//now, use the async getAPIData function
function loadPage(data) {
    getAPIData("https://pokeapi.co/api/v2/pokemon").then
        (async (data) => {
            for (const pokemon of data.results) {
                await getAPIData(pokemon.url).then((pokeData) => {
                    populatePokeCard(pokeData)
                })
                
            }
        })
}


loadButton.addEventListener('click', () => {
    loadPage()
    loadButton.disabled=true
})

newPokemonButton.addEventListener('click', () => {
    let pokeName = prompt("What is your new Pokemon name?")
    let newPokemon = new Pokemon(
        pokeName,
        400,
        200,
        ['fly', 'skate', 'eat'],
        ['gam', 'study', 'code'])
        populatePokeCard(newPokemon)

})


function populatePokeCard(singlePokemon) {

    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'

    pokeCard.addEventListener( 'click', function() {
        pokeCard.classList.toggle('is-flipped')
    })

    pokeCard.appendChild(populateCardFront(singlePokemon))
    pokeCard.appendChild(populateCardBack(singlePokemon))
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}

function populateCardBack(pokemon) {
    let pokeBack=document.createElement('div')
    pokeBack.className = 'card__face card__face--back'

    let attackMoves = document.createElement('p')

    attackMoves.textContent = `${pokemon.name} has ${pokemon.moves.length} moves and weighs ${pokemon.weight} pounds!`

    attackMoves.addEventListener('click', () => getMovesDetails(pokemon.moves))
    pokeBack.appendChild(attackMoves)


    return pokeBack
}

function getMovesDetails(pokemonMoves) {
    const nonNullMoves = pokemonMoves.filter(async (move) => {
        if(!move.move.url) return
        const moveData = await getAPIData(move.move.url)
        console.log(moveData.accuracy, moveData.power)
        if ((moveData.accuracy && moveData.power) !== null) {
            console.log(moveData)
        }
     })
     console.log(nonNullMoves.length)
    }

function populateCardFront(pokemon) {
    let pokeFront = document.createElement('div')
    pokeFront.className = 'card__face card__face--front'
    let frontLabel = document.createElement('p')
    frontLabel.textContent = pokemon.name
    let frontImage = document.createElement('img')
    frontImage.src = `../images/pokemon/${getImageFileName(pokemon)}.png`
    pokeFront.appendChild(frontImage)
    pokeFront.appendChild(frontLabel)
    return pokeFront
}

function getImageFileName(pokemon) {
    if (pokemon.id < 10) {
        return `00${pokemon.id}`
    } else if (pokemon.id > 9 && pokemon.id < 100) {
        return `0${pokemon.id}`
    } else if (pokemon.id > 99 && pokemon.id < 810) {
        return `${pokemon.id}`
    }

    return `pokeball`
}


function Pokemon(name, height, weight, abilities, moves) {
    this.name = name
    this.height = height
    this.weight = weight
    this.abilities = abilities
    this.id = 900
    this.moves = moves
}

