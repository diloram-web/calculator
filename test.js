// function main(){
//     var themeNumber=parseInt(readLine(),10)
//     switch(themeNumber){
//         case 1:
//             console.log("Light");
//             break;
//             case 2:
//             console.log("Dark");
//             break;
//             case 1:
//             console.log("Nocturne");
//             break;
//             case 1:
//             console.log("Terminal");
//             break;
//             case 1:
//             console.log("Indigo");
//             break;
//             default:
//                 console.log("another color")
//     }
// }


// age=12;
// message = age >= 18? "you're an adult" : "You're a minor";
// console.log(message);

// time=9;
// greeting = time < 12? "good morning!" : "Good afternoon!";
// console.log(greeting);


// isStudent = true;
// message1 = isStudent? "You are a student" : "You are not a student";
// console.log(message1);


// purchaseAmount = 125;
// discount=purchaseAmount >= 100 ? 10 : 0;
// console.log(`Your total is $ ${purchaseAmount -purchaseAmount * (discount/100)}`);




// let day = 4;
// if(day == 1){
//     console.log(`it is Monday`);
// }
//  else if(day == 2){
//     console.log(`it is Tuesday`);
// }
// else if(day == 3){
//     console.log(`it is Wednesday`);
// }
// else if(day == 4){
//     console.log(`it is Thursday`);
// }
// else if(day == 5){
//     console.log(`it is Friday`);
// }
// else if(day == 6){
//     console.log(`it is Saturday`);
// }
// else if(day == 7){
//     console.log(`it is Sunday`);
// }
// else {
//     console.log(`it is a not Day!`)
// }


// let day1 = 6;
 
// switch(day1){
//     case 1:
//         console.log("It is Monday");
//         break;
//     case 2:
//         console.log("It is Tuesday");
//         break;
//     case 3:
//         console.log("It is Wednesday");
//         break;
//     case 4:
//         console.log("It is Thursday");
//             break;
//     case 5:
//         console.log("It is Friday");
//                 break;
//     case 6:
//         console.log("It is Saturday");
//         break;
//     case 7:
//         console.log("It is Sunday");
//         break;
//     default:
//         console.log(`${day} is not a day`)
// }


// let testScore =45;
// let letterGrade;

// switch(true){
//     case testScore >= 90:
//         letterGrade ="A";
//         break;
//     case testScore >= 80:
//         letterGrade = "B";
//         break;
//     case testScore >=70:
//         letterGrade = "C";
//         break;
//     case testScore >=60:
//         letterGrade = "D";
//             break;
    
//     default:
//         letterGrade = "F";

// }
// console.log(letterGrade);

///////////////////////////////////////////string methods/////////////
//let userName = "DiloramAkhmadalieva";
//userName.charAt(0);



// console.log(userName.charAt(0));
//console.log(userName.indexOf("D"));
//console.log(userName.lastIndexOf("D"));
//console.log(userName.length);
// userName1 = userName.trim();
//userName1 = userName.toUpperCase();
//userName1 = userName.toLowerCase();
//userName1 = userName.repeat(5);

//let result = userName.startsWith(" ");
//let result = userName.endsWith(" ");
// let result = userName.includes(" ");
// if (result){
//     console.log("Your username can't begin with ' ' ");
// }
// else{
//     console.log(userName)
// }

// console.log(result);


////////////////////////////////////////
//let phoneNumber="123-456-7890";

// phoneNumber = phoneNumber.replace("-",'');
//phoneNumber = phoneNumber.replaceAll("-",'');
// phoneNumber = phoneNumber.padStart(15,'0');
//phoneNumber = phoneNumber.padEnd(20,'*');
//console.log(phoneNumber);



///////////string slicing =creating a substring from a portion 
//of another string 
//string.slice(start,end)

//const fullName ="Diloram Akhmadalieva";
// let firstName= fullName.slice(0,2);
// let firstName=fullName.slice(0,7);
// let lastName= fullName.slice(8,20);
// console.log(firstName);
// console.log(lastName);
//let firstChar = fullName.slice(0,1);
//let lastChar = fullName.slice(-4);

//console.log(firstChar);
//console.log(lastChar);


/////////////////method chaing 
//...............No method chaing..........//////////////

// let userName = window.prompt("Enter your username: ")
//let userName="diloramahmadalieva ";

// userName = userName.trim();
// let letter = userName.charAt(0);
// letter=letter.toUpperCase();

// let extraChars=userName.slice(1);
// extraChars=extraChars.toLowerCase();
// userName = letter + extraChars;

// console.log(userName)


//.............Method chaing............/////////////

//userName = userName.trim().charAt(0).toUpperCase()+userName.trim().slice(1).toLowerCase();
//console.log(userName);





/////////////logical operators////

/////            AND = &&
//               OR = ||
//               NOT =!


//const temp = -40;

// if (temp > 0){
//     console.log("The weather is Good");

// }
// else if (temp<=30){
//     console.log("The weather is Hot");
// }
// else{
//     console.log("The weather is BAD");
// }
//AND 
// if (temp > 0  && temp <=30){
//     console.log("The weather is Good");

// }

// else{
//     console.log("The weather is BAD");
// }
// if (temp < 0  || temp <=30){
//     console.log("The weather is Good");

// }

// else{
//     console.log("The weather is BAD");
// }
/////////////////////////!!!!!!!!!!!!!!!!!!!
// const isSunny=true;

// if (!isSunny){
//     console.log("The weather is Sunny");

// }

// else{
//     console.log("The weather is Cloudy");
// }
///////////////assigment operator  
//                  =  === ==  != !==

// const PI=3.14;

// if (PI !== 3.14){
//     console.log("That is PI");

// }

// else{
//     console.log("That is not PI");
// }



///////////////////while loop =repeat some code while some condition is true


