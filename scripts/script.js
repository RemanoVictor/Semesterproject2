

fetch ('https://anapioficeandfire.com/api/characters/')

.then ((response)=>{
    
     return response.json();
})

.then((data)=>{
    console.log(data);
    
});