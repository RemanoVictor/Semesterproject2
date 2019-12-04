//players
const playerOne={
    title:sessionStorage.getItem('playerOne'),
    tileNum:0,
    turn:true,
    token:sessionStorage.getItem("icon")
};

const playerTwo={
    title:sessionStorage.getItem('playerTwo'),
    tileNum:0,
    turn:false,
    token:sessionStorage.getItem("icon2")
};
//traps
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
    message:" A midget carries you 5 steps forward "
}
const trapFour={
    tileNum:24,
    penalty:2,
    message:" Dragon steps on your toe, move back 2 spaces "
}
const trapFive={
    tileNum:29,
    penalty:10,
    message:" aaaah, so close! buht bye bye "
}