// let userName = "";
// while(userName === ""){
//     console.log("You didn't enter your name")
// }
// console.log(`Hello ${userName}`)
///////////////////////////////////
// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
//     username = window.prompt(`Enter your username`);
//     password = window.prompt(`Enter your password`);
//    if(username === "myUsername" && password === "myPassword"){
//     loggedIn = true;
//     console.log("You are logged in!");
//    }
//    else{
//     console.log("Invalid credentials! try again")
//    }
// }



/////////////////////                       For loop

////                for loop = repeat some code a Limited amount of times


// for(let i=1; i <=10; i++){
//      for(let j=1; j>=10; j--){
//         console.log(`${i}*${j}+${i*j}`)
//      }
// }






///////////////////
// for (let i=1; i <=20; i++){
//     if(i == 13){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }
//////////////////
// for (let i=1; i <=20; i++){
//     if(i == 13){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }
// let number =15;
// for (let i=1; i <= number; i+=2){
//    var son=number-i;
//    console.log(" ".repeat(son/2)+"*".repeat(i));


// }
// let numbe =15;
// for (let i=1; i <= numbe; i++){
//    var son=numbe-i;
//    console.log( " ".repeat(son/2)+"*".repeat(i));


// }


///////////////////////  NUMBER GUESSING GAME


// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() *(maxNum - minNum +1)+minNum);

// let attempts = 0;
// let guess;
// let running = true;


// while(running){
//     guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
//     guess = Number(guess);

//     if(isNaN(guess)){
//         window.alert("Please enter a valid number");
//     }
//     else if(guess < minNum || guess > maxNum){
//         window.alert("Please enter a valid number")
//     }
//     else{
//         attempts++;
//         if (guess < answer){
//             window.alert("Too low! try again!")
//         }
//         else if (guess > answer){
//             window.alert(" Too high! try again!")
//         }
//         else{
//             window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts`)
//             running = false;
//         }
//     }
// }


////////////////// function


// function myName(userName,age){
//     console.log("Happy birthday to you");
//     console.log("Happy birthday to you");
//     console.log(`Happy birthday dear ${userName}`);
//     console.log("Happy birthday to you");
//     console.log(`You are ${age} years old`)
// }
// myName("Diloram", 37);
// myName("Dilmurat", 35);
// myName("Dilrabo", 39);
// myName("Murtazo", 33);

///////////////////////
// function add(x,y){
//     let result = x+ y;
//     return result;
// }
//  let answer=add(19,29);
// // console.log(answer)
// console.log(add(29,19));

///////////////////
// function add(x,y){
//     return x + y;
// }
// function subtruct(x,y){
//     return x - y;
// }
// function multiply(x,y){
//     return x * y;
// }
// function divide(x,y){
//     return x / y;
// }
// console.log(add(29,19));
// console.log(subtruct(29,19));
// console.log(multiply(29,19));
// console.log(divide(29,19));


/////
//  function isEven(number){
//     if(number % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
//  }
//  console.log(isEven(29))

 ///////////////////
//  function isAdd(number){
//     return number % 2 !==0 ?true:false;
//  }
//  console.log(isAdd(24));

/////////////////////////////////////////////////////


// function isValidEmail(mail){
//     if(mail.includes("@")){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isValidEmail("Diloram@fake.com"));
// console.log(isValidEmail("Diloram.fake.com"));
//////////////////////////////////////////


// function isValidEmail(mail){
//    return mail.includes("@")? true : false;
// }
// console.log(isValidEmail("Diloram@fake.com"));
// console.log(isValidEmail("Diloram.fake.com"));

//////////////////////////////////



///     variable scope = where a variable is recognized 
//               and accessible (local vs global)

////////////////////////////////////////////////////
//     array = a variable like structure that can 
//                     hold more than 1 value

//let fruits = ["apple", "orange", "banana","apricot","mango","coconut"];


//fruits.push("coconut");
//fruits.pop();
//fruits.shift();
//fruits.unshift("apricot");

//let numOfFruits= fruits.length;
//let index =fruits.indexOf("banana");
// console.log(index);


// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);
// console.log(fruits[5])
// for (let i=fruits.length-1; i >=0;i--){
//    console.log(fruits[i])
// }

// fruits.sort().reverse();
// for (let fruit of fruits){
//    console.log(fruit)
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////                            spread operators = ...allows an iterable such as an array or string to be expanded into seperate elements 
//                                                               (unpacks the elements)


//let numbers=[1,2,3,4,5];
// let maximum=Math.max(...numbers);
// let minimum=Math.min(...numbers);
// console.log(maximum);

// let username = "Diloram Akhmadalieva ";
// let letters = [...username].join("-").repeat(2);
// console.log(letters);

// let fruit=["apple","banana","orange"];
// let vegatables =["carrots","celery","potatoes"];
// let foods=[...fruit,...vegatables,"eggs","milk"];
// console.log(foods.join("-"));

////////////////////////////////////////////

//rest parametrs = (...rest)allow a function work with a variable 
//               number of arguments by bundling them into an array

//                spread = expands an array into seperate elements
//                  rest = bundles seperate elemens into an array

//function openFridge(...food){
   // console.log(food);
   //console.log(...food)
//}
// function getFood (...food){
//    return food;
// }

// const food1 ="pizza";
// const food2 ="hamburger";
// const food3 ="hotdog";
// const food4 ="sushi";
// const food5 ="ramen";

// openFridge(food1,food2,food3,food4,food5);
//const food=getFood(food1,food2,food3,food4,food5);
/////////////////////////////////////////////////////
// function sum(...numbers){
//    let result =0;
//    for(let number of numbers){
//       result += number;
//    }
//    return result;
// }
//const total =sum(1,2,3,4,5);
//console.log(`Your total is $${total}`);

///////////////////////////////////////
// function getAvarage(...numbers){
// let result = 0;
// for(let number of numbers){
//    result += number;

// }
// return result/numbers.length;
// }
// const total= getAvarage(75,100,85);
// console.log(`Your total is $${total}`);
///////////////////////////////////////////////////////


// function combineStrings(...strings){
//    return strings.join(" ");
// }

