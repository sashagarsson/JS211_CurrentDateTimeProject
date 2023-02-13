// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

const numToString =() => {
  let num = document.getElementById("num-to-str").value;
  // let num = 15;
let text = num.toString();


document.getElementById("number").innerHTML = text;
}



// Write a JavaScript program to convert a string to the number.

const strToNumber =() => {

  let str=document.getElementById("str-to-num").value;

  let num = Number(str);

  console.log(`This is a ${typeof num}`)

  document.getElementById("results").innerHTML = num;


}

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

  const findTypeOf  =() => {
  
let a = true; 


let b = null;
  

let c;

let d=32

let e = isNaN('Hello')
if (e == true) {
  e ="e is a NaN"
  // console.log(`e is a NaN`)
}

let f = "Hello"

let h2 = document.getElementById("practice")
let html =
`<p>a is a ${typeof a} </p>
<p>b is an object set to null </p>
<p>c is a ${typeof c} </p>
<p>d is a ${typeof d} </p>
<p> ${e} </p>
<p>f is a ${typeof f} </p>`;

h2.insertAdjacentHTML("afterend", html);

  };



const addTwoNums = () => {

  let numOne = document.getElementById("num1").valueAsNumber
  let numTwo = document.getElementById("num2").valueAsNumber

  sum = numOne + numTwo
  document.getElementById("sum-of-numbers").innerHTML=sum
}

// Write a JavaScript program that runs only when 2 things are true.


const isEven = (num) => {
  if(num % 2 === 0) {
    return true
  } else {
    return false
  }
console.log(isEven(2))
console.log(isEven(4))

}

// Write a JavaScript program that runs when 1 of 2 things are true.


const isOdd = (num) => {
  if(num % 2 !== 0) {
    return true
  } else {
    return false
  }
  console.log(2)
  console.log(5)

}


// Write a JavaScript program that runs when both things are not true.  


const ifEven = (num) => {
  if(num % 2 === 0) {
    return true
  } else {
    return false
  }
  console.log(3)
  console.log(5)


}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
