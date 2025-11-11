// For Printing values of array
let arr = [10,20,30,[40,50]];
for(let value of arr){
    console.log(value);
}
console.log(arr)
// console.log(arr);

// -------Loops doesn't work on Objects--------

// For Printing Index of array

let arr2 = [1,2,3,4,5];
for(let index in arr){
    console.log(index);
}
 
// printing value f strings
let str = "Mohit Muhal"
for(let val of str){
    console.log(val);
}

let str2 = "Mohit Muhal"
for(let ind in str2){
    console.log(ind);
}

// Creating of object

let obj = {x:3 , y:4, z:5}
console.log(obj.x);

let sparseArray = [1,2,3,4,,,,,,5,,,,,6,,,,7,,,,,8,];
console.log(sparseArray[9]);


// table in java script
let num = 5;
for(let i = 1; i<=10; i++){
    console.log(num*i)
}
// let num2 = 5;
// for(let i = 10; i>=1; i--){
//     console.log(num2*i)
// }

// 
// Bitwise Operator in Java script

let a = 10;
console.log(a <= 10 & 10 >= a);

// IN operaton in object

let ob = {x:1, y:2, z:3};
console.log("x"in obj);
console.log("y"in obj);
console.log("z"in obj);
console.log("n"in obj);

//IN Operaton in array
let ar = [1,2,3,4,5];
console.log(0 in ar);
console.log(5 in ar);

//  Instance of Operator

let a1 = [1,2,3,34];
console.log(a1 instanceof Array);

let a2 = 4;
console.log(a2<10 && 10>a2);

let b2 = 5;
console.log(b2<10 || 10>b2);

let n = 10;
console.log(!(n<10 && 10>n))

// Logical Optr

let val = 5;
console.log(val < 10 && 10 > val);
console.log(val < 10 || 10 < val);
console.log(!(val > 10 || 10 < val));


// Taking a basic input in js

// let val1 = prompt("Enter a Number");
// console.log(val1);
// alert("Get the Hell Outta here Mf");

console.log("5"+2)


// eval() => Which Perform Operators between string For Ex =>

console.log(eval("7+9"));
console.log(eval("7-9"));
console.log(eval("7*9"));
console.log(eval("7/9"));

// Basic Functon & Basic Object

 function fact(n){
    if (n<=1){
        return 1;
    }
    return n*fact(n-1);
 }
 console.log(fact(5));

//  
 function intro(n){
    console.log(n);
 }
 intro("Madhvesh");


// Basic object creation => In Object Loops Doesn't Work

let Obj = {x:1, y:2 ,"Max": "Hi,How Are You"};
console.log(Obj.x);
console.log(Obj.y);
console.log(Obj.Max);

//  Left Shift  => A*(2*b)
console.log(5<<2); //5*(2*2)

// Right shift => A/(2*b)
console.log(5>>2); //5/(2*2)