// const fullName = combineStrings("Mr","Spongebob","Squarepants","III");
// console.log(fullName);
/////////////////////////////////////////////////////
// function generatePassword (length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
   
//    const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
//    const uppercaseChars= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//    const numberChars="0123456789";
//    const symbolChars="!@#$%^&*()_+-=";

//    let allowedChars="";
//    let password ="";

//    allowedChars +=includeLowercase?lowercaseChars:"";
//    allowedChars +=includeUppercase?uppercaseChars:"";
//    allowedChars +=includeNumbers? numberChars:"";
//    allowedChars +=includeSymbols?symbolChars:"";
//    console.log(allowedChars)

//    if(length <=0){
//       return `(password length must be at least 1)`;

//    }


//    return "";
// }
// const passwordLength =12;
// const includeLowercase=true;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = true;

//  const password=generatePassword(passwordLength,
//                                  includeLowercase,
//                                  includeUppercase,
//                                  includeNumbers,
//                                  includeSymbols);
//      console.log(`Generated password: ${password}`)     
     
     
     //////////////////////////////////////////////////////////////////////////
     //              callback = a function that is passed as an argument
     //                            to another function


    
   //   goodbye();
   //   hello();

   //   function hello(){
   //    console.log("Hello!")
   //   }
   //   function goodbye(){
   //    console.log("Good Bye!")
   //   }

   ////////////
   // hello()
   // goodbye();
   

   // function hello(){
   //  console.log("Hello!")
   // }
   // function goodbye(){
   //  console.log("Good Bye!")
   // }
   //////////////
   // hello()
   // goodbye();
   

   // function hello(){
   //    setTimeout(function(){
   //       console.log("Hello!")
   //     },4000)
   // }
   // function goodbye(){
   //  console.log("Good Bye!")
   // }
   /////////////////////////
//    hello(leave);
//   function hello(callback){
//          console.log("Hello!");
//          callback();
//    }
//    function wait(){
//       console.log("Wait!")
//    }
//    function leave(){
//       console.log("Leave!")
//    }
//    function goodbye(){
//     console.log("Good Bye!")
//   }
/////////////////////////////////////////////

// sum(displayConsole, 1,2);

// function sum(callback,x,y){
//    let result = x + y;
//    callback(result);
// }
// function displayConsole(result){
//    console.log(result);
// }

// function displayPage(result){
//    document.getElementById("myPa3").textContent = result;
// }
///////////////////////////////////////////////////////////////////////

//        forEach() = method used to iterate over the elements
//                   of an array and apply a specified function (callback)
//                     to each element


//             array.forEach(callback)

//let numbers = [1,2,3,4,5];


//numbers.forEach(square);
//numbers.forEach(triple);
// numbers.forEach(cube);
// numbers.forEach(display);


// function double(element,index,array){
//    array[index]= element *2;
// }

// function triple(element,index,array){
//    array[index]= element *3;
// }
// function square(element,index,array){
//    array[index]= Math.pow(element,2);
// }

// function cube(element,index,array){
//    array[index]= Math.pow(element,3);
// }




// function display(element){
//    console.log(element);
// }

///////////////

 //let fruits = ['apple','orange','banana','coconut'];
//let fruits = ['APPLE','ORANGE','BANANA','COCONUT'];
//fruits.forEach(capitalize);
//fruits.forEach(upperCase);
//fruits.forEach(display);

// function upperCase(element,index,array){
//    array[index] = element.toUpperCase();
// }
// function upperCase(element,index,array){
//    array[index] = element.toLowerCase();
// }

// function capitalize(element,index,array){
//    array[index] = element.charAt(0).toUpperCase()+element.slice(1);
// }



// function display(element){
//    console.log(element);

// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////                   .map() = accepts a callback and applies that function
/////////////                           to each element of an array, then return a new array


// const numbers = [1,2,3,4,5];
// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// console.log(cubes)

// console.log(squares);

// function square(element){
//    return Math.pow(element,2)
// }


// function cube(element){
//    return Math.pow(element,3)
// }

////////////////////////////////////

//const students = ['Diloram','Nurmuhammad','Sofia','Zilola','Shahzoda'];
//const students = ['DILORAM', 'NURMUHAMMAD', 'SOFIA', 'ZILOLA', 'SHAHZODA']
//const studentsUpperCase = students.map(upperCase);
//const studentsLowerCase = students.map(lowerCase);
//console.log(studentsUpperCase)
//console.log(studentsLowerCase);

// function upperCase(element){
//    return element.toUpperCase()
// };

// function lowerCase(element){
//    return element.toLowerCase()
// }

////////////////////////////////////////////////////////////////////////////////
// const dates = ['2024-1-10','2025-2-20','2026-3-30'];
// const formattedDates = dates.map(formatDates);

// console.log(formattedDates);

// function formatDates (element) {
//    const parts = element.split("-");
//    return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }
///////////////////////////////////////////////////////
//////////////////////////////////////////////
//  .filter() = creates a new array by filtering out elements


// let numbers = [1,2,3,4,5,6,7];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);
// console.log(evenNums);

// console.log(oddNums)

// function isEven(element){
//    return element % 2 === 0;
// }

// function isOdd(element){
//    return element % 2 !== 0;
// }

///////////////////////////////////////////
// let ages = [16,17,18,18,19,20,60,70];
// let adults = ages.filter(isAdult);
// let children = ages.filter(isChild);
// console.log(adults);

// console.log(children)

// function isAdult(element){
//    return element >= 18;
// }

// function isChild(element){
//    return element <18;
// }
//////////////////////////////////////////////////////

// const words = ["apple",'coconut', "banana", 'kiwi', "pomergranate", "lemon"];
// const shortWords = words.filter(getShortWords);
// const longWords = words.filter(getLongWords);
// console.log(shortWords);
// console.log(longWords)


// function getShortWords (element){
//    return element.length <= 6; 
// }

// function getLongWords (element){
//    return element.length > 6; 
// }




///////////////////////////////////////////////////////////////////////
///       .reduce() = reduce the elements of an array 
///                  to a single value.


