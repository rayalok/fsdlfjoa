// function sleep(name, time) {
//   console.log(name + " is sleeping from " + time);
// }


// sleep("Jasim", "10 pm");
// sleep("Rahim", "11 pm");
// sleep("Karim", "12 pm");

// function toCelsius(fahrenheit) {

//   return (5/9) * (fahrenheit-32);
  
// }

// //document.getElementById("demo").innerHTML = "The temperature is " + toCelsius(77) + ' Celsius';
// console.log( "The temperature is " + toCelsius(77) + " Celsius" );

// toCelsius();


// let car = {
//   name: "Fiat",
//   model: 500,
//   weight:"850kg",
//   color:'white',
//   start: function () {
//     console.log("car has started");
//   },
//   drive: function () {
//     console.log("car is driving");
//   },

// };


// const person = {
//   firstName: "john", 
//   lastName: "Doe", 
//   age: "25",
//   start: function () {    // it's a object method 
    
//     this.drive();
//     console.log("is driving the car")
//   },
//   drive: function() {
//     console.log("john is a innocent boy")
//   }

// };

// console.log(person.firstName + " is driving the car")

// person.start()

// document.getElementById("demo").innerHTML = person.firstName + " is " + person.age + " years old"

// const person = {
//   firstName: "john", 
//   lastName: "Doe", 
//   age: "25",
//   start: function () {    // it's a object method
//     console.log("john is a innocent boy");
    
//     console.log("is driving the car");
//   } 

// };

// person.start()


// const arr = [5, 1, 3, 2, 6];

// // sum or max

// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// console.log(findSum(arr));

// const output = arr.reduce(function (acc, curr) {

//   acc = acc + curr;
//   return acc;
// }, 0);

// console.log(output);





// let arr = [5, 1, 3, 2, 6];


// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax(arr));

// let output = arr.reduce(function (max, curr) {
//   if (curr > max) {
//     max = curr;
//   }
//   return max;
// }, 0);

// console.log(output);



// const users = [
//   {firstName: "akshay", lastName: "saini", age: 26},
//   {firstName: "donald", lastName: "Trump", age: 75},
//   {firstName: "elon", lastName: "musk", age: 59},
//   {firstName: "deepika", lastName: "padukone", age: 26},

// ];

// list of full names
// ["akshy saini", "donald trump".....]


// const output = users.map((x) => x.firstName + " " + x.lastName);


// console.log(output);


// acc = {26 : 1, 75: 1, 50: 1 }

// const output = users.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   }else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});


//  console.log(output);


// Who is under 30?

// const output = users.filter((x) => x.age < 30);

// const output = users.filter((x) => x.age < 30).map((x) => x.firstName);

// console.log(output);

// var numbers = [10, 20, 30, 50];

// var squareNumbers = [];

// numbers.forEach(function(x){
//   squareNumbers.push(x*x);
// })

// console.log(squareNumbers);




// const names = ['sakib', 'tamim', 'mushfiq', 'mahmudulla', 'masraffi', 'salay', 'ridoy'];

// const nameUpperCase = names.map(function(name) {
//   return name.toLocaleLowerCase();
// })

// console.log(nameUpperCase);


// Array.prototype.myUcase = function() {
//   for (let i = 0; i < this.length; i++)
//   {
//     this[i] = this[i].toUpperCase();
//   }
// };

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.myUcase();

// console.log(fruits);


// ************ Array reduce *************



// const numbers = [175, 50, 25, 22, 33, 55];

// const vot = ['Yes', 'No', 'Yes', 'No', 'Absent', 'Yes', 'Absent']; 

// const products = [
//   {
//     name: "pen",
//     amount: "6",
//     price: 15
//   },
//   {
//     name: "Book",
//     amount: 33,
//     price: 44
//   },
//   {
//     name: 'Notebook',
//     amount: 4,
//     price: 22
//   }
// ];

