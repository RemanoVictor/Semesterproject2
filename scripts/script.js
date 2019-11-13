

function callApi(id){
fetch ('https://cors-anywhere.herokuapp.com/https://anapioficeandfire.com/api/characters/' + id)

.then ((response)=>{
    
     return response.json();
})

.then((data)=>{
    console.log(data)
    
    

});
}

// Jon snow id=583

// Tyrion lannister 1052

// The mountain 1442

// Euron greyjoy 385

// Tormund giantsbane 2024

// arya stark 148

// daenarys targaryen 271

// brienne of tarth 216

// samwell tarly 954

// grey worm 1445



//const btn = document.getElementById("showModal");







//dice roll

function rollDice(){

const modal = document.getElementById("modalPopUp");
let close = document.getElementsByClassName("close")[0];

let rollOutput = document.getElementById("rollOutput");
let max = 6;

let roll = Math.ceil(Math.random()*max);
console.log("you rolled a " + roll+"!");
rollOutput.innerHTML = " You rolled a " + roll+ " !"; 

if(roll == 6 ){

        modal.style.display = "block";
      
    //document.getElementById("alert").innerHTML="The Gods have smiled upon your fortune! Have another go";
}

else{
    //document.getElementById("alert").innerHTML="";
    close.onclick = function() {
        modal.style.display = "none";
      };
    modal.style.display = "none";
}

}




  
