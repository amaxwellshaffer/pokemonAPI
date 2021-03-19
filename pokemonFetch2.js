const cards = document.querySelectorAll('ul');

console.log(cards);


for (i = 0; i<6; i++){ 
    let randomMon = Math.floor((Math.random() * 151) +1);
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomMon}`)
        .then(function(response){
            return response.json();
        })
            .then(function(json){
                console.log(json);
               // let chosenTeam = json.results;
               console.log(json.name);
                
               let level = Math.floor((Math.random() * 100) +1);
               let sprite = json.sprites.front_default;
               let listItem = document.createElement('li');   
                listItem.innerHTML = `<img src="${sprite}"><h4>${json.name}</h4><p>Level ${level}</p>`;   
                document.getElementById('teamList').appendChild(listItem);       
            


            })
        }