// const totalTaka = products.reduce((acc, val) => {
//   return acc + val.amount * val.price;
// }, 0);
// console.log(totalTaka);

// const result = vot.reduce((acc, vot) => {  // ***********সুন্দর একটা কাজ **********
//   if(acc[vot]){
//     acc[vot]++
//   }else {
//     acc[vot] = 1;
//   }
//   return acc;

// }, {});


// console.log(result);



// const numbers = [175, 50, 25, 22, 33, 55];

// numbers.unshift('alok');

// console.log(numbers);

// const numbers = [12, 25, 46, 27, 32];
// const name = ['dog', 'cats', 'bats','rats', 'bird'];

// const students = [
//   {name: 'Rahim', number: 70, subject:     'Math'

//   },
//   {
//     name: 'Karim', number: 85, subject: 'Math'
//   },
//   {
//     name: 'Ram', number: 33, subject: "English"
//   },
//   {
//     name: 'Shyam', number: 80, subject: 'Bangla'
//   },
//   {
//     name: 'Jodu', number: 75, subject: 'Bangla'
//   },
//   {
//     name: 'Modhu', number: 40, subject: "Bangla"
//   }
// ];

// .every() Method

// const mainFail = students.some(exam => {
//   return exam.number < 33; //  কোনটা ৩৩ এর নিচে ্‌ আছে কিনা যদি থাকে তবে এটা সত্য হবে  অর্থাৎ কেও ফেল করেনি
//    });

// console.log(mainFail);

// const points = [40, 100, 1, 5, 25, 10, 40];

// const alok = points.sort(function(a, b) {
//   return a - b;

// });

// console.log(alok[alok.length-1])


// Boolean.prototype.myColor = function() {
//   if (this.valueOf() == true) {
//     return 'green';
//   }else {
//     return 'red';
//   }
// };

// let a = true;

// console.log(a.myColor());

// class car {
//   constructor(brand) {
//     this.carName = brand;
//   }
//   present() {
//     return 'I have a ' + this.carName;
//   }
// }

// class model extends car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ', it is a ' + this.model;
//   }
// }

// mycar = new model('Ford', 'Mustang');

// console.log(mycar.show());

// const alok = {
//   firstName: 'Alok',
//   lastName: 'Ray',
//   age: 25,
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// };

// function Person(first, last, age) {
//   this.firstName = first;
//   this.lastName  = last;
//   this.age       = age;
//   this.fullName = function() {
//     return this.firstName + ' ' + this.lastName + ' ' + this.age
//   }; 
// }

// const alok = new Person('alok', 'ray', 25);
// const sumit = new Person('sumit', 'saha', 35);
// const rahim = new Person('Rahim', 'molla', 28);
// const joshim = new Person('joshim', 'islam', 45);

// //console.log(alok);

// console.log(alok.fullName())

// class Car {
//   constructor(brand) {
//     this.carName = brand;
//   }
//   present(){
//     return 'I have a ' + this.carName;
//   }
// }

// class Modal extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.modal = mod;
//   }
//   show() {
//     return this.present() + ', it is a ' + this.modal;
//   }
// }

// myCar = new Modal('Ford', 'Mustang');

// console.log(myCar.show())

// class Parent {
//   constructor(name, title){
//     this.name = name;
//     this.title = title;

//   }

//   someParentMethod() {
//     return 'This is a parent method.';
//   }
// }


// class Child extends Parent {
//   constructor (name, title, thirdProp) {
//     super(name, title);
//     this.thirdProp = thirdProp;
//   }
//   someChildMethod() {
//     return 'This is a child method';
//   }
// }


// const obj = new Child("Child", "This is the Child title", true);

// console.log(obj.someChildMethod());


// class Car {
//   constructor(brand) {
//     this.carName =brand;
//   }
//   present(){
//     return 'I have a ' + this.carName;
//   }
// }

