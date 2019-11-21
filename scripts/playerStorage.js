function saveChar(title) {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("player",title);
        //document.getElementById("result").innerHTML = localStorage.getItem("lastname");
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }

} 