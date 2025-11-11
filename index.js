// Day 1 of Java script
console.log("Hello World");
// var name = "HEllo";
// console.log (name);
// name = "max";
// console.log(name);

// string type

let name = "MAX";
name = "Matthew";
console.log(name);
 
// numeric type
let age = 23;
age = 24
console.log(age);

// bool type

let t = true;
let f = false;
f = true;
console.log(t,f);

//string number concstination
console.log("Name is ",name + " & age is ",age);

let m = null;
console.log(m);

let un = undefined;
console.log(un);

// arithmatic in js

console.log(0xff);

console.log(Math.pow(2,32));// powr fnx

console.log(Math.round(1.9));//nearest integr

console.log(Math.floor(1.9)); // absolute position

console.log( Math.abs(-10)); // convert into positive value

console.log(Math.sqrt(25)); // square root

console.log(Math.random()); // Random value its work on 0 to

console.log(1/0);
 
console.log(Number.isFinite(10));

console.log(Number.isInteger(10));

console.log(Number.parseInt(-10.5));

console.log(Number.parseFloat(-10));

x = NaN;
console.log(Number.isNaN(x));

console.log(Number.isSafeInteger(2**53));


console.log(-1/0);

let d = Date.now();
let now = new Date();
console.log(now);

// Day 2 of Js
let str = "Hello Mohit Muhal";
// str = "max"
// console.log(str.length);
// console.log(str.length = 1);
// console.log(str);


let str2 = "Madhvesh Dubey";
console.log( str, str2);// print

console.log(str+str2);// concate

console.log(str.length);// find length


// string Functions of Indexis

console.log(str.indexOf("l"));

console.log(str.indexOf("k"));

console.log(str.lastIndexOf("l"));

console.log(str.indexOf("l",3));

console.log(str.startsWith("H"));

console.log(str.endsWith("L"));


//  create and modify

console.log(str.replace("H", "M"));

console.log(str.toLowerCase());

console.log(str.toUpperCase());

console.log(str.normalize());

// individual character ko inspect karenge

console.log(str.charAt(15));

console.log(str.charAt(str.length-1));

console.log("x".padStart(8));
console.log("x".padEnd(4));

// space fnx
console.log("    Max    ".trim());
console.log("      Max    ".trimStart());
console.log("    Max    ".trimEnd());

// Micellaneous fnx

console.log("& ".repeat(10));

console.log(String.prototype); //Prototype of String

console.log(7.4 * 8);

console.log("7.4" * "8");

console.log(7.4 + 8);

console.log("7.4" - "8");

console.log("7.4" / "8");