// class model extends Car{
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ', it is a ' + this.model;
//   }
// }

// mycar = new model('Ford', 'Mustang');

// console.log(mycar.show())


// class Tala {
//   constructor(district){
//     this.districtName = district;
    

//   }
//   present(){
//     return 'My present address ' + this.districtName;
//   }
// }

// class Dhaka extends Tala{
//   constructor(district, title) {
//     super(district);
//     this.Dhaka = title;
//   }
//   past() {
//     return this.present () + ', I am from ' + this.Dhaka;
//   }
// }

// myTala = new Dhaka("Tejgong", "Satkhira. ");

// console.log(myTala.past());


// ******** JSON *************

// var text = '{ "name": "John", "age":"35", "city": "New York"}  '

// var obj = JSON.parse(text, function(key, value) {
//   if (key == 'city') {
//     return value.toUpperCase();
//   }else {
//     return value;
//   }
// });

// console.log(obj.name + " " + obj.age + " " + obj.city);

// var obj = {"name":"john", "age":"39","city":"New York"};
// var text = JSON.stringify(obj
//   ,function (key, value) {
//     if (key == "city") {
//       return value.toUpperCase();
//     }else {
//       return value;
//     }

//   });

//   console.log(text)



// ********* Regular Expressions ********
// let text = "Do you know if this is all there is?";

// //let pattern = /[is]/gi;

// let pattern =/[a-h]/g;

// let result = text.match(pattern);

// console.log(result);

// let text = "I SCREAM FOR ICE CREAM!";
// let pattern = /[A-E]/g;
// let result = text.match(pattern);

// console.log(result);



// ************* Slideshow *****************




// const slideshowElements = document.querySelectorAll(".slideshow-element");

// let countElements = 1;

// setInterval(() => {
//   countElements++;
//   let currentElement = document.querySelector(".current");
//   currentElement.classList.remove("current");

//   if (countElements > slideshowElements.length) {
//     slideshowElements[0].classList.add("current");
//     countElements = 1;
//   } else {
//     currentElement.nextElementSibling.classList.add("current");
//   }
// }, 3000);


// ************ ((())) *****************


// const myInterval = setInterval(myTimer, 1000);

// function myTimer() {
//   const date = new Date();
//   document.getElementById("demooo").innerHTML= date.toLocaleTimeString();
// }

// function myStop() {
//   clearInterval(myInterval);
// }


// Color correction

myInterval = setInterval(setColor, 5000);

function setColor() {
  const x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "gray" ? "#AEC09A" :
  "gray"; 

}

function myStop() {
  clearInterval(myInterval)
}

// JavaScript Progress Bar

function move() {
  const element = document.getElementById("myBar");
  let width = 0;
  const id = setInterval(frame, 10);
  function frame() {
    if (width == 100) {
      clearInterval(id);

    } else {
      width++;
      element.style.width = width + "%";
    }
  }
}


// Happy Birthday!


const myTimeout = setTimeout(myGreeting, 2000);

function myGreeting() {
  document.getElementById("memo").innerHTML ="Happy Birthday!";
}

function myStopFunction() {
  clearTimeout(myTimeout);
}

// The setTimeout() and clearTimeout() Methods


let counter = 0;
let timeout;
let timer_on = 0;

function timedCount() {
  document.getElementById("imo").value = counter;
  counter++;
  timeout = setTimeout(timedCount, 1000);
}

function startCount() {
  if (!timer_on) {
    timer_on = 1;
    timedCount();
  }
}

function stopCount() {
  clearTimeout(timeout);
  timer_on = 0;
}

// The open and close methods  window object

let myWindow;

function openWin() {
  myWindow = window.open("", "", "width=200,height=100");
}

function closeWin() {
  myWindow.close();
}

// another one

let myWindows;

function openWind() {
  myWindows = window.open("https://www.fiverr.com/biplob234?up_rollout=true", "_blank", "width=500, height=500")
}

