// Else if - -------

// let days = prompt("Enter day no. :-");
// if(days == 1){
//     console.log("Day is Monday");
// }
// else if(days == 2){
//     console.log("Day is Tuesday");
// }
// else if(days == 3){
//     console.log("Day is Wednesday");
// }
// else if(days == 4){
//     console.log("Day is Thursday");
// }
// else if(days == 5){
//     console.log("Day is Friday");
// }
// else if(days == 6){
//     console.log("Day is Saturday");
// }
// else if(days == 7){
//     console.log("Day is Sunday");
// }
// else{
//     console.log("There is no Day");
// }


// Switch Statement------ Promt always take input in "string" so in case if we have to take input in promt so we have to take string"""

// let day = prompt("Enter a Day")
// switch(day){
//     case "1" : console.log("Monday")
//     break;
//     case "2" : console.log("Tuesday")
//     break;
//     case "3" : console.log("Wednesday")
//     break;
//     case "4": console.log("Thursday")
//     break;
//     case "5": console.log("Friday")
//     break;
//     case "6" : console.log("Saturday")
//     break;
//     case "7" : console.log("Sunday")
//     break;
//     default: console.log("No Day")
//     break;
// }


// Loops---

// While Loop  type 1

// let count = 1;
// while(count <= 10){ 
// count +=1;    
// console.log(count);
// }

// while loop type 2 table

// let num = 1 , tb = 6, res;
// while (num<= 10){
//     res = num*tb;
//     console.log(`${tb} X ${num} = ${res}`);
//     num+=1
// }
// // console.log(res)

// let val = 4, result = 0, count1 = 1;
// while(count1 <= 10){
//     result += val;
//     count1++
// }
// console.log(result);

// recursion Program------

// function fact(x){
//     if(x<=1){
//         return 1;
//     }
//     else{
//         return x * fact(x-1);
//     }
// }
// console.log(fact(5));

let arr = [1,2,3,4,5,6,7,8,9,10],sum = 0;
for(let ele of arr){
    sum = sum + ele
}
console.log(sum)

