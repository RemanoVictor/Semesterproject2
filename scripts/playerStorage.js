 function saveChar(title) {
    if (typeof (Storage) !== "undefined") {
        window.sessionStorage.setItem("playerOne",title);
        window.sessionStorage.setItem('src','media/tokens/'+title+'.svg')
        //window.sessionStorage.setItem("src",title +'.svg');
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }

 } 


 