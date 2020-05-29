//initialization
const gameArray  = new Array(3);     

for (var i=0; i < gameArray.length; i++){         
    gameArray[i]=new Array(3)
}    

//initializeGame();

for (var i=0; i < gameArray.length; i++){       
    for (var j=0; j < gameArray[i].length; j++){       
        gameArray[i][j] = {status: "blank"}
    }
} 

var x = gameArray[1][1].status
console.log(x)


$("#gameBoard").html("")
for (var i=0; i < gameArray.length; i++){ 
    $("#gameBoard").append('<tr id="row' + i + '" >')
    for (var j=0; j < gameArray[i].length; j++)  { 
        $("#gameBoard").append('<td><img class="Square" id="rc' + i + '' + j + '" src="img/Blank.png" onclick="play(this.id)"></img></td>')
    } 
    $("#gameBoard").append('</tr>')
}  


let player1Turn = true;
const play = function(cellId){
    // extract i j
    //if(gameArray[i][j].status == "blank"){
        if(player1Turn){
            document.getElementById(cellId).src='img/X.png';
            player1Turn = !player1Turn;

        }
        else {
            document.getElementById(cellId).src='img/O.png';
            player1Turn = !player1Turn;

        }
    //isGameOver()
    //}
}

