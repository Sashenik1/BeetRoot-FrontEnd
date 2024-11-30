//----------------------Task1--------------------------------------

function myFuntion1() {
    const age = parseInt(document.getElementById('age').value);
    if(isNaN(age))
    { result='Non a number value'}
    else if(age>=0 && age<12)
    {result='child'}
    else if(age>=12 && age<17)
        {result='kid'}
    else if(age>=18 && age<60)
        {result='adult'}
    else if(age>=60 && age<120)
        {result='old'}
    else{result='Invalid age value'}
    
    document.getElementById('result1').innerHTML = result;
}

//----------------------Task2--------------------------------------
function myFuntion2() {
    const key = document.getElementById('key').valueAsNumber;
    
    if(isNaN(age))
        { result='Non a number value'}
    switch(key)
    {
        case 0:
            result=')';
            break
            case 1:
            result='!';
            break
            case 2:
            result='@';
            break
            case 3:
            result='#';
            break
            case 4:
            result='$';
            break
            case 5:
            result='%';
            break
            case 6:
            result='^';
            break
            case 7:
            result='&';
            break
            case 8:
            result='*';
            break
            case 9:
            result='(';
           break
    }
    document.getElementById('result2').innerHTML = result;
}

//----------------------Task3--------------------------------------

function myFuntion3() {
    const num1 = document.getElementById('num1').valueAsNumber;
    const num2 = document.getElementById('num2').valueAsNumber;
    const max = Math.max(num1,num2);
    const min = Math.min(num1,num2);
    let result = 0;
    for (let i = min; i<=max; i++)
    {
        result=result+i;
    } 
    document.getElementById('result3').innerHTML = result;
}

//----------------------Task4--------------------------------------


function myFuntion4() {
    const num1 = document.getElementById('num4_1').valueAsNumber;
    const num2 = document.getElementById('num4_2').valueAsNumber;
    const max = Math.max(num1,num2);
    const min = Math.min(num1,num2);
    //let result = 0;
    if((max % min)===0)
    {
        result = min;
    }
    else 
    {
        temp = Math.ceil(min/2);
      while(temp>=0) 
        {
        if((max % temp)===0 && (min % temp) ===0)
        {
          result = temp;
          break;
        }
        temp--;
        }
    }
        
   document.getElementById('result4').innerHTML = result;
}


//----------------------Task5--------------------------------------
function myFuntion5() {
    const num = document.getElementById('num').valueAsNumber;
    let result = '';
    for(let i=num; i>0; i--)
    {
        if((num%i)===0)
        { result = result +' '+i ;

        }
    }
    document.getElementById('result5').innerHTML = result;

}

//----------------------Task6--------------------------------------
function myFuntion6() {
    const number = document.getElementById('palid').valueAsNumber;
   const num1 = Math.floor(number/10000);
   rest = number%10000;
   const num2= Math.floor(rest/1000);
   rest = number%1000;
   const num3= Math.floor(rest/100);
   rest = number%100;
   const num4= Math.floor(rest/10);
   num5 = number%10;

if(num1===num5&&num2===num4) 
    {result = 'palindrome'}
else
{result = ' no palindrome'}   

    document.getElementById('result6').innerHTML = result;
}

//----------------------Task7--------------------------------------
function myFuntion7() {
    const sum = document.getElementById('purchase').valueAsNumber;
   
    if(sum<0)
    {result = 'Invalid value'}
    else if(sum>0&&sum<200)
    { result = sum/1.03;}
    else if(sum>300&&sum<=500) 
    {result = sum/1.05;}
   else 
   {result = sum/1.07;}

    document.getElementById('result7').innerHTML = result.toFixed(2);
}

//----------------------Task8--------------------------------------

function myFuntion8() {
   let i=10;
   let resPoz=0;
   let rezNeg=0;
   let resZero=0;
   let respairs=0;
   let resunpairs=0;
   
   while(i>0) {

    let num=parseInt(prompt('Enter number № '+(11-i)));
if(isNaN(num))
    { alert('Non a number value, try again');
        break;
    }

    if(num%2===0)
    {respairs++}
    else
    { resunpairs++}

    if(num>0)
    {resPoz++;}
    else if(num<0)
    {rezNeg++;}
    else 
   {resZero++;}
i--;

}

    document.getElementById('result_poz').innerHTML = resPoz;
    document.getElementById('result_neg').innerHTML = rezNeg;
    document.getElementById('result_zero').innerHTML = resZero;
    document.getElementById('result_pairs').innerHTML = respairs;
    document.getElementById('result_unpairs').innerHTML = resunpairs;
}

//----------------------Task9--------------------------------------

const date = new Date();
   let numdayWeek=date.getDay();
let dayWeek=trans();


function trans () {
    let dayWeek;
switch  (numdayWeek) {
    case 0:
        dayWeek='Sunday'
        break;
    case 1:
        dayWeek='Monday'
      break;
    case 2:
      dayWeek='Tuesday'
      break;
      case 3:
        dayWeek='Wednesday'
      break;
    case 4:
      dayWeek='Thursday'
      break;
      case 5:
        dayWeek='Friday'
      break;
    case 6:
      dayWeek='Saturday'
      break;
     
}
return dayWeek;
}

document.getElementById('day').innerHTML=dayWeek;

function nextDay()
{
    numdayWeek++;
    if(numdayWeek>6)
    {numdayWeek=0;}
    dayWeek==trans();
    document.getElementById('day').innerHTML=trans();;

}

function day (){
    
 
   numdayWeek=date.getDay();
dayWeek=trans();
document.getElementById('day').innerHTML=dayWeek;
}