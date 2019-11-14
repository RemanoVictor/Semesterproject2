


//fetch statement to get character details

function callApi(name,id){

    console.log(name+"     "+id);

fetch ('https://anapioficeandfire.com/api/characters/' + id)

.then ((response)=>{return response.json();})
.then((data)=>{
    let card = document.getElementById('card' + name);
    card.innerHTML+=`
        <div class="[ card--body ]">
            <p>Gender: ${data.gender}</p>
            <p>Alias: ${data.aliases[0]}</p>
            <p>Date Of Birth: ${data.born}</p>
        </div>
    `
    console.log(data);
});
}



//dice roll

function rollDice(){

let rollOutput = document.getElementById("rollOutput");

//let roll = Math.ceil(Math.random()*max);
let roll = (Math.floor(Math.random() * 6) + 1);
console.log("you rolled a " + roll+"!");

rollOutput.innerHTML = " You rolled a " + roll+ " !"; 

if(roll == 6 ){
      
    document.getElementById("alert").innerHTML="The Gods have smiled upon your fortune! Have another go";
}
}




  