// const prices = [5, 30, 10, 25, 15, 20];

// const total = prices.reduce(sum);

// console.log(`$${total.toFixed(2)}`);

// function sum (accumlator, element){
//    return accumlator + element;
// }

// function sum (previous, next){
//    return previous + next;
// }
//////////////////////////////////////////

// const grades = [75, 50, 90, 65, 80, 95];

// const maximum = grades.reduce(getMax);
// const minimum = grades.reduce(getMin);


// console.log(maximum);
// console.log(minimum);


// function getMax (accumulator, element){
//    return Math.max(accumulator, element)
// }

// function getMin (accumulator, element){
//    return Math.min(accumulator, element)
// }
/////////////////////////////////////////////////////////////////////////

//  function declaration = define a reusable block of code 
//                         that performs a spacific task

// function hello(){
//    console.log("Hello!");
// }
///////////////////////////////////////////
// function declaration
// const numbers = [1,2,3,4,5,6,7];
// const squares = numbers.map(square);

// console.log(squares);

// function square(element){
//    return Math.pow(element,2);
// }
//////////////////////////////////
///           function expresion
// const numbers = [1,2,3,4,5,6,7];
// const squares = numbers.map(function(element){
//    return Math.pow(element,2);
// });

// const cubes = numbers.map(function(element){
//    return Math.pow(element,3);
// });

// const evenNums = numbers.filter(function(element){
//    return element %2 ===0;
// });

// const oddNums = numbers.filter(function(element){
//    return element %2 !==0;
// });

// const total = numbers.reduce(function(accumlator,element){
//    return accumlator+element;
// });

// console.log(squares);
// console.log(cubes);
// console.log(evenNums);
// console.log(oddNums);
// console.log(total);
////////////////////////////////////////////////////////////////////////
///   arrow function  =  a concise way to write function expressions good for simple
//                       functions that you use only once (parametrs)
//                       => some code

// const hello = () => console.log("Hello");
// hello()
////////////////////////////////

// const hello = (name) => console.log(`Hello ${name}`);
// hello("Diloram");
//////////////////////////////////
// const hello = (name,age) => {console.log(`Hello ${name}`)
//                           console.log(`You are ${age} years old`)};
// hello("Diloram",37);
///////////////////////////////////

// setTimeout(hello,3000);
// function hello(){
//    console.log("Hello Diloram")
// }


///////////////////////////
// setTimeout( hello = (name) => {
//    console.log("Hello Diloram")
// },3000)

//////////////////////////////////////
//setTimeout( () =>console.log("Helllo"),3000)
/////////////////////////////////////////////////
// const numbers = [1,2,3,4,5,6];
// const squares = numbers.map((element) => Math.pow(element,2));
// const cubes = numbers.map((element) => Math.pow(element,3));
// const evenNums = numbers.filter((element) => element % 2 ===0);
// const oddNums = numbers.filter((element) => element % 2 !==0);
// const total = numbers.reduce((accumlator,element) => accumlator + element);

// console.log(squares);
// console.log(cubes);
// console.log(evenNums);
// console.log(oddNums);
// console.log(total);
//////////////////////////////////////////////


// function expressions =  a way to define functions as values or 
//                         variable

// const hello = function(){
//    console.log("Hello!");
// }
// hello()

//setTimeout(hello,3000)
///////////////////////
// setTimeout(function(){
//    console.log("Good Buy")
// },3000)

////////////////////////////////////////////////////////////////////////////////////////////////////////
///
///
///  Object = A collection of related proporties and /or methods
////            can represent real world objects (people,products,places)
////            Object = {key:value,
////                      function()}
//////////////////////////////////////////
// const person1 = {
//      firstName: "Diloram",
//      lastName: "Akhmadalieva",
//      age:37,
//      isEmployed:true,
//      sayHello:function(){console.log("Hi I am Diloram!")},
//      eat:function(){console.log("I am eating a Krabby Patty")},
//      sayBye:function(){console.log("Good Bye!")}
// };
// const person2 = {
//    firstName: "Patrick",
//    lastName: "Star",
//    age:42,
//    isEmployed:false,
//    sayHello:function(){console.log("Hey I'm Patrick...")},
//    eat:()=>console.log("I am eating roast beef,chicken,pizza and plow"),
//    sayBye:function(){console.log("Bye....")}
//};

// console.log(person1.firstName);
// console.log(person2.firstName);
// console.log(person1.lastName);
// console.log(person2.lastName);
// console.log(person1.age);
// console.log(person2.age);
// console.log(person1.isEmployed);
// console.log(person2.isEmployed);
///////////////////////////////////////
// person1.sayHello();
// person2.sayHello();
// person1.sayBye();
// person2.sayBye();
// person1.eat();
// person2.eat();
///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// this = reference to this object where this is used
//       (the object depends on the immediate context)
//           person.name = this.name

// const person1 = {
//    name: "Diloram",
//    lastName: "Akhmadalieva",
//    age:37,
//   favFood:"Humburger",
//    sayHello:function(){console.log(`Hi I am ${this.name}`)},
//    eat:()=>{console.log(`${this.name} is eating ${this.favFood}`)}
  
// };
// const person2 = {
//    name: "Muhammad",
//    lastName: "Akhmad",
//    age:39,
//   favFood:"Chicken",
//    sayHello:function(){console.log(`Hi I am ${this.name}`)},
//    eat:()=>console.log(`${this.name} is eating ${this.favFood}`)
  
// };
//person1.sayHello();
//person1.eat();
//person2.eat();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   constructor = special method for defining the 
//                 proporties and methods of objects


// const car1 = {
//    make:"Ford",
//    model:"Mustang",
//    year:2024,
//    color:"red",
//    drive:function(){console.log(`You drive the ${this.model}`)}
// }
// const car2 = {
//    make:"Chevrolet",
//    model:"Camaro",
//    year:2025,
//    color:"blue",
//    drive:function(){console.log(`You drive the ${this.model}`)}
// }
// const car3 = {
//    make:"Dodge",
//    model:"Charger",
//    year:2026,
//    color:"silver",
//    drive:function(){console.log(`You drive the ${this.model}`)}
// }
///////////////////////////////////////////////////////


