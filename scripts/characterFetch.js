sessionStorage.clear();

// When the user clicks on the button, open the modal
var modal = document.getElementById("myModal");


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function openModal() {
  modal.style.display = "block";
}

//fetch statement to get character details
function callApi(name, id) {
  openModal()
  fetch('https://anapioficeandfire.com/api/characters/' + id)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("card").innerHTML = `
                <div class="[ card--body ]" id="cardBody">
                    <h3>Name: ${data.name}</h3>
                    <p>Gender: ${data.gender}</p>
                    <p>Alias: ${data.aliases[0]}</p>
                    <p>Date Of Birth: ${data.born}</p>
                    <button class="[ card--button ]" onclick="saveChar('${name}')">Select Character</button>
                </div>
            `
    });
}