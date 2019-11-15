




//fetch statement to get character details

function callApi(name,id){

    console.log(name+"     "+id);

fetch ('https://anapioficeandfire.com/api/characters/' + id)
.then ((response)=>{return response.json();})
.then((data)=>{
    document.getElementById("card"+name).innerHTML+=`
        <div class="[ card--body ]">
            <p>Gender: ${data.gender}</p>
            <p>Alias: ${data.aliases[0]}</p>
            <p>Date Of Birth: ${data.born}</p>
        </div>
    `
    console.log(data);
});
}








  
