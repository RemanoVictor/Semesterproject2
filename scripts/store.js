//players
const playerOne = {
    title: sessionStorage.getItem('playerOne'),
    tileNum: 0,
    turn: true,
    token: sessionStorage.getItem("icon")
};

const playerTwo = {
    title: sessionStorage.getItem('playerTwo'),
    tileNum: 0,
    turn: false,
    token: sessionStorage.getItem("icon2")
};
//traps
const trapOne = {
    tileNum: 5,
    penalty: 3,
    message: " You forgot the map at the camp! move back 3 paces "
}
const trapTwo = {
    tileNum: 12,
    penalty: 4,
    message: " your valerian steel has shattered! move back 4 paces "
}
const trapThree = {
    tileNum: 17,
    penalty: 5,
    message: " A midget carries you 5 paces forward. "
}
const trapFour = {
    tileNum: 24,
    penalty: 2,
    message: " A giant steps on your toe! move back 2 paces "
}
const trapFive = {
    tileNum: 29,
    penalty: 20,
    message: " You attended the Red Wedding. move back 16 paces "
}