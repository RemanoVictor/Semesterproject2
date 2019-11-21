function saveChar(title) {
    if (typeof (Storage) !== "undefined") {
        // Store
        //console.log(dataArray);
        localStorage.setItem("player",title);
        // Retrieve
        //document.getElementById("result").innerHTML = localStorage.getItem("lastname");
    } else {
        //document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }

} 