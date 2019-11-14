

function callApi(name,id){

    console.log(name+"     "+id);

fetch ('https://cors-anywhere.herokuapp.com/https://anapioficeandfire.com/api/characters/' + id)

.then ((response)=>{   
     return response.json();
     
})

.then((data)=>{
    //console.log(data);
    let gender = document.getElementById('cardGender' + name);
    let aka = document.getElementById('cardAlias'+ name);

    gender.innerHTML += data.gender;
    aka.innerHTML = data.aliases[0];
    
    
    console.log(data.aliases);
});
}


//dice roll

//const btn = document.getElementById("showModal");


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
    close.onclick = function() {
        modal.style.display = "none";
      };
    modal.style.display = "none";
}

}




  
