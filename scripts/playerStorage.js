let count = 0;
function saveChar(name){
    if(count === 0){
        console.log("In if")
        sessionStorage.setItem("playerOne", name);
        sessionStorage.setItem("icon",'/media/tokens/'+ name +'.svg');        
        count ++;
    }
    else{
        console.log("In else")
        sessionStorage.setItem("playerTwo", name)
        sessionStorage.setItem("icon2","/media/tokens/"+name+'.svg');        
        // redirect to new page goes here
        if(count===1){
            window.location = "http://127.0.0.1:5500/boardgame.html";
        }
        
    }
}
