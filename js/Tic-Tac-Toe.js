const gameArray = new Array(3);

for (let i = 0; i < gameArray.length; i++) {
    gameArray[i] = new Array(3)
}

//initializeGame();
var counter = 0;
var player1Turn = true;
var score = "tie";

for (let i = 0; i < gameArray.length; i++) {
    for (let j = 0; j < gameArray[i].length; j++) {
        gameArray[i][j] = {
            status: "blank"
        }
    }
}


$("#gameBoard").html("")
for (let i = 0; i < gameArray.length; i++) {
    $("#gameBoard").append('<tr id="row' + i + '" >')
    for (let j = 0; j < gameArray[i].length; j++) {
        $("#gameBoard").append('<td><img class="Square" id="rc' + i + '' + j + '" src="img/Blank.png" onclick="play(this.id)"></img></td>')
    }
    $("#gameBoard").append('</tr>')
}

//play function
const play = function (cellId) {
    // extract i j
    let i = cellId.substring(2, 3);
    let j = cellId.substring(3, 4);
    //console.log(gameArray[i][j].status);
    if (gameArray[i][j].status == "blank" ) {
        if (player1Turn) {
            gameArray[i][j].status = "x"
            document.getElementById(cellId).src = 'img/X.png';
            player1Turn = !player1Turn;
        } else {
            gameArray[i][j].status = "o"
            document.getElementById(cellId).src = 'img/O.png';
            player1Turn = !player1Turn;
        }

        isGameOver()
    }
}



const isGameOver = function () {
    //check for row sequence
    var isWin = false;

    for(let i = 0; i < gameArray.length; i++){
        console.log("i: " + i)
        if( gameArray[i][0].status != "blank" 
            && gameArray[i][0].status == gameArray[i][1].status
            && gameArray[i][0].status == gameArray[i][2].status){
            isWin = true;
            console.log("winner: " + gameArray[i][0].status)
            break;
        }

    }


    //check for column sequence
    
    //check for diagonal sequence

    //check for tie
}

