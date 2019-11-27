let count = 0;


//  function saveChar(title) {
  
//     let chosen = false;

//     // Saving the value of the cards into session storage
//     // Making two players that is set to false. When selected is turns into true
//     // if the character is selected then it changes player two to true. 
//       //let name = ["player1", "player2"];
//       if (chosen === false) {
//         window.sessionStorage.setItem("playerOne", title );
//         window.sessionStorage.setItem("icon",'media/tokens/'+ title +'.svg');
//         //sessionStorage.setItem(name[0], title);
//         chosen = true;
//       }
//       else {
//         window.sessionStorage.setItem("playerTwo",title);        
//         window.sessionStorage.setItem("icon2","media/tokens/"+title+'svg');
//         //sessionStorage.setItem(name[1], );
//       }


//  /*if (typeof (Storage) !== "undefined") {
//     window.sessionStorage.setItem("playerOne", title );
//     window.sessionStorage.setItem("icon",'media/tokens/'+ title +'.svg');
    
// } else {
//     document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
// }*/

// }


function saveChar(name){

    console.log("I work")

    if(count === 0){
        console.log("In if")
        localStorage.setItem("PlayerOne", name)
        count ++;
    }
    else{
        console.log("In else")
        localStorage.setItem("PlayerTwo", name)
        // redirect to new page goes here
    }
}
