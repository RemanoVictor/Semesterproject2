const playerOne={
    tileNum:0,
    turn:true,
    token:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3f2rl4ga6_NOJ5i7fZ-sebBe64iDlxuEFCR071x0fYLgSbGeX&s',
    test:'play1'    
};

const playerTwo={    
    tileNum:0,
    turn:false,
    token:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYj7gZpmsyyv-KSPy1zWVvXGvyjAlu-QFqaNUE1jwBRbNXThG3&s',
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
    tileNum:(Math.floor(Math.random() * 6) + 1),
    penalty:10,
    message:" aaaah, so close! buht bye bye "
}
