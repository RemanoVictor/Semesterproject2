const winnerToken = document.getElementById('winnerToken');
const winnerDetails = document.getElementById('winnerDetails');
const winnerDescription = document.getElementById('winnerDescription');

winnerDetails.innerHTML = `
<h2> ...Congratulations ${sessionStorage.getItem('winnerTitle')}...</h2>
`;
winnerToken.innerHTML += `
<img src="media/tokens/${sessionStorage.getItem("winnerTitle")}.svg">`;
winnerDescription.innerHTML = `
<p> And so, as the dust settled on the battlefield, one warrior stood victorious amongst the carnage. ${sessionStorage.getItem('winnerTitle')}, against all odds, has claimed The Delicious Scone.
`;