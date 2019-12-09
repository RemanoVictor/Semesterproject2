let winnerBanner = document.getElementById('winnerBanner');

winnerBanner.innerHTML=`
<div class="winnerToken">
<img src="${playerTurn.token}">
</div>
<div class="winnerDetails">
<h2> ${playerTurn.title}</h2>
</div>`


document.getElementById('winnerToken').innerHTML=`
<img src="${playerTurn.token}">`;

document.getElementById('winnerDetails').innerHTML=`
<h2>${playerTurn.title}</h2>`;