function closeWin() {
  myWindows.close();
}

// another one 

let myWindowsA;

function openWindow() {
  myWindowsA =window.open("https://www.fiverr.com/biplob234?up_rollout=true", "myWindowsA","width=400, height=200");
}

function closeWindow(){
  if(myWindowsA) {
    myWindowsA.close();
  }
}


function checkWindow() {
  let text = "";
  if(!myWindowsA) {
    text = "It has never been opened!";
  } else {
    if (myWindowsA.closed) {
      text = "It is closed.";
    } else {
      text = "It is open.";
    }
  }
  document.getElementById("Demo").innerHTML = text;

}

// confirm ()

function myFunctionAB () {
  let text = "Press a button! \nEither OK or Cancel.";
  if (confirm(text) == true) {
    text = "You pressed Ok!";
  }else {
    text = "You canceled";
  }
  document.getElementById("deMo").innerHTML =text;
}

// window frame


function iFuncTionS() {
  const frame = window.frameElement;
  if (frame) { 
    frame.src = "https://www.w3schools.com/";
  }
}


const frames = window.frames;

for (let i = 0; i < frames.length; i++){
  frames[i].document.body.style.background = 'yellow';
}

let length = window.history.back();
document.getElementById("history")

// window location 

let origin = location.search;
document.getElementById("history").innerHTML = origin;


function myAction(x) {
  if(x.matches) {
    document.body.style.backgroundColor = "pink";
  } else {
    document.body.style.backgroundColor = "yellow"
  }
}

// pageXOffset

function diFunction() {
  window.scrollBy(100, 100);
  alert("pageXOffset: " + window.pageXOffset + ", pageXOffset: " + window.pageXOffset); 
}

function asFunction() {
  parent.document.body.style.backgroundColor = 'light';
}


// window resizeTo/ resizeWineBy


let myWindoW;

function openWinD() {
  myWindoW = window.open("", "", "width=250, height=250");
}

function resizeWineToo() {
  myWindoW.resizeTo(800, 600);
}

function resizeWineBye() {
  myWindoW.resizeBy(-100, -50);
}


// scrollWin/ scrollBy 

function scrollWin(x, y){
  window.scrollBy(x, y);
}

// setInterval

let myInTerval = setInterval(myTimer, 1000);

function myTimer() {
  let date = new Date();
  document.getElementById("damo").innerHTML = date.toLocaleTimeString()
}

function myStopFuncTion() {
  clearInterval(myInTerval);
}







// var num4 = 50;
// var num5 = 40;

// var num6 = 20;

// console.log(num4 > num5 && num4 > num6);

// console.log(num4 < num5 || num4 > num6);

// var num = 6;

// if (num % 2 ==0)
// console.log("Even");

// else //(num % 2 != 0) 
// console.log("Odd");

// let numb = 5;

// if (numb % 2 == 0)
// console.log("Even");

// else
// console.log("Odd");

// // letter grade 
// // user marks input 
// // A+ (80 - 100)
// // A (70 - 80)
// // A- (60 - 70)
// // B (50 - 60)
// // C (40 - 50)
// // D (40 - 50)

// let point = prompt("Enter your number: ");

// if( point > 100 || point < 0 ) {
//   document.write("Invalid marks");
// } else if( point >= 80 && point <=100 ) {
//   document.write("Congrats! Your result is A+");
// } else if(point >=70 && point <= 79) {
//   document.write("Congrats! Your result is A");
// } else if(point >= 60 && point <= 69) {
//   document.write("Congrats! Your result is A-");
// } else if(point >= 50 && point <= 59) {
//   document.write("Congrats! Your result is B");
// } else if(point >= 40 && point <= 49) {
//   document.write("Congrats! Your result is C");
// } else if(point >= 33 && point <= 39) {
//   document.write("Congrats! Your result is D");
// } else {
//   document.write("Your bad luck! You did Fail the exam");
// }


