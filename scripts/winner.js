const winnerToken = document.getElementById('winnerToken');
const winnerDetails = document.getElementById('winnerDetails');
const winnerDescription = document.getElementById('winnerDescription');

winnerToken.innerHTML+=`
<img src="media/tokens/${sessionStorage.getItem("winnerName")}.svg">`;

winnerDescription.innerHTML = `
<p> And so, as the dust settled on the battlefield, one person stood victorious amongst the carnage. ${sessionStorage.getItem('winnerName')} has, against all odds, claimed The Iron Throne.
`;

winnerDetails.innerHTML=`
<h3> Congratulations ${sessionStorage.getItem('winnerName')}</h3>
`;