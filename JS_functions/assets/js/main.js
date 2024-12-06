//----------------------Task1--------------------------------------

function myFuntion1() {

    document.getElementById('variant1').innerHTML = 'function sayHi() { alert("Привіт"); }'
    document.getElementById('variant2').innerHTML = 'let sayHi = function() { alert("Привіт"); };'
    document.getElementById('variant3').innerHTML = 'let sayHi = () => alert("Привіт!");'
}

//----------------------Task2--------------------------------------
function myFuntion2() {

    let funArgs = function (...a) {
        const result = arguments.length;
        document.getElementById('result2').innerHTML = result;
        return result;
    }

    arguments = [1, 2, 3, 6];
    console.log(funArgs(...arguments));

}

//----------------------Task3--------------------------------------

function myFuntion3() {
    const num1 = document.getElementById('num1').valueAsNumber;
    const num2 = document.getElementById('num2').valueAsNumber;
    let result;



    function whichIsBiggger(x, y) {
        if (x < y) {
            result = -1;
        } else if (x > y) {
            result = 1;
        } else {
            result = 0;
        }
        document.getElementById('result3').innerHTML = result;
    }

    whichIsBiggger(num1, num2);

}

//----------------------Task4--------------------------------------


function myFuntion4() {
    const num = document.getElementById('num4').valueAsNumber;

    function factorial(a) {
        if (a < 0) {
            return 'Invalid value'
        } else if (a === 0) {
            return 1
        }


        let n = 1;
        let i = a;
        while (i > 0) {
            n = n * i;
            i--;
        }
        return n;

    }
    result = factorial(num);
    document.getElementById('result4').innerHTML = result;
}


//----------------------Task5--------------------------------------

let num = [];
let i = 0;
document.getElementById('position').innerHTML = i + 1;

function myFuntion5() {

    function trans(x, y, z) {
        document.getElementById('position').innerHTML = 1;
        document.getElementById('result5').innerHTML = x * 100 + y * 10 + z;
        i = 0;
    }

    num[i] = document.getElementById('num').valueAsNumber;
    document.getElementById('num').value = '';
    i++;
    document.getElementById('position').innerHTML = i + 1;
    if (i >= 3) {
        trans(num[0], num[1], num[2]);
    }

}

//----------------------Task6--------------------------------------
function myFuntion6() {
    const width = document.getElementById('width').valueAsNumber;
    const length = document.getElementById('length').valueAsNumber;

    function square(x, y) {
        if ((x || y) <= 0) {
            sq = 'Invalid value'
        } else if (isNaN(x) && isNaN(y)) {
            sq = 'You have not entered any values';
        } else if (isNaN(x))
            sq = y * y;
        else if (isNaN(y)) {
            sq = x * x;
        } else {
            sq = x * y;
        }

        document.getElementById('result6').innerHTML = sq;

    }

    square(width, length);

}

//----------------------Task7--------------------------------------
function myFuntion7() {
    const num = document.getElementById('perfect').valueAsNumber;
    const result = isPerfect(num);
    document.getElementById('result7').innerHTML = result;
}


function isPerfect(x) {
    let y = 0;
    for (let i = x; i > 0; i--) {
        if (x % i === 0) {
            y = y + i;
        }
    }
    y = y - x;
    if (x <= 0) {
        return 'Invalid value'
    } else if (x === y) {
        return true;
    } else {
        return false;
    }
}

//----------------------Task8--------------------------------------

function myFuntion8() {

    const num1 = document.getElementById('num8_1').valueAsNumber;
    const num2 = document.getElementById('num8_2').valueAsNumber;
    const max = Math.max(num1, num2);
    const min = Math.min(num1, num2);
    let result8 = '';

    for (let i = min; i <= max; i++) {
        if (isPerfect(i))

        {
            result8 = result8 + ' ' + i;
            if (result8 === ' ') {
                result8 = 'GGG'
            }
        }

        document.getElementById('result_8').innerHTML = result8;
    }
}