// function Car(make,model,year,color){
//    this.make = make,
//    this.model = model,
//    this.year = year,
//    this.color = color,
//    this.drive = function(){console.log(`You drive the ${this.model}`)}

// }

// const car1 = new Car("Ford","Mustang",2024,"red");
// const car2 = new Car("Chevrolet","Camaro",2025,"blue");
// const car3 = new Car("Dodge","Charger",2026,"silver");
 
// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);


// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);

// console.log(car3.make);
// console.log(car3.model);
// console.log(car3.year);
// console.log(car3.color);

// car1.drive();
// car2.drive();
// car3.drive();
///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   class = (ES6 feature) provides a more structured and cleaner way to
//          work with objects compared to traditional constructorfunctions
//          ex. static keyword,encapsulation,inheritance


// class Product{
//    constructor(name,price){
//       this.name = name;
//       this.price = price;
//    }
//    displayProduct(){
//       console.log(`Product: ${this.name}`);
//       console.log(`Product: $${this.price.toFixed(2)}`);
//    }
//    calculateTotal(salesTax){
//       return this.price + (this.price * salesTax);
//    }
// }
// const salesTax = 0.05;

// const product1 = new Product("shirt" , 19.98);
// const product2 = new Product("Pants" , 22.50);
// const product3 = new Product("UnderWear" , 100.00);

//product1.displayProduct();
//product2.displayProduct();
//product3.displayProduct();

//const total = product1.calculateTotal(salesTax);
//console.log(`Total price (with tax): $${total.toFixed(2)}`);
//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////


///       static = keyword that defines proporties or methods that belong
///               to a class itself rather than the objects created
//                  from that class (class owns anything static,not the objects)

// class MathUtil{
//    static PI = 3.14159;

//    static getDiametr(radius){
//       return radius * 2;
//    }

//    static getCircumference(radius){
//       return 2 * this.PI * radius;
//    }

//    static getArea(radius){
//       return this.PI * radius * radius;

//    }
// }

//const mathUtil1 = new MathUtil();

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiametr(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));
/////////////////////////////////////////////////
// class User{
//    static userCount = 0;

//    constructor(username){
//       this.username = username;
//       User.userCount++;

      
//    }

//    static getUserCount(){
//         console.log(`There are ${User.userCount} users online`) 
//    }

//    sayHello(){
//       console.log(`Hello,my username is ${this.username}`)
//    }
// }

// const user1 = new User("Spongebob");
// const user2 = new User("Patrick");
// const user3 = new User("Sandy");
// const user4 = new User("Diloram");

// user1.sayHello();
// user2.sayHello();
// user3.sayHello();
// user4.sayHello();
// User.getUserCount();

// console.log(user1.username);
// console.log(user2.username);
// console.log(user3.username);
// console.log(user4.username);
// console.log(User.userCount)
/////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

//  inheritance = allows a new class to inherit proporties and methods
//                from an existing class (parent -> child)
//                helps with code reusability

// class Animal{
//    alive = true;

//    eat(){
//       console.log(`This ${this.name} is eating`)
//    }
//    sleep(){
//       console.log(`This ${this.name} is sleeping`)
//    }
// }
// class Rabbit extends Animal{
//    name = "Rabbit";

//    run(){
//       console.log(`This ${this.name} is running`);
//    }
// }
// class Fish extends Animal{
//    name = "Fish";

//    swim(){
//       console.log(`This ${this.name} is swimming`);
//    }
// }
// class Fox extends Animal{
//    name = "Fox";

//    run(){
//       console.log(`This ${this.name} is running`);
//    }
// }
// class Hawk extends Animal{
//    name = "hawk";

//    fly(){
//       console.log(`This ${this.name} is flying`);
//    }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const fox = new Fox();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();

// console.log(fish.alive);
// fish.eat();
// fish.sleep();
// fish.swim();

// console.log(fox.alive);
// fox.eat();
// fox.sleep();
// fox.run();

// console.log(hawk.alive);
// hawk.eat();
// hawk.sleep(); 
// hawk.fly();


////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
///       super = keyword is used in classes to call the constructor or 
//               acess he proporties and methods of a parent (superclass)
//               this = this object
//               super = the parent

// class Animal{

//    constructor(name,age){
//       this.name = name;
//       this.age = age;
//    }
//    move(speed){
//       console.log(`The ${this.name} moves at a speed of ${speed}mph`)
//    }
// }
// class Rabbit extends Animal{
//    constructor(name,age,runSpeed){
//       super(name,age);
//       this.runSpeed = runSpeed;
//    }

//    run(){
//       console.log(`This ${this.name} can run`);
//       super.move(this.runSpeed);
//    }

// }
// class Fish extends Animal{
//    constructor(name,age,swimSpeed){
//       super(name,age);
//       this.swimSpeed = swimSpeed;
//    }

//    swim(){
//       console.log(`This ${this.name} can swim`);
//       super.move(this.swimSpeed);
//    }
 
// }
// class Hawk extends Animal{
//    constructor(name,age,flySpeed){
//       super(name,age);
//       this.flySpeed = flySpeed;
//    }

//    fly(){
//       console.log(`This ${this.name} can flying`);
//       super.move(this.flySpeed);
//    }
// }

// const rabbit = new Rabbit("rabbit", 1, 25);
// const fish  = new Fish("fish", 2, 12);
// const hawk = new Hawk("hawk", 3,50);

// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runSpeed);

// console.log(fish.name);
// console.log(fish.age);
// console.log(fish.swimSpeed);

// console.log(hawk.name);
// console.log(hawk.age);
// console.log(hawk.flySpeed);

// rabbit.run();
// fish.swim();
// hawk.fly();
///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
//      getter = special method that makes a proporty readable
//      setter = special method that makes a proporty writable

//      validate and modify a value when reading/writing a proporty

