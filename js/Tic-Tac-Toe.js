//initial setup
const gameArray = new Array(3);

for (let i = 0; i < gameArray.length; i++) {
    gameArray[i] = new Array(3)
}

var counter = 0;
var player1Turn = true;
var isGameOver = false;
var score = null;

const initializeGame = function () {
    counter = 0;
    player1Turn = true;
    isGameOver = false;
    score = null;

    for (let i = 0; i < gameArray.length; i++) {
        for (let j = 0; j < gameArray[i].length; j++) {
            gameArray[i][j] = {
                status: "blank"
            }
        }
    }
    //creating the table
    $("#gameBoard").html("")
    for (let i = 0; i < gameArray.length; i++) {
        $("#gameBoard").append('<tr id="row' + i + '" >')
        for (let j = 0; j < gameArray[i].length; j++) {
            $("#gameBoard").append('<td><img class="Square" id="rc' + i + '' + j + '" src="img/Blank.png" onclick="play(this.id)"></img></td>')
        }
        $("#gameBoard").append('</tr>')
    }

}

initializeGame()


//play function
const play = function (cellId) {
    // extract i j
    let i = cellId.substring(2, 3);
    let j = cellId.substring(3, 4);

    if (gameArray[i][j].status == "blank" && !isGameOver) {
        if (player1Turn) {
            gameArray[i][j].status = "x"
            document.getElementById(cellId).src = 'img/X.png';
            player1Turn = !player1Turn;
            $("h2").text("o turn");
        } else {
            gameArray[i][j].status = "o"
            document.getElementById(cellId).src = 'img/O.png';
            player1Turn = !player1Turn;
            $("h2").text("x turn");
        }
        counter++;
        updateGameStatus()
    }



}



const updateGameStatus = function () {
    //check for row sequence
    //var isGameOver = false;

    for (let i = 0; i < gameArray.length; i++) {
        if (gameArray[i][0].status != "blank" &&
            gameArray[i][0].status == gameArray[i][1].status &&
            gameArray[i][0].status == gameArray[i][2].status) {

            isGameOver = true;
            score = gameArray[i][0].status + " wins"
            break;
        }

    }


    //check for column sequence
    for (let j = 0; j < gameArray.length; j++) {
        if (gameArray[0][j].status != "blank" &&
            gameArray[0][j].status == gameArray[1][j].status &&
            gameArray[0][j].status == gameArray[2][j].status) {

            isGameOver = true;
            score = gameArray[0][j].status + " wins"
            break;
        }

    }

    //check for diagonal sequence

    if (gameArray[0][0].status != "blank" &&
        gameArray[0][0].status == gameArray[1][1].status &&
        gameArray[0][0].status == gameArray[2][2].status) {

        isGameOver = true;
        score = gameArray[0][0].status + " wins"
    }

    if (gameArray[2][0].status != "blank" &&
        gameArray[2][0].status == gameArray[1][1].status &&
        gameArray[2][0].status == gameArray[0][2].status) {

        isGameOver = true;
        score = gameArray[2][0].status + " wins"
    }

    //check for tie
    if (counter == 9 && score == null) {
        isGameOver = true;
        score = "tie";
    }

    if (isGameOver) {
        setTimeout(function () {
            alert(score);
        }, 10)
    }
}