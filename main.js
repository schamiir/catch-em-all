/*  see the name 
    see the image 
    see the type
    moves - abilities 

*/
    

document.getElementById("button").addEventListener("click", getfetch)
// Capitalize Function
function capitalizeName() {
   // create a function that capitalizes a string - we want to make our pokemon names and other contents capitalized! 
}

// at - s


// array = data.abilities

function abilityMaker(){
    // create a function that creates a list of abilities. The length of the list will be dependent on the pokemon! 
    // and display it on the dom - --
}

// Ability i:  limber abilityArr[i].ability.name
//   document.getElementById('type').innerText = `Type: ${capitalizeName(type)}`

// limber => Ability 1: Limber
// Ability 1: Lim

function getfetch(){
    const userInput = document.querySelector('input').value.toLowerCase()
    const url = `https://pokeapi.co/api/v2/pokemon/${userInput}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const name = data.name
        const type = data.types[0].type.name  
        
        const image = data.sprites.other["official-artwork"]["front_default"]    

        const abilities = data.abilities[0].ability.name
        
        // array = data.abilities 
        //for loop 

        // innerText = ability.name
      
        // Display On the DOM
        document.getElementById('name').innerText = `Name: ${capitalizeName(name)}`
        document.getElementById('type').innerText = `Type: ${capitalizeName(type)}`
        document.querySelector('img').src = image
        
        abilityMaker(data)
    })
}
















