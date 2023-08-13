// el.style.background = "url('https://img.icons8.com/?size=96&id=pNXET7bXhanM&format=png')";
// el.style.backgroundColor = "#2ffabd"; win color
let counter = 1;
let pole = [[33, 44, 55],
[66, 77, 88],
[99, 10, 11]];
const nums = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
const buttons = ['button1', 'button2', 'button3', 'button4', 'button5', 'button6', 'button7', 'button8', 'button9'];

function win() {
    if (pole[0][0] == pole[0][1] && pole[0][0] == pole[0][2]) {
        button1.classList.add('win');
        button2.classList.add('win');
        button3.classList.add('win');
    }
    else if (pole[1][0] == pole[1][1] && pole[1][0] == pole[1][2]) {
        button4.classList.add('win');
        button5.classList.add('win');
        button6.classList.add('win');
    }
    else if (pole[2][0] == pole[2][1] && pole[2][0] == pole[2][2]) {
        button7.classList.add('win');
        button8.classList.add('win');
        button9.classList.add('win');
    }
    else if (pole[0][0] == pole[1][0] && pole[0][0] == pole[2][0]) {
        button1.classList.add('win');
        button4.classList.add('win');
        button7.classList.add('win');
    }
    else if (pole[0][1] == pole[1][1] && pole[0][1] == pole[2][1]) {
        button2.classList.add('win');
        button5.classList.add('win');
        button8.classList.add('win');
    }
    else if (pole[0][2] == pole[1][2] && pole[0][2] == pole[2][2]) {
        button3.classList.add('win');
        button6.classList.add('win');
        button9.classList.add('win');
    }
    else if (pole[0][0] == pole[1][1] && pole[0][0] == pole[2][2]) {
        button1.classList.add('win');
        button5.classList.add('win');
        button9.classList.add('win');
    }
    else if (pole[0][2] == pole[1][1] && pole[0][2] == pole[2][0]) {
        button3.classList.add('win');
        button5.classList.add('win');
        button7.classList.add('win');
    }
}

function bot(){     // Функция для хода компьютера на поле (сложность "легко")
if (counter != 6){
    while (true) {
        const randomRow = Math.floor(Math.random() * 3);
        const randomCol = Math.floor(Math.random() * 3);
        
        if (pole[randomRow][randomCol] > 3) {
        pole[randomRow][randomCol] = 2;
        break;
        }
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if(pole[i][j] === 2){
                let num = nums[i][j];
                var O = document.getElementById(buttons[num]);
                O.innerHTML = "O";
                O.style.cssText = "border: 0; font-size: 50px; font-family: 'Zlusa font'; color: white; user-select: none;";
                win();
            }
        }
    }
}
}

function one(el) {
    counter++;
    var X = document.getElementById('button1');
    X.innerHTML = "X";
    X.style.cssText = "border: 0; font-size: 50px; font-family: 'Zlusa font'; color: white; user-select: none;";
    pole[0][0] = 1;
    win();
    bot();
}
function two(el) {
    counter++;
    var X = document.getElementById('button2');
    X.innerHTML = "X";
    X.style.cssText = "border: 0; font-size: 50px; font-family: 'Zlusa font'; color: white; user-select: none;";
    pole[0][1] = 1;
    win();
    bot();
}
function three(el) {
    counter++;
    var X = document.getElementById('button3');
    X.innerHTML = "X";
    X.style.cssText = "border: 0; font-size: 50px; font-family: 'Zlusa font'; color: white; user-select: none;";
    pole[0][2] = 1;
    win();
    bot();
}
function four(el) {
    counter++;
    var X = document.getElementById('button4');
    X.innerHTML = "X";
    X.style.cssText = "border: 0; font-size: 50px; font-family: 'Zlusa font'; color: white; user-select: none;";
    pole[1][0] = 1;
    win();
    bot();
}
function five(el) {
    counter++;
    var X = document.getElementById('button5');
    X.innerHTML = "X";
    X.style.cssText = "border: 0; font-size: 50px; font-family: 'Zlusa font'; color: white; user-select: none;";
    pole[1][1] = 1;
    win();
    bot();
}
function six(el) {
    counter++;
    var X = document.getElementById('button6');
    X.innerHTML = "X";
    X.style.cssText = "border: 0; font-size: 50px; font-family: 'Zlusa font'; color: white; user-select: none;";
    pole[1][2] = 1;
    win();
    bot();
}
function seven(el) {
    counter++;
    var X = document.getElementById('button7');
    X.innerHTML = "X";
    X.style.cssText = "border: 0; font-size: 50px; font-family: 'Zlusa font'; color: white; user-select: none;";
    pole[2][0] = 1;
    win();
    bot();
}
function eight(el) {
    counter++;
    var X = document.getElementById('button8');
    X.innerHTML = "X";
    X.style.cssText = "border: 0; font-size: 50px; font-family: 'Zlusa font'; color: white; user-select: none;";
    pole[2][1] = 1;
    win();
    bot();
}
function nine(el) {
    counter++;
    var X = document.getElementById('button9');
    X.innerHTML = "X";
    X.style.cssText = "border: 0; font-size: 50px; font-family: 'Zlusa font'; color: white; user-select: none;";
    pole[2][2] = 1;
    win();
    bot();
}

function reset() {
    counter = 1;
    button1.classList.remove('win');
    button2.classList.remove('win');
    button3.classList.remove('win');
    button4.classList.remove('win');
    button5.classList.remove('win');
    button6.classList.remove('win');
    button7.classList.remove('win');
    button8.classList.remove('win');
    button9.classList.remove('win');
    button1.innerHTML = '';
    button2.innerHTML = '';
    button3.innerHTML = '';
    button4.innerHTML = '';
    button5.innerHTML = '';
    button6.innerHTML = '';
    button7.innerHTML = '';
    button8.innerHTML = '';
    button9.innerHTML = '';
    pole = [[33, 44, 55], [66, 77, 88], [99, 10, 11]];
}