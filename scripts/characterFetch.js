sessionStorage.clear();
const modal = document.getElementById("characterModal");
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
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
            <h2 class="[ playerName ]">Name: ${data.name}</h2>
            <p>Gender: ${data.gender}</p>
            <p>Alias: ${data.aliases[0]}</p>
            <p>Date Of Birth: ${data.born}</p>
            <button class="[ card--button ]" onclick="saveChar('${name}')">Select Character</button>
        </div>
    `
    });
}