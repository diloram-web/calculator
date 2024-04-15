// const display=document.getElementById('display');

// function appendToDisplay(input){
//     display.value += input;
// }

// function clearDisplay(){
//     display.value = "";
// }

// function calculate(){
//     try{
//         display.value = eval(display.value);
//     }
//     catch(error){
//         display.value = 'Error';
//     }
// }


// let username;
// document.getElementById('mySubmit').onclick=function(){
//     username=document.getElementById('myText').value;
//     document.getElementById('myH1').textContent=`Hello ${username}`
// };


// const fruits=[{name:'apple',color:'red',calories:95},
//               {name:'orange',color:'orange',calories:45},
//               {name:'banana',color:'yellow',calories:105},
//               {name:'coconut',color:'white',calories:159},
//               {name:'pineapple',color:'yellow',calories:37},

// ]

// const yellowFruits=fruits.filter(fruit=>fruit.color === 'yellow');
// const lowcalFruits=fruits.filter(fruit=>fruit.calories < 100);


//console.log(lowcalFruits);


// const str='abc##d#####c';

// const string=str.toUpperCase();
// console.log(string)

// const myButton=document.getElementById('myButton');
// const myImg=document.getElementById('myImg');

// myButton.addEventListener('click',event =>{

//     if( myImg.style.display === 'none'){
//     myImg.style.display ='block';
//     myButton.textContent ='Hide'; 
//     }
//     else{
//         myImg.style.display ='none';
//         myButton.textContent ='Show'; 
//     }
// });
// myButton.addEventListener('click',event =>{

//     if( myImg.style.visibility === 'hidden'){
//     myImg.style.visibility ='visible';
//     myButton.textContent ='Hide'; 
//     }
//     else{
//         myImg.style.visibility ='hidden';
//         myButton.textContent ='Show'; 
//     }
// });


///////////
const inputMy =document.getElementById("inputMy");
const submitMy =document.getElementById("submitMy");
const labelMy =document.getElementById("labelMy");
  let age;


  submitMy.onclick = function(){
    age=inputMy.value;
    age=Number(age);


    if(age >=100){
        labelMy.textContent=`Your are too old to enter this site`;
    }
    else if (age==0){
        labelMy.textContent=`Your can't enter.You were born`;
    }
    else if (age >=18){
        labelMy.textContent=`Your are  old enough to enter this site`;
    }
    else if (age < 0 ){
        labelMy.textContent=`Your age can't be below 0`;
    }
    else{
        labelMy.textContent=`Your must be 18+ to enter this site`;
    }
  }


  //
  const myCheckBox=document.getElementById("myCheckBox");
  const visaBtn=document.getElementById("visaBtn");
  const masterCardBtn=document.getElementById("masterCardBtn");
  const paypalBtn=document.getElementById("payPalBtn");
  const mySubmit=document.getElementById("mySubmit");
  const subResult=document.getElementById("subResult");
  const paymentResult=document.getElementById("paymentResult");







  mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent=`You are subscribed!`;
    }
    else{
        subResult.textContent=`You are Not subscribed!`;
    }
    if(visaBtn.checked){
        paymentResult.textContent=`You are paying with Visa`;
    }
    else if (masterCardBtn.checked){
        paymentResult.textContent=`You are paying with MasterCard`;
    }
    else if (payPalBtn.checked){
        paymentResult.textContent=`You are paying with PayPal`;
    }
    else{
        paymentResult.textContent=`You must select a payment type`;
    }
  }

  const textBox=document.getElementById("textBox");
  const toFahrenheit=document.getElementById("toFahrenheit");
  const toCelsius=document.getElementById("toCelsius");
  const result=document.getElementById("result");

  let temp;

  function convert(){
    if(toFahrenheit.checked){
        //result.textContent = "You selected to Fahrenheit";
        temp=Number(textBox.value);
        temp= temp * 9 / 5 +32;
        result.textContent = temp.toFixed(1) +"F"

    }
    else if(toCelsius.checked){
       // result.textContent = "You selected to Celsius";
       temp=Number(textBox.value);
       temp=(temp-32)*(5/9);
       result.textContent = temp.toFixed(1) +"C"
    }
    else{
        result.textContent = "Select a unit";
    }
  }

  /////////////////////////////////////////


  //            Dice Roll Programm

  function rollDice(){
    const numOfDice = document.getElementById("diceInput").value;
    const diceResult = document.getElementById("diceResult");
    const diceImg = document.getElementById("diceImg");
    const values=[];
    const images=[];

    for(let i=0; i < numOfDice; i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="./dice-roller-img/${value}d.png" alt="Dice ${value}">`);
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImg.innerHTML =images.join('');

  }

  ////////////////////////////////////////////////////
 let timeoutId
  function startTimer(){
   timeoutId = setTimeout(() => window.alert("nonnnooo"),4000);
   console.log("STARTER");

  }

  function clearTimer(){
    clearTimer(timeoutId);
    console.log("CLEARED");
  }
  //////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////
  // ...............clock.........................
  function updateClock(){
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, 0);
    const meridiem = hours >= 12 ? "PM" : "AM"; 
    hours = hours % 12 || 12; 
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
  }
  updateClock();
  setInterval(updateClock,1000)
  //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////
  ///........................stop-watch.............................................

  const displayS = document.getElementById("displayS");
  let timer = null;
  let startTime = 0;
  let elepsedTime = 0;
  let isRunning = false;

  function start(){
    if(!isRunning){
        startTime = Date.now() - elepsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
    console.log(startTime);

  }
function stop(){
    if(isRunning){
        clearInterval(timer);
        elepsedTime = Date.now() - startTime;
        isRunning = false;
    }
    
  }
function reset(){
  clearInterval(timer);
  let startTime = 0;
  let elepsedTime = 0;
  let isRunning = false;
  displayS.textContent = "00:00:00:00"
    
  }
  function update(){
    const currentTime = Date.now();
    elepsedTime = currentTime - startTime;

    let hours = Math.floor(elepsedTime / (1000 * 60 *60));
    let minutes = Math.floor(elepsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elepsedTime / 1000 % 60);
    let milliseconds = Math.floor(elepsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");




    displayS.textContent = `${hours} : ${minutes} : ${seconds} : ${milliseconds}`
    
  }
  ///////////////////////////////////////////////////////////////////////
  const myHfive = document.getElementById("my-hfive");
   myHfive.style.backgroundColor = "yellow";
   ////////////////////////////////////////////////////////////////////////
   const flower = document.getElementsByClassName("flowers");
   flower[1].style.backgroundColor = "pink";
   ///////////////////////////////////////////////////////////////////////////
  const fruitsi = document.getElementsByClassName("fruitsi")
  
   for(let fruit of fruitsi){
    fruit.style.backgroundColor = "red";
   }
   ////////////////////////////////////////////////////////////////////////////

   const h4Elements = document.getElementsByTagName("h4");
   const liElements = document.getElementsByTagName("li");

   for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "yellow"
   }
   for(let liElement of liElements){
    liElement.style.backgroundColor = "lightgreen"
   }




