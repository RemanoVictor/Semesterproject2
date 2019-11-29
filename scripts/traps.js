   
   //trap mechanics
   function setTrap(){
    if (playerTurn.tileNum === trapOne.tileNum) {
        alert(trapOne.message);
        playerTurn.tileNum = playerTurn.tileNum - trapOne.penalty;
        document.getElementById("tile" + playerTurn.tileNum).innerHTML = `
            <img src="${playerTurn.token}">
        `;
        
    } else if (playerTurn.tileNum === trapTwo.tileNum) {
        alert(trapTwo.message);
        playerTurn.tileNum = playerTurn.tileNum - trapTwo.penalty;
        document.getElementById("tile" + playerTurn.tileNum).innerHTML = `
            <img src="${playerTurn.token}">
        `;
        
    } else if (playerTurn.tileNum === trapThree.tileNum) {
        alert(trapThree.message);
        playerTurn.tileNum = playerTurn.tileNum + trapThree.penalty;
        document.getElementById("tile" + playerTurn.tileNum).innerHTML = `
            <img src="${playerTurn.token}">
        `;
       
    } else if (playerTurn.tileNum === trapFour.tileNum) {
        alert(trapFour.message);
        playerTurn.tileNum = playerTurn.tileNum - trapFour.penalty;
        document.getElementById("tile" + playerTurn.tileNum).innerHTML = `
            <img src="${playerTurn.token}">
        `;
       
    } else if (playerTurn.tileNum === trapFive.tileNum) {
        alert(trapFive.message);
        playerTurn.tileNum = playerTurn.tileNum - trapFive.penalty;
        document.getElementById("tile" + playerTurn.tileNum).innerHTML = `
            <img src="${playerTurn.token}">
        `;
        
    }
}
setTrap();