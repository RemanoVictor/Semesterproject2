document.getElementById('result').innerHTML = sessionStorage.getItem("playerOne");
document.getElementById('player1').innerHTML = `<img src="${sessionStorage.getItem('icon')}">`;
document.getElementById('result2').innerHTML = sessionStorage.getItem("playerTwo");
document.getElementById('player2').innerHTML = `<img src="${sessionStorage.getItem('icon2')}">`;
//Board Game
function rollDice() {
    // defining whos turn it is.
    let playerTurn = {};
    if (playerOne.turn === true) {
        playerTurn = playerOne;
    } else {
        playerTurn = playerTwo
    }
    // if players share a tile    
    if (playerOne.tileNum !== playerTwo.tileNum) {
        document.getElementById('tile' + playerTurn.tileNum).innerHTML = `<p>${playerTurn.tileNum}</p>`;
    } else {
        if (playerOne.turn === true) {
            document.getElementById('tile' + playerTurn.tileNum).innerHTML = `<p>${playerTurn.tileNum}</p>`;
            document.getElementById('tile' + playerTurn.tileNum).innerHTML = `<img src="${playerTwo.token}"/>`;
        } else {
            document.getElementById('tile' + playerTurn.tileNum).innerHTML = `<p>${playerTurn.tileNum}</p>`;
            document.getElementById('tile' + playerTurn.tileNum).innerHTML = `<img src="${playerOne.token}"/>`;
        }
    }
    //dice mechanics
    let diceRoll = (Math.floor(Math.random() * 6) + 1);
    if (diceRoll === 6) {
        document.getElementById('diceNumber').innerHTML = `
         <img src="media/textures/diceroll/${diceRoll}.png">`;
        Swal.fire({
            title: playerTurn.title + ' rolled a six! ',
        })
        playerTurn.tileNum = playerTurn.tileNum + diceRoll;
        rollDice()
    } else {
        document.getElementById('diceNumber').innerHTML = `
         <img src="media/textures/diceroll/${diceRoll}.png">`;
        playerTurn.tileNum = playerTurn.tileNum + diceRoll;
        document.getElementById('tile' + playerTurn.tileNum).innerHTML += `
            <img src="${playerTurn.token}" class="[ animated fadeIn delay-3 ]">
        `;
    }
    //trap mechanics
    function setTrap() {
        switch (playerTurn.tileNum) {
            case trapOne.tileNum:
                document.getElementById("tile" + playerTurn.tileNum).innerHTML += `
                    <img src="${playerTurn.token}">
                `;
                Swal.fire({
                    title: playerTurn.title + ' Landed on a trap! ',
                    text: trapOne.message
                })
                document.getElementById("tile" + playerTurn.tileNum).innerHTML = `<p>${playerTurn.tileNum}</p>`;
                playerTurn.tileNum = playerTurn.tileNum - trapOne.penalty;
                document.getElementById("tile" + playerTurn.tileNum).innerHTML += `
                <img src="${playerTurn.token}" class="[ animated fadeIn delay-3 ]">
            `;
                break;
            case trapTwo.tileNum:
                Swal.fire({
                    title: playerTurn.title + ' Landed on a trap! ',
                    text: trapTwo.message
                })
                document.getElementById("tile" + playerTurn.tileNum).innerHTML = `<p>${playerTurn.tileNum}</p>`;
                playerTurn.tileNum = playerTurn.tileNum - trapTwo.penalty;
                document.getElementById("tile" + playerTurn.tileNum).innerHTML += `
                    <img src="${playerTurn.token}" class="[ animated fadeIn delay-3 ]">
                `;
                break;
            case trapThree.tileNum:
                Swal.fire({
                    title: playerTurn.title + ' Landed on a trap! ',
                    text: trapThree.message
                })
                document.getElementById("tile" + playerTurn.tileNum).innerHTML = `<p>${playerTurn.tileNum}</p>`;
                playerTurn.tileNum = playerTurn.tileNum + trapThree.penalty;
                document.getElementById("tile" + playerTurn.tileNum).innerHTML += `
                    <img src="${playerTurn.token}" class="[ animated fadeIn delay-3 ]">
                `;
                break;
            case trapFour.tileNum:
                Swal.fire({
                    title: playerTurn.title + ' Landed on a trap! ',
                    text: trapFour.message
                })
                document.getElementById("tile" + playerTurn.tileNum).innerHTML = `<p>${playerTurn.tileNum}</p>`;
                playerTurn.tileNum = playerTurn.tileNum - trapFour.penalty;
                document.getElementById("tile" + playerTurn.tileNum).innerHTML += `
                    <img src="${playerTurn.token}" class="[ animated fadeIn delay-3 ]">
                `;
                break;
            case trapFive.tileNum:
                Swal.fire({
                    title: playerTurn.title + ' Landed on a trap! ',
                    text: trapFive.message,
                    imgUrl: playerTurn.token
                })
                document.getElementById("tile" + playerTurn.tileNum).innerHTML = `<p>${playerTurn.tileNum}</p>`;
                playerTurn.tileNum = playerTurn.tileNum - trapFive.penalty;
                document.getElementById("tile" + playerTurn.tileNum).innerHTML += `
                    <img src="${playerTurn.token}" class="[ animated fadeIn delay-3 ]">
                `;
                break;
            default:
        }
    }
    setTrap();
    //define the winner & save data.
    if (playerTurn.tileNum >= 30) {
        Swal.fire({
            title: playerTurn.title + ' is the winner! ',
        })

        if (playerOne.turn === true) {
            sessionStorage.setItem("winnerTitle", playerTurn.title);
            sessionStorage.setItem("winner", 'playerOne');
            window.location = "http://127.0.0.1:5500/winner.html";
        } else {
            sessionStorage.setItem("winnerTitle", playerTurn.title);
            sessionStorage.setItem("winner", 'playerTwo');
            window.location = "http://127.0.0.1:5500/winner.html";
        }

    }
    //Switch players
    if (playerTurn === playerOne) {
        document.getElementById('player2').style.border = "1px solid green";
        document.getElementById('player1').style.border = "none";
        document.getElementById('player1Update').innerHTML = "";
        document.getElementById('player1Update').innerHTML += `<h2> ${playerTurn.title}</h2> <p> ${playerTurn.title} is on tile number:${playerTurn.tileNum}</p>`;
        playerOne.turn = false;
        playerTwo.turn = true;
    } else {
        document.getElementById('player1').style.border = "1px solid green";
        document.getElementById('player2').style.border = "none";
        document.getElementById('player2Update').innerHTML = "";
        document.getElementById('player2Update').innerHTML += `<h2> ${playerTurn.title}</h2> <p> ${playerTurn.title} is on tile number:${playerTurn.tileNum}</p>`;
        playerTwo.turn = false;
        playerOne.turn = true;
    }
}