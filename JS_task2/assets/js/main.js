function myFuntion1() {
    const res = 0.1 + 0.2;
    const result = res.toFixed(1);
    document.getElementById('result1').innerHTML = result;
}

function myFuntion2() {
    let num1 = '1';
    const num2 = 2;
    const result = parseInt(num1) + num2;
    document.getElementById('result2').innerHTML = result;
}

function myFuntion3() {
    const size = document.getElementById('size').valueAsNumber;
    const result = Math.floor(size * 1024 / 820);
    document.getElementById('result3').innerHTML = result;
}


function myFuntion4() {
    const sum = document.getElementById('sum').valueAsNumber;
    const price = document.getElementById('price').valueAsNumber;
    const result1 = Math.floor(sum / price);
    const result2 = sum - price;
    document.getElementById('result4_1').innerHTML = result1;
    document.getElementById('result4_2').innerHTML = result2;
}

function myFuntion5() {
    const num = document.getElementById('num').valueAsNumber;
    const num1 = Math.floor(num / 100);
    const temp = num % 100;
    const num2 = Math.floor(temp / 10);
    num3 = temp % 10;
    const result = num3 * 100 + num2 * 10 + num1;
    document.getElementById('result5').innerHTML = result;

}