//////////////////////////////////
// class Rectangle{
//    constructor(width,height){
//       this.width = width;
//       this.height = height;
//    }

//    set width(newWidth){
//       if(newWidth > 0){
//          this._width = newWidth;
//       }
//       else{
//          console.error("Width must be a positive number")
//       }
//    }
//    set height(newHeight){
//       if(newHeight > 0){
//          this._height = newHeight;
//       }
//       else{
//          console.error("Height must be a positive number")
//       }
//    }
//    get width(){
//       return `${this._width.toFixed(1)}cm`;

//    }
//    get height(){
//       return `${this._height.toFixed(1)}cm`;

//    }
//    get area(){
//       return `${(this._width * this._height).toFixed(1)}cm`;
//    }
// }
// const rectangle = new Rectangle(3,4);

// rectangle.width = 5;
// rectangle.height = 6;

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);
//////////////////////////////////////////////////////////////////////////

// class Person{
//    constructor(firstName,lastName,age){
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.age= age;
//    }
//    set firstName(newFirstName){
//       if(typeof newFirstName === "string" && newFirstName.length >0){
//          this._firstName = newFirstName;
//       }
//       else{
//          console.error("First name must be a non-empty string");
//       }
      
//    }
//    set lastName(newLastName){
//       if(typeof newLastName === "string" && newLastName.length >0){
//          this._lastName = newLastName;
//       }
//       else{
//          console.error("Last name must be a non-empty string");
//       }
// }
//  set age(newAge){
//    if(typeof newAge === "number" && newAge >= 0){
//       this._age= newAge;
//    }
//    else{
//       console.error("Age must be a non-negative number")
//    }
// }
// get firstName(){
//    return this._firstName;
// }
// get lastName(){
//    return this._lastName;
// }
// get fullName(){
//    return this._firstName + " " + this._lastName;
// }
// get age(){
//    return this._age;
// }
// }

// const person = new Person("Diloram","Akhmadalieva", 37);

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName);
// console.log(person.age);
////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  destructuring = extract values from arrays and objects ,
//                  then assign then to variables in a convenient way
//                   [] = to perform array destructuring
//                   {} = to perform object destructuring
//                   s example

// .....................Example 1  ....................
// SWAP the value of two variables

// let a = 1;
// var b = 2;
// [a, b] = [b, a];
// console.log(a,b);
//////////////////////////////////////////////////
// .....................Example 2 ....................
// SWAP 2 ELEMENTS IN AN ARRAY

// const colors = ['red','green','blue','black','white'];
// [colors[0],colors[4]] = [colors[4],colors[0]];
// console.log(colors)
// .....................Example 3 ....................
// ASSIGN  ARRAY ELEMENTS TO VARIABLEs

//  const colors = ['red','green','blue','black','white'];
//  const [firstColor,secondColor,thirdColor, ...extraColors] = colors;
//  console.log(firstColor);
//  console.log(secondColor);
//  console.log(thirdColor);
//  console.log(extraColors);
//  console.log(...extraColors);
// .....................Example 4 ....................
// EXTRACT VALUES FROM OBJECTS


//const person1 = {
//    firstName:  "Nurmuhammad",
//    lastName: "Tadjibaev",
//    age:26,
//    job: "Frontend developer"
// }
// const person2 = {
//     firstName:  "Diloram",
//     lastName: "Akhmadalieva",
//     age:37,
//     
// }



// const {firstName, lastName, age,job} = person1;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);
// const {firstName, lastName, age,job ="Unemployed"} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);
/////////////////////////////////////////////////////////////////////////
// .....................Example 5 ....................
// DESTRUCTURE IN FUNCTION PARAMETRS

// function displayPerson({firstName,lastName,age,job="Unemployed"}){
//     console.log(`name: ${firstName} ${lastName}`);
//     console.log(`age: ${age}`);
//     console.log(`job: ${job}`);
// }

// const person1 = {
//    firstName:  "Diloram",
//    lastName: "Akhmadalieva",
//    age:37,

// }

// const person2 = {
//   firstName:  "Nurmuhammad",
//   lastName: "Tadjibaev",
//   age:26,
//   job: "Frontend Developer"
// }
// displayPerson(person1);
// displayPerson(person2);



////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
//  nested objects = Objects inside of other objects.
//                   Allows you to represent more complex data structures
//                    Child Objects is enclosed by a Parent object

//                   Person{Adress{},ContactInfo{}}
//                   ShoppingCart{Keyboard{},Mouse{},Monior{}}
// function outerFunction() {
//    var outerVariable = 'I am outer!';
   
//    function innerFunction() {
//      var innerVariable = 'I am inner!';
//      console.log(outerVariable); // Bu funksiya ichidagi o'zgaruvchini chaqirish mumkin
//    }
   
//   innerFunction(); // Ichki funksiya chaqiriladi
//  }
 
//  outerFunction(); // Tashqi funksiya chaqiriladi
////////////////////////////////////////////////////////////////////
// const person = {
//    fullName: "Diloram Ahmadalieva",
//    age:37,
//    isStudent: true,
//    hobbies: ["Karate","jellyfishing","cooking"],
//    address:{
//       street: "124 Conch st",
//       city: "Bikini Bottom",
//       country: "Int. Water"
//    }
// }
// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies);
// console.log(person.hobbies[2]);
// console.log(person.address);
// console.log(person.address.street);
// console.log(person.address.city);

// for(const property in person.address){
//    console.log(person.address[property])

// }
//////////////////////////////////////////

// class Person{

//    constructor(name, age, ...address){
//       this.name = name;
//       this.age = age;
//       this.address = new Address(...address);
//    }
// }

// class Address{

//    constructor(street,city,country){
//       this.street = street;
//       this.city = city;
//       this.country = country;
//    }
// }

