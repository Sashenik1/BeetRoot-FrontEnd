"use strict";function myFuntion1(){document.getElementById("variant1").innerHTML='function sayHi() { alert("Привіт"); }',document.getElementById("variant2").innerHTML='let sayHi = function() { alert("Привіт"); };',document.getElementById("variant3").innerHTML='let sayHi = () => alert("Привіт!");'}function myFuntion2(){console.log(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=arguments.length;return document.getElementById("result2").innerHTML=r}(2,3,4,5,8))}function myFuntion3(){for(var e=document.getElementById("num1").valueAsNumber,t=document.getElementById("num2").valueAsNumber,n=Math.max(e,t),r=0,u=Math.min(e,t);u<=n;u++)r+=u;document.getElementById("result3").innerHTML=r}function myFuntion4(){var e=document.getElementById("num4_1").valueAsNumber,t=document.getElementById("num4_2").valueAsNumber,n=Math.max(e,t),r=Math.min(e,t);if(n%r==0)result=r;else for(temp=Math.ceil(r/2);0<=temp;){if(n%temp==0&&r%temp==0){result=temp;break}temp--}document.getElementById("result4").innerHTML=result}function myFuntion5(){for(var e=document.getElementById("num").valueAsNumber,t="",n=e;0<n;n--)e%n==0&&(t=t+" "+n);document.getElementById("result5").innerHTML=t}function myFuntion6(){var e=document.getElementById("palid").valueAsNumber,t=Math.floor(e/1e4);rest=e%1e4;var n=Math.floor(rest/1e3);rest=e%1e3;Math.floor(rest/100);rest=e%100;var r=Math.floor(rest/10);num5=e%10,result=t===num5&&n===r?"palindrome":" no palindrome",document.getElementById("result6").innerHTML=result}function myFuntion7(){var e=document.getElementById("purchase").valueAsNumber;result=e<0?"Invalid value":0<e&&e<200?e/1.03:300<e&&e<=500?e/1.05:e/1.07,document.getElementById("result7").innerHTML=result.toFixed(2)}function myFuntion8(){for(var e=10,t=0,n=0,r=0,u=0,m=0;0<e;){var l=parseInt(prompt("Enter number № "+(11-e)));if(isNaN(l)){alert("Non a number value, try again");break}l%2==0?u++:m++,0<l?t++:l<0?n++:r++,e--}document.getElementById("result_poz").innerHTML=t,document.getElementById("result_neg").innerHTML=n,document.getElementById("result_zero").innerHTML=r,document.getElementById("result_pairs").innerHTML=u,document.getElementById("result_unpairs").innerHTML=m}