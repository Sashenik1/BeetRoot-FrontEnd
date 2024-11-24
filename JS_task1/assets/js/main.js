//----wrong names:-------
//let if=5;
/*const 1-var = 'man';
const first var = true;
const camelcase = 3;
const one-two = 5;
-------------------------------*/

const firstName = prompt("Enter your name:");
alert('Hello, ' +firstName+'!'); 

const yearBirthd = prompt("Enter your year of birthd:");
const age = 2024-parseInt(yearBirthd);
alert('Your age is: ' + age); 

const sideSquare = prompt("Enter lenght of the side of a square: ");
alert('Area of a square is ' + parseInt(sideSquare)*parseInt(sideSquare));

const radius = prompt("Enter radius of a circle: ");
alert('Area of a circle is ' + Math.PI*parseInt(radius)*parseInt(radius));

const distance = prompt("Enter distance between two cities, km: ");
const time = prompt("Enter travel time, h: ");
alert('You must go at speed ' + parseInt(distance)/parseInt(time)+'km/h');

const exchangeRate = 1.04;
const dollar = prompt("Enter amount of dollars: ");
const euro = parseInt(dollar)/1.04;
alert("Amount of euro: "+ euro);