// const person1 = new Person("Diloram", 37, "124 Conch St.",
//                                           "Bikki Bottom",
//                                           "Int Watter");
// const person2 = new Person("Nurmuhammad", 27, "100 Conch St.",
//                                           "Rikki Bottom",
//                                           "Int Watter");
// const person3 = new Person("Dilrabo", 17, "126 Conch St.",
//                                           "Bikki Bttom",
//                                           "Int ju");
// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.address);
// console.log(person1.address.city);
// console.log(person1.address.country);


 
///////////////////////////////////////////////////////////////////////////
// const fruits = [{name: "apple", color: "red", calories: 95},
//                 {name: "orange", color: "orange", calories: 45},
//                 {name: "banana", color: "yellow", calories: 105},
//                 {name: "coconut", color: "white", calories: 159},
//                 {name: "pineapple", color: "yellow", calories: 37}];


// console.log(fruits[2]);
// console.log(fruits[2].name);
// console.log(fruits[2].calories);
// console.log(fruits[1].calories);

// fruits.push({name: "grapes", color: "pupple", calories: 62});//ohiriga qoshadi
// fruits.pop();//ohiridan uchiradi

// fruits.unshift({name: "grapes", color: "pupple", calories: 62});//boshiga qoshadi
// fruits.shift();//boshidan uchiradi;

//fruits.splice(1, 2);


//console.log(fruits);
//..............................forEach();

//////////
// fruits.forEach(fruit => console.log(fruit.name));
// fruits.forEach(fruit => console.log(fruit.color));
// fruits.forEach(fruit => console.log(fruit.calories));
// fruits.forEach(fruit => console.log(fruit));
//..........................map()......
// const fruitNames = fruits.map(fruit => fruit);
// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColors = fruits.map(fruit => fruit.color);
// const fruitCalories = fruits.map(fruit => fruit.calories);

// console.log(fruitNames);
// console.log(fruitColors);
// console.log(fruitCalories);
//.................................filter()...............
//  const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
//  const longCalories = fruits.filter(fruit => fruit.calories > 100);
//  const longFruits = fruits.filter(fruit => fruit.name.length  === 6);
//  console.log(yellowFruits);
//  console.log(longCalories);
//  console.log(longFruits);
//.................................reduce()..................

//const maxFruit = fruits.reduce((accumlator,element));
// const maxFruit = fruits.reduce( (max, fruit) =>
//                                  fruit.calories > max.calories ?
//                                  fruit : max);
// const minFruit = fruits.reduce( (min, fruit) =>
//                                  fruit.calories < min.calories ?
//                                  fruit : min);
// console.log(maxFruit);
// console.log(minFruit);
///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//  sort() = method used to sort elements of array in place.
//            sorts elements as strings in lexicographic order,
//             not alphabetical lexicographic = (alphabet + numbers + symbols)
//             as strings

// let fruits = ["apple", "orange", "coconut", "banana", "pineapple"];
// fruits.sort();
// console.log(fruits);

// let numbers = [9, 8, 5, 6, 4, 7, 2, 3, 10, 1];

// numbers.sort();
// numbers.sort((a, b) => a - b);
// numbers.sort((a, b) => b - a);
// console.log(numbers);
/////////////////////////////////////////////////////////////////////////

// const people = [{name: "Diloram", age: 37, gpa:  3.0},
//                 {name: "Patrick", age: 30, gpa:  1.5},
//                 {name: "Squidward", age: 51, gpa:  2.5},
//                 {name: "Sandy", age: 27, gpa:  4.0}];

//people.sort();
//people.sort((a, b) => a.name - b.name);
//people.sort((a, b) => a.age - b.age);
//people.sort((a, b) => a.gpa - b.gpa);
// people.sort((a, b) => a.name.localeCompare(b.name));
//people.sort((a, b) => b.name.localeCompare(a.name));
//console.log(people);
///////////////////////////////////////////////////////////

// const cards = ["A",  2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K" ];
// cards.sort(() => Math.random() - 0.5);
// console.log(cards)
///////////////////////////////////////////

// const cards = ["A",  2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K" ];

// shuffle(cards)

// console.log(cards);

// function shuffle(array){
//    for(let i = array.length - 1; i > 0; i--){
//       const random = Math.floor(Math.random() * (i + 1));
// [array[i], array[random]] = [array[random],array[i]]
// }
// }
////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

// Date objects = Objects that contain values that represent dates and times
//                  these date objects can be changed and formatted

//const date = new Date();

//console.log(date);
//////////////////////////////////////////////

// Date(year, month, day, hour, minute, second, ms)
// const date = new Date(2024, 2, 15, 5, 6, 5, 10);
// const date = new Date("2024-03-15T12:00:08Z");
// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDay();
// const hour = date.getHours();
// const minute = date.getMinutes();
// const second = date.getSeconds();
// const millisecond = date.getMilliseconds();


// console.log(year)
// console.log(month);
// console.log(day)
// console.log(hour);
// console.log(minute);
//console.log(second)
//console.log(millisecond);
////////////////////////////////////////////////////////////////
// const date = new Date();

// date.setFullYear(2024);
// date.setDate(1);
// date.setMonth(0);
// date.setHours(2);
// date.setMinutes(3);
// date.setSeconds(4);
//date.setMilliseconds(5);

//console.log(date);
////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

// closure = A function defined inside of another function,
//             the inner function has acces to the variables
//             and scope of the outer function.
//             Allow for privte variables and state maintenance
//             Used frequently in JS frameworks:React,Vue, Angular
 
 

// function outer(){

//    let message = "Hello";

//    function inner(){
//       console.log(message);
//    }
//    inner();
//    message = "GoodBye";
// }

// outer();
//////////////////////////////////////////////////////////////

// function increment(){
//    let count = 0;
//    count++;
//    console.log(`Count increased to ${count}`);

// }
// increment();
// increment();
// increment();
// increment();
// increment();
// increment();
///////////////////////////////////////////////////////////
// let count = 0;
// //count = 100;

// function increment(){
//    count++;
//    console.log(`Count increased to ${count}`);

// }
// increment();
// increment();
// increment();
////////////////////////////////////////////////////////////
// function creatCounter(){

   
//    let count = 0;
//    function increment(){
//       count++;
//       console.log(`Count increased to ${count}`);
      
