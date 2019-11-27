const playerOne={
    tileNum:0,
    turn:true,
    token:sessionStorage.getItem("icon"),
    test:'play1'    
};

const playerTwo={    
    tileNum:0,
    turn:false,
    token:sessionStorage.getItem("icon2"),
    test:'play2'    
};
           
//trap declaration
const trapOne={
    tileNum:5,
    penalty:3,
    message:" You stepped on a lego, move back 3 spaces "
}
const trapTwo={
    tileNum:12,
    penalty:4,
    message:" Seriously dude, wtf "
}
const trapThree={
    tileNum:17,
    penalty:5,
    message:" A midget carries you a few steps, Move forward 6 steps "
}
const trapFour={
    tileNum:24,
    penalty:2,
    message:" Dragon steps on yout toe, move back 2 spaces "
}
const trapFive={
    tileNum:29,
    penalty:10,
    message:" aaaah, so close! buht bye bye "
}



// what is token here?
//token here is a random picture i got off the net for test purposes
// so why dont you store your icon in the token?
//how do i call it? using playerTwo.token? 
// exactly or playerOne.token back to game
//okay, but saving that to local storage( window.localStorage.setItem('playerOne', 'jon'))?
//no you making kak, Ill kill you
// You only need the name you dont need an image path
//playerOne.token = 'media/tokens/'localStorage.getItem('playerOne')+'jpg'
// Ill stab you
// its so fucken easy I mean you know this shit
//aaaaaaaaaah!!!
//that is some complicated shit! youve been doing this for years!
// dont you know how to join strings?????????? YES YES Yes
//i dont know why you must go so on....
// because Im telling you the same shit over and over again. You owe me troika. This is like a labola negotiation you must pay to
//whats your price 5 troika to speak to me and since this was a dumb question which you knew the answer to another 20
//5!?yay, atleast i came with a solution THAT WORKED!! It worked but was it the best?
//we not talking about the best, i didnt come empty handed! thas what counts. and thats me keeping a promise i made to you when we started!
// you cam without troika thats as empty handed as you can get
//this is a crime! 
// life is a crime. The rich get richer, the poorer get poorer get poorer and developers are ass raped all the time//
//geezus! all i wanted was a nice teacher, now i get someone who wants to rob me
// thats how I roll
// but back to the important stuff, okay, so its just calling it by name and then accessing the token through there
// ill get you your damn troikas
//you going to spy on me now?