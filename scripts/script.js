
function callApi(){
fetch ('https://anapioficeandfire.com/api/characters/')

.then ((response)=>{
    
     return response.json();
})

.then((data)=>{
    console.log(data);
    
});
}

//dice roll

function rollDice(){

let max = 6;

let roll = Math.ceil(Math.random()*max);
console.log("you rolled a " + roll+"!");

let rollOutput = document.getElementById("rollOutput");

rollOutput.innerHTML = " You rolled a " + roll+ " !"; 

if(roll == 6 ){
    alert("Well Done, have another go!");
}

else{
    document.getElementById("alert").innerHTML="";
}

}