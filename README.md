# ![GA Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Tic Tac Toe
---
Is a game for two players, X and O, who take turns and the player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.
[Link To My Game](https://renad-ahmad.github.io/Tic-Tac-Toe-Game/)


#### List of technologies
---
* draw.io
Is free online diagram software for making flowcharts, process diagrams, org charts, UML, ER and network diagrams.
* [Visual Studio Code](https://code.visualstudio.com/)
Is a code editor redefined and optimized for building and debugging modern web and cloud applications. 
* [Google Chrome](https://code.visualstudio.com/)
web browser includes Developer Tools, a feature that helps web developers debug issues with HTML, CSS, and JavaScript.
* HTML, CSS and JavaScript.

### The wireframe
---
[wireframe](https://drive.google.com/file/d/1NWOwjNM0GPJSi0xEqvbfEDv9xG3nthAw/view?usp=sharing)
[](img/wireframes.png)
### User Stories
---
*  As a user, I want to be able to start a new  game.
*  As a user, I want to be able to click on a square to add X first and then O.
*  As a user, I want to be shown an alert after each turn for win or tie.
*  As a user, I want to be shown a message  for who's turn it is next.
*  As a user, I Should not be able to click the same square twice.
*  As a user, I want to  be not able to continue playing once win or tie.
*  As a user, I want to be  to play the game again without refreshing the page.

#### Documentation
---
* In the first phase, I create all files I need for my Tic Tac Toe game.
* In the second phase, I write the pseudocode for the Tic Tac Toe logic as comments in JavaScript file.
* In the third phase, with HTML, JavaScript and jQuery created the page and the table for the Tic Tac Toe game.
* In the fourth phase, style the page with CSS.
* In the fifth phase, created a play function to switch turns between x and o.
* In the sixth phase,  created a updateGameStatus function to check for win or tie. 

#### List of unsolved problems
---
* A message to show who lose.
* A counter to keep track of the win, lose and tie .
* Make the site fully responsive so that it is playable from a mobile phone.

#### Descrintion of how i solved the win, lose and tie
---
- At first I created updateGameStatus function that has four ways to check for win and one check for tie.
- The first one is a for loop that check for row sequence :

for (let i = 0; i < gameArray.length; i++) {
        if (gameArray[i][0].status != "blank" &&
            gameArray[i][0].status == gameArray[i][1].status &&
            gameArray[i][0].status == gameArray[i][2].status) {

            isGameOver = true;
            score = gameArray[i][0].status + " wins"
            break;
        }

    }

1. It will check if the status of the first square is not blank.
2. Then check if what inside of the first square is the same as the second square.
3. Then check if what inside the first square is the same as the theird square.
4. If all the three has the same status then it is a win.

- Same go for the column sequence.

* Diagonal sequence :

if (gameArray[0][0].status != "blank" &&
        gameArray[0][0].status == gameArray[1][1].status &&
        gameArray[0][0].status == gameArray[2][2].status) {

        isGameOver = true;
        score = gameArray[0][0].status + " wins"
    }

Is the same but I use if statement and chose the index of the squares for the diagonal win.

- check for tie :

 if (counter == 9 && score == null) {
        isGameOver = true;
        score = "tie";
    }

I set a counter in the play function and if the counter is equal 9 and the score is null then it is a tie .


#### Favorite function 
---
* play function :

const play = function (cellId) {
    let i = cellId.substring(2, 3);
    let j = cellId.substring(3, 4);

    if (gameArray[i][j].status == "blank" && !isGameOver) {
        if (player1Turn) {
            gameArray[i][j].status = "x"
            document.getElementById(cellId).src = "img/x.png";
            player1Turn = !player1Turn;
        } else {
            gameArray[i][j].status = "o"
            document.getElementById(cellId).src = "img/o.png";
            player1Turn = !player1Turn;
        }
        counter++;
        updateGameStatus()
    }
}
 
 1. first it extract i and j.
 2. check if the status of the square is a blank and the game is not over then do this condition.
 3. Then switch turns between x and o.
 4. Keep count for each turn.
 5. call updateGameStatus().
