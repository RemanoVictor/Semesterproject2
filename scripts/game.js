//Board Game


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


//Players
let player1={
    position:0,
    turn:true
};

let player2={
    position:0,
    turn:false
};

