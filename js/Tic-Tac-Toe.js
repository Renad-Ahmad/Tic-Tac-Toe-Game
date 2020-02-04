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
    if (gameArray[i][j].status == "blank") {
        if (player1Turn) {
            gameArray[i][j].status = "x"
            document.getElementById(cellId).src = 'img/X.png';
            player1Turn = !player1Turn;
        } else {
            gameArray[i][j].status = "o"
            document.getElementById(cellId).src = 'img/O.png';
            player1Turn = !player1Turn;
        }
        counter++;
        isGameOver()
    }
}



const isGameOver = function () {
    //check for row sequence
    var isWin = false;

    for (let i = 0; i < gameArray.length; i++) {
        //console.log("i: " + i)
        if (gameArray[i][0].status != "blank" &&
            gameArray[i][0].status == gameArray[i][1].status &&
            gameArray[i][0].status == gameArray[i][2].status) {
            isWin = true;
            console.log("winner: " + gameArray[i][0].status)
            //alert("winner: " + gameArray[i][0].status)
            break;
        }

    }


    //check for column sequence
    for (let j = 0; j < gameArray.length; j++) {
        //console.log("j: " + j)
        if (gameArray[0][j].status != "blank" &&
            gameArray[0][j].status == gameArray[1][j].status &&
            gameArray[0][j].status == gameArray[2][j].status) {
            isWin = true;
            console.log("winner: " + gameArray[0][j].status)
            //alert("winner: " + gameArray[0][j].status)
            break;
        }

    }

    //check for diagonal sequence
    for (let i = 0; i < gameArray.length; i++) {
        for (let j = 0; j < gameArray[i].length; j++) {
            if (gameArray[0][0].status != "blank" &&
                gameArray[0][0].status == gameArray[1][1].status &&
                gameArray[0][0].status == gameArray[2][2].status) {
                isWin = true;
                console.log("winner: " + gameArray[0][0].status)
                //alert("winner: " + gameArray[0][0].status)
                break;
            }

        }
    }

    for (let i = 0; i < gameArray.length; i++) {
        for (let j = 0; j < gameArray[i].length; j++) {
            if (gameArray[2][0].status != "blank" &&
                gameArray[2][0].status == gameArray[1][1].status &&
                gameArray[2][0].status == gameArray[0][2].status) {
                isWin = true;
                console.log("winner: " + gameArray[2][0].status)
                //alert("winner: " + gameArray[2][0].status)
                break;
            }

        }
    }
    //check for tie
    if (counter >= 9) {
        isWin = false;
        console.log("winner: " + score)
    }

}