// logical and

// let num7 = prompt("Enter num7: ");
// let num8 = prompt("Enter num8: ");
// let num9 = prompt("Enter num9: ");

// if (num7 > num8 && num7 > num9){
//   document.write("Large number = " + num7)
// } else if (num8 > num7 && num8 > num9){
//   document.write("Large number = " + num7)
// } else {
//   document.write("Large number = " + num9)
// }


// let letter = prompt("Enter a letter: ");

// letter = letter.toLowerCase();

// if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
// document.write("Vowel");

// else 
// document.write("Consonant")

// Digit spelling 
// 0- Zero, 1 - One .....9 - Nine
// switch, case, break, default



let day;
switch (new Date().getDay()){
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2: 
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";

}

document.write("Today is " + day + "<br>" + "<br>");

// let digit = prompt("Enter any digit : ");

// switch (digit) {
//   case "0":
//     console.log("Zero");
//     break;
//   case "1":
//       console.log("One");
//       break;
//   case "2":
//     console.log("Two");
//     break;
//   case "3":
//     console.log("Three");
//     break;
//   case "4":
//     console.log("Four");
//     break;
//   case "5":
//     console.log("Five");
//     break;
//   case "6":
//     console.log("Six");
//     break;
//   case "7":
//     console.log("Seven");
//     break;
//   case "8":
//     console.log("Eight");
//     break;
//   case "9":
//     console.log("Nine");
//     break;
//   default:
//     console.log("Not a digit");

// }

// let letters = prompt("Enter any letter : ");
// letters = letters.toLowerCase();

// switch(letters) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//   //   console.log("Vowel");
//   //   break;
//   // case "e":
//   //   console.log("Vowel");
//   //   break;
//   // case "i":
//   //   console.log("Vowel");
//   //   break;
//   // case "o":
//   //   console.log("Vowel");
//   //   break;
//   // case "u":
//     console.log("Vowel");
//     break;
//   default:
//     console.log("Consonant");
  

// }

// for (var x = 1; x <= 10; x = x + 1) {
//   document.write("<h1>Bangladesh</h1>");
// }

// for(var x = 10; x >= 1; x = x -1) {
//   document.write(" " + x);
  
// }

// let sum = 0;

// for (let x = 1; x <= 5; x = x +1) {
//   sum = sum +x;
// }

// document.write(sum);

// Task - 6 write a program that will print sum of all the number that are divisible by 3 and 5 from 1-100

// let x = 1;
// let y = 0;

// while(x <= 100){
//  if(x % 3 == 0 && x % 5 == 0) {
//   document.write(" " + x);
//   y = y + x;
//  }
//  x++;
// }
// document.write(y);


// let numBer = Number(prompt("Enter a number "));
// let resulT = numBer >0? "positive" : numBer < 0? "Negative" : "zero";
// console.log(resulT);

// ternary operator


// let a1 = Number(prompt("Enter your first number"));
// let a2 = Number(prompt("Enter your second number "));
// let a3 = Number(prompt("Enter you third number "));



// var result = a1 > a2 && a1 > a3 ? "a1" : a2 > a1 && a2> a3 ? "a2": "a3";

// document.write(",   The number is " + result);


// function addition(x, y) {
//   let addXY = x +y;
//   document.write("The addition value is " + addXY + "<br>");
// }

// function subtraction(x, y) {
//   let addXY = x - y;
//   document.write("The subtraction value is " + addXY + "<br>");
// }

// function multiplication(x, y) {
//   let addXY = x * y;
//   document.write("The multiplication value is " + addXY + "<br>");
// }

// function division(x, y) {
//   let addXY = x / y;
//   document.write("The division value is " + addXY + "<br>");
// }

// function modulus(x, y) {
//   let addXY = x % y;
//   document.write("The modulus value is " + addXY + "<br>");
// }


