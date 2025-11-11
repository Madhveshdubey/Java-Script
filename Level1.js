console.log("Hello World!");

// Statements or COntrol Flow


// if statement =>

let username = null;
if (username== null){
   username = "jon snow"
}
console.log(username);


let username2 = "King in the North";
if (username2== null){
   username = "jon snow"
//    console.log(username2);
}
console.log(username2);

let intro;
if(!intro) intro = "being";
console.log(intro);

let address;
if(!address) address = "Panipat";
 msg = "Hello! You Are Here...."
 console.log(address,".......",msg);
 console.log(`Your address is = ${address}.\nYour Message is = ${msg}.`);

// if-else statement =>

// let num = prompt('Enter a Number = ')
// if(num == 1){
//     console.log("Your number is 1");
// }
// else{
//     console.log(`Your number is ${num}....`);
// }

// Nested if Statement =>

let i = j = 1;
let k = 2;
if(i === j)
    if(i === k)
        console.log("no")
else{
    console.log("yes")
}


let age = prompt("Enter Your age");
if (age >= 18){
    console.log("You are able to Vote");
}
else{
    console.log("you are not able to vote");
}