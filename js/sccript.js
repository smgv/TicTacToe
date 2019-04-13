
window.addEventListener('load', function () {

    const box = document.querySelectorAll(".box");
    const table = document.querySelector('table');
    const msg = document.querySelector("caption");
    const reset = document.getElementById('reset');

    document.turn = 'X';
    msg.innerText = "Get start with Player 1 with X";


    function switchTurn() {
        if (checkWinner(document.turn)) {
            msg.innerText = "Congrats player with " + document.turn + " Won the Game!!";
            reset.style.display = "block";
        }
        else if (document.turn === 'X') {
            document.turn = 'O';
            msg.innerText = "Its Palyer 2 turn with O"
        } else {
            document.turn = 'X';
            msg.innerText = "Its Palyer 1 turn with X"
        }
    }

    function getNumber(number) {
        return document.getElementById(number).innerText;
    }

    function checkRows(a, b, c, move) {
        let result = false;
        if (getNumber(a) === move && getNumber(b) === move && getNumber(c) === move) {
            result = true;
        }
        return result;
    }

    function checkWinner(move) {
        let result = false;
        if
            (
            checkRows(1, 2, 3, move) ||
            checkRows(4, 5, 6, move) ||
            checkRows(7, 8, 9, move) ||
            checkRows(1, 4, 7, move) ||
            checkRows(2, 5, 8, move) ||
            checkRows(3, 6, 9, move) ||
            checkRows(1, 5, 9, move) ||
            checkRows(3, 5, 7, move)
        ) {
            result = true;
        }
        return result;

    }

    table.addEventListener('click', function (e) {
        if (checkWinner(document.turn)) {
            msg.innerText = "Game Over";
        }
        else {
            if (e.target.innerText === '') {
                e.target.innerText = document.turn;
                switchTurn();
            }
            else {
                msg.innerText = "Its already selected";
            }
        }

    });



   reset.addEventListener('click', () => {
    //console.log("reseted");
    for(var i =0; i<box.length; i++){
        box[i].innerText=' ';
    }
    msg.innerText = "Get start with Player 1 with X";
   });


    console.log("Window Loaded Successfully");
});