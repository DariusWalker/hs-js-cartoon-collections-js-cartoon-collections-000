dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"]
planeteerCalls = ["earth", "wind", "fire", "water", "heart"]




function dwarfRollCall(dwarves) {
  let orderedDwarves= []
  for (let i = 0; i < dwarves.length; i++){
    orderedDwarves.push(`${i+1}. ${dwarves[i]} `)  
}
return orderedDwarves.join("")

}



function summonCaptainPlanet(planeteerCalls){
return planeteerCalls.map(a=>a.toUpperCase()+"!")
 
}



function longPlaneteerCalls(words) {
  for(let i = 0; i < words.length; i++){
    if(words[i].length>4)
    {return true}
else{return false}
}
}


function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++){
    if (foods[i] === 'gouda' || foods[i]=== 'cheddar' || foods[i] ==='camembert') {
      return foods[i];
    }
  }
  {return 'no cheese!'}
}

    
