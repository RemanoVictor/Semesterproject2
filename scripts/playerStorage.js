let count = 0;

function saveChar(name) {
    closeModal();
    if (count === 0) {
        document.getElementById('iconSelector').innerHTML="PLAYER 2: Click an icon to select a character ";
        sessionStorage.setItem("playerOne", name);
        sessionStorage.setItem("icon", '/media/tokens/' + name + '.svg');
        document.getElementById(name).setAttribute("class", "[ animated flipOutY ]");
        count++;
    } else {        
        sessionStorage.setItem("playerTwo", name)
        sessionStorage.setItem("icon2", "/media/tokens/" + name + '.svg');
        if (count === 1) {
            window.location = "http://127.0.0.1:5500/boardgame.html";
        }
    }
}
