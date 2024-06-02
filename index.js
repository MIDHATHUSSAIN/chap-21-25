// Question 1

let first = prompt("enter your first name");
let last = prompt("enter your last name");
let full  = first + last

alert ("have a nice day " + full)

// Question 2

let phone = prompt("enter your phone")

let length = phone.length

alert("your name length is  " + length)

// Question 3

let word1 = "pakistani"
alert(word1.indexOf('n'))

// Question 4

let word2 = "Hello World"
alert(word1.lastIndexOf('l'))

// Question 5

let word = "pakistani"
alert(word1.charAt(3))

// Question 6

let first1 = prompt("enter your first name");
let last1 = prompt("enter your last name");
let full1  = first1.concat(" " , last1) 

alert ("have a nice day " + full1)

// Question 7

let city ="hyderabad"
 alert("islm" + city.slice(5))

 // Question 8

let message = "Ali and Sami are best friends. They play cricket and football together.";

for ( let i =0 ; i < message.length ; i++ ){
    if ( message.slice(i , i+3) === "and"){

        message = message.slice(0 , i) + "&" + message.slice(i+3)
    }
    
}
alert(message)

// Question 9

let stnum = prompt("enter number in string")

stnum = Number(stnum)

alert("your number in string is  ccoverted in number " + stnum)

// Question 10

let wor = "peanuts";

alert(wor.toUpperCase())

// Question 11

let wor1 = "javascript"

alert ("J" + wor1.slice(1))

// Question 12

let num56 = 35.36;
num56 = num56.toString();
num56 = num56.replace(".", "");

alert(num56)

// Question 14

let food = ["cake" , "chips" , "patties" , "cookie"]

let myfood = prompt("enter food name ").toLowerCase()

let flagg = false
for ( let o = 0 ; o < food.length ; o ++ ){

    if ( myfood === food[o]){
        
          document.write("<p>" + food[o] +" is found at " + o +"</p>")
          flagg= true
    }
}
if(!flagg){
    document.write("<p>" + "you food in not in our list" +  "</P>")
}


// Question 15

let pas1 = parseInt(prompt("enter password"))
 if (pas1.length < 6) {
    alert( "Password must be at least 6 characters long." );
}

let firstCharCode = pas1.charCodeAt(0);
if (firstCharCode >= 48 && firstCharCode <= 57) {
    alert("Password should not start with a number.");
}
let hasLetter = false;
let hasNumber = false;

for (let i = 0; i < pas1.length; i++) {
    let charCode = pas1.charCodeAt(i);
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        hasLetter = true;
    } else if (charCode >= 48 && charCode <= 57) {
        hasNumber = true;
    }
}

if (!hasLetter) {
   alert( "Password must contain at least one letter.");
}

if (!hasNumber) {
    alert( "Password must contain at least one number.");
}

// Question 16

let university = " University of Karachi";

for ( let ii = 0 ; ii < university.length ; ii++){

    document.write("<p>" + charAt(ii) + "</p>")
}

// Question 17

let lasttt =prompt("enter your word")

lasttt = lasttt.charAt(lastttlength - 1);
alert("last character is " + lasttt)

// Question 18
let abc = "The quick brown fox jumps over the lazy dog."
let ocur = 0
for(let the = 0 ; the < abc.length ; abc ++ ){

     if ( abc.slice(i , i+3) === "the"){
            ocur = ocur + 1
     }
}
alert("the word occur "+ ocur + "times")