/*  see the name 
    see the image 
    see the type
    moves - abilities 

*/
    

document.getElementById("button").addEventListener("click", getfetch)
// Capitalize Function
function capitalizeName(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

// array = data.abilities

function abilityMaker(skillsData){
    const abilityArr = skillsData.abilities // array
    const ul = document.getElementById("abilities")
    ul.innerText = ""
    for (let i = 0; i < abilityArr.length; i++) {
        let li = document.createElement('li')
        ul.appendChild(li).innerText = `Ability ${i+1}: ${abilityArr[i].ability.name}`
    }
}

// Ability i:  limber abilityArr[i].ability.name
//   document.getElementById('type').innerText = `Type: ${capitalizeName(type)}`

// limber => Ability 1: Limber
// innterText = limber 
// innerText = Ability 1: Lim

function getfetch(){
    const userInput = document.querySelector('input').value.toLowerCase()
    const url = `https://pokeapi.co/api/v2/pokemon/${userInput}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        //setting const variable equal to grabbed API data
        const name = data.name
        // slice(startIndex, endIndex) // slice(0,3) Dit does not include the last  
        // slice(1) itto
        // D + itto
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
        /*
        Ability 1 : Limber 
        Ability 2: Imposter 
        */

        //const abilities = data.abilities[0].ability.name
    })
}
