//    }
//    function getCount(){
//       return count;
//    }
//    return {increment,getCount};
// }
// const counter = creatCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(`The current count is ${counter.getCount()}`)

//counter.count = 0;
//console.log(count);
/////////////////////////////////////////////////////////////////////

// function creatGame(){
//    let score = 0;

// function increaseScore(points){
//    score += points;
//    console.log(`+${points}pts`);
// }
// function decreaseScore(points){
//    score -= points;
//    console.log(`-${points}pts`);
// }
// function getScore(){
//    return score;
// }
// return {increaseScore,decreaseScore,getScore}

// }

// const game = creatGame();



// //score = 16000000000;

// game.increaseScore(5);
// game.increaseScore(6);
// game.decreaseScore(4);
// game.decreaseScore(2);
// console.log(`The final score is ${game.getScore()}pts`)

     
////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

//  setTimeout() = function in Javascrip that allows to schedule
//                 the execution of a function after an amount of time (milliseconds)
//                Times are aproximate (varies based on the workload of the
//                Javascript runtime env.)

//                  setTimeout(callback, delay);
//                  clearTimeout(timeoutId) = can cansel a timeout before it triggers
// function sayHello(){
//    window.alert("Hellooo");
// }

// setTimeout(sayHello, 3000);
//////////////////////////////////////////



// function sayGoodbye(){
//    console.log("Good Bye!");
// }

// setTimeout(sayGoodbye, 6000);
////////////////////////////////////////////////////

// setTimeout(function(){console.log("Hi"),3000});
// setTimeout(() => console.log("HA_HA_HA"),7000);
/////////////////////////clearTimeout...................

// const timeoutId = setTimeout(() => console.log("OOOOpS"),4000);

// clearTimeout(timeoutId);
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////
//   tablitsia umnajeniya..............................................

// for(let i = 2; i < 10; i ++){
//    for(let j = 1; j <= 10; j ++){
//       console.log(`${i} * ${j} = ${i * j} ${n}`); 
      
//    }
  
// }
///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ES6 Module = An external file that contains reusable code
//              that can be imported into other JavaScript files.
//              write resuable code variables, classes finction ... 
//              and more Introdused as part of ESMAScript
//               2015 update
// import {PI, getArea,getCircumference,getVolume} from './mathUtil.js';

// console.log(PI);

// const circumference = getCircumference(10);
// const area = getArea(10);
// const volume = getVolume(10);

// console.log(`${circumference.toFixed(2)}cm`);
// console.log(`${area.toFixed(2)}cm^2`);
// console.log(`${volume.toFixed(2)}cm^3`);
//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
//  synchronous  = Execute line by line consecutively in a sequential manner
//                 Code that waits for an operation complate.

//  asynchronous = Allows muliply operations to be performed concurrently 
//                 without waiting
//                 Does't block the execution flow and allows the program
//                 to continue(I/o operation,network requests,fetching data)
//                 Handled with: Callbacks,Promises,Async/Await


// setTimeout(() => console.log("Task 1"), 3000);
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");

// function func1(callback){
//    setTimeout(() => {console.log("Task 1");
//                      callback()}, 3000);

// }
// function func2(){
//    console.log("Task 2");
//    console.log("Task 3");
//    console.log("Task 4");
// }

// func1(func2);
/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// Error  = An Object that is created to represent a problem that occurs
//          Occur often with user input or establishing a connection


// try { } = Encloses code that might potentialy cause an error
//  catch { } = Catch and handly any thrown Errors from try { }
//  finaly { } = (optional) Always executes. Used mostly for clean up
//               ex. close files,close connections, release resources 

// console.log(x);
// // NETWORK ERRORS
// // PROMISE REJECTION
// // SECURETY ERRORS 

// console.log("You have reached the end!")
/////////////////////////////////////////////////////////

//try{
  // console.log("Hello");
// NETWORK ERRORS
// PROMISE REJECTION
// SECURETY ERRORS 
//}
// catch(error){
//    //console.log(error);
//    console.error(error);
// }
// finally{
//    // Close files
//    // Close connections 
//    // Release resources 
//    console.log("This always executes");
// }
// console.log("You have reached the end!")
////////////////////////////////////////////////////////////////////////
// const dividend = window.prompt("Enter a dividend: ");
// const divisor = window.prompt("Enter a divisor: ");

// const result = dividend / divisor;
// console.log(result)
//////////////////////////////////////////////////////////////////
// try{
//    const dividend = window.prompt("Enter a dividend: ");
//    const divisor = window.prompt("Enter a divisor: ");
//    if(divisor == 0){
//       throw new Error("You can't divide by zero!");
//    }
//    const result = dividend / divisor;
//    console.log(result)
// }
// catch(error){
//    console.error(error)
// }
///////////////////////////////////////////////////////////////////////////////
// try{
//    const dividend =Number(window.prompt("Enter a dividend: "));
//    const divisor =Number(window.prompt("Enter a divisor: "));
//    if(divisor == 0){
//       throw new Error("You can't divide by zero!");
//    }
//    if(isNaN(dividend) || isNaN(divisor)){
//       throw new Error("Values must be a number")
//    }
//    const result = dividend / divisor;
//    console.log(result)
// }
// catch(error){
//    console.error(error)
// }

// console.log("You have reached the end!")
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

//    DOM = DOCUMENT OBJECT MODEL
//

const username = "Diloram";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest`: username;

////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
//  element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select or multiple HTML elements
//                      from the DOM (DOcunent Object Model)

// 1.document.getElementById("");         //ELEMENT OR NULL
// 2.document.getElementsByClassName("")  //HTML COLLECTION
// 3.document.getElementsByTagName("")    //HTML COLLECTION
// 4.document.querySelector("")           // ELEMENT OR NULL
// 5.document.querySelectorAll("")        //NODELIST

const myHfive = document.getElementById("my-hfive");
myHfive.style.backgroundColor = "yellow";

