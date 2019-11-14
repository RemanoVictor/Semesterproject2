

function callApi(name,id){

    console.log(name+"     "+id);

fetch ('https://anapioficeandfire.com/api/characters/' + id)

.then ((response)=>{   
     return response.json();
     
})

.then((data)=>{
    let card = document.getElementById('card'+name);
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

//const btn = document.getElementById("showModal");


function rollDice(){

const modal = document.getElementById("modalPopUp");
let close = document.getElementsByClassName("close")[0];

let rollOutput = document.getElementById("rollOutput");

//let roll = Math.ceil(Math.random()*max);
let roll = (Math.floor(Math.random() * 6) + 1);
console.log("you rolled a " + roll+"!");

rollOutput.innerHTML = " You rolled a " + roll+ " !"; 

close.onclick = function() {
modal.style.display = "none";
}

if(roll == 6 ){

    modal.style.display = "block";
      
    //document.getElementById("alert").innerHTML="The Gods have smiled upon your fortune! Have another go";
}

else{
        modal.style.display = "none";
    };
    


}




  
