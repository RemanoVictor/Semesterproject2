//fetch statement to get character details
let dataArray={}

function callApi(name, id) {
    fetch('https://anapioficeandfire.com/api/characters/' + id)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            dataArray = data;
            console.log(dataArray);
            document.getElementById("card" + name).innerHTML += `
                <div class="[ card--body ]">
                    <h3>Name: ${data.name}</h3>
                    <p>Gender: ${data.gender}</p>
                    <p>Alias: ${data.aliases[0]}</p>
                    <p>Date Of Birth: ${data.born}</p>
                </div>
            `
        });

        
            
        
}