// addition(10, 30);
// subtraction(10, 30);
// multiplication(10, 30);
// division(10, 30);
// modulus(10, 30);


// Array loop


// let num88 = new Array();

// for (let i =0; i < 5; i++) {
//   num88 [i] = parseInt(prompt("Enter a number :")); 
// }

// let sum = 0;

// for ( let i= 0; i < 5; i++) {
//   console.log(num88[i]);
//   sum = sum + num88[i];
// }

// console.log("sum =" + sum);

// array sort


// let nameS = ["alok", " tapos", "aman", "karim"];
// nameS.sort();
// nameS.reverse();
// console.log(nameS);

// let numberS = [ 20, 3, 5, 66, 33];

// numberS.sort(function(a,b) {
//   return a - b;
// })

// console.log(numberS);

         // Task ((((8))))


// One Dimensional Array
//create a function called highestScore that 
// Receive a 1d array called scores
// return the highest score


// function highestScore(score){
//   let highest = score[0];
//   for(let x = 1; x < score.length; x++){
//     if(highest < score[x]){
//       highest = score[x]
//     }
//   }
//   return highest;
// }

// let resuLt = highestScore([22,44,33,55,222,0,3]);

// console.log(resuLt);

// function highestRunner(playersInfo){
//     var higheSTscore = playersInfo[0][0];
//     var higheSTscore = playersInfo[0][1];

//     for(let i = 1; i < playersInfo.length; i++) {
//       if (higheSTscore < playersInfo[i][1]){
//         higheSTscore = playersInfo[i][1];
//         higheSTscore = playersInfo[i][0];
//       }

//     }
//     return higheSTscore;
// }

// let playersInfo = [
//   ["Ashraful", 95],
//   ["Sakib", 19],
//   ["Mushfiq", 3],
//   ["Mahmudullah", 45],
//   ["Mashrafee", 2224]
// ];
// let names = highestRunner(playersInfo);

// console.log(names)

// function Students(name, age, cgpa, lang) {
//   this.name = name;
//   this.age = age;
//   this.cgpa =cgpa;
//   this.lang =lang;
  
//   this.display = function () {
//     console.log(this.name);
//     console.log(this.age);
//     console.log(this.cgpa);
//     console.log(this.lang);
//   }
// }

// let students1 = new Students("alok ray", 26, 2.77, ["Bangla", "English"]);
// let students2 = new Students("anisul islam ", 26, 3.77, ["Bangla", "English", 'Hindi']);
// let students3 = new Students("sobuj", 36, 4.77, ["Bangla", "English"]);

// students1.display();
// students2.display();
// students3.display();






// Guessing Game
// Guess a number from 1 to 5 
// Generate a random number between 1 to 5 
// If the guess number matches random number;   
// Run the game for 5 times
// Show the number of won and lost


// var numOfWon = 0;
// var numOfLost = 0;
// for(var i = 1; i <= 5; i++) {
//   var guessNumber = parseInt(prompt("Enter a number from 1 to 5 : "));

// var randomNumber = Math.floor(Math.random()*5)+ 1;

// if(guessNumber==randomNumber){
//   console.log("You have won");
//   numOfWon++;
// }else{
//   console.log("You have lost. Random number was " + randomNumber);
//   numOfLost++;
// }
// }

// document.write("Total Number of won = " + numOfWon + "<br>");

// document.write("Total Number of lost = " + numOfLost + "<br>");











// next and Previous functions

var photos = ["image/3.jpg","image/2.png", "image/1.jpg"];

var imgTag = document.querySelector("img");

var count = 0;

function next() {

  count++;
  if(count >= photos.length) {
    count = 0;
    imgTag.src = photos[count];
  }else{
    imgTag.src = photos[count];
  }

}

function prev() {

  count--;
  if(count < 0) {
    count = photos.length -1;
    imgTag.src = photos[count];
  }else{
    imgTag.src = photos[count];
  }

}

