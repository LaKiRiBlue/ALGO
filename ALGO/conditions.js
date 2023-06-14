//cinema tarifs

// let age = 15;

// if (age < 12) {
//     console.log(price = 8);
//   } else {
//     console.log(price = 10)
//   }

//Write an algorithm which given 3 numbers finds the maximum.

// let nb1 = 11;
// let nb2 = 9;
// let nb3 = 7;
// if (nb1 > nb2) {
//     console.log(nb1);
// } else if (nb2 > nb3) {
//     console.log(nb2);
// } else {
//     console.log(nb3);
// }

//Write an algorithm which throws 3 dices and finds out the number of identical value, three, two or none.

// let a = Math.floor((Math.random() * 6) + 1);
//     console.log(a);
// let b = Math.floor((Math.random() * 6) + 1);
//     console.log(b);
// let c = Math.floor((Math.random() * 6) + 1);
//     console.log(c);
// if (a !== b & b !== c & c !== a) {
//     console.log(0);
// } else if (a == b || b == c || c == a) {
//     console.log(2);
// } else {
//     console.log(3);
// }

//Write an algorithm which given the number of a day returns its name.

// let day = 2;
// if (day == 1) {
//     console.log("Monday");
// } else if (day == 2) {
//     console.log("Tuesday");
// } else if (day == 3) {
//     console.log("Wednesday");
// } else if (day == 4) {
//     console.log("Thursday");
// } else if (day == 5) {
//     console.log("Friday");
// } else if (day == 6) {
//     console.log("Saturday");
// } else if (day == 7) {
//     console.log("Sunday");
// } else {
//     console.log("error");
// }

//A print shop charges 0.12 € the ten first copy, 0.11 € the next 20 and 0.10 € from there. 
//Write an algorithm which given a number of copies and calculates the price.

let nbCopies = 25
const priceone = 0.12
const pricetwo = 0.11
const pricethree = 0.10


if (nbCopies > 0 & nbCopies < 11) {
    console.log(nbCopies*priceone);
} else if (nbCopies > 10 & nbCopies < 31) {
    console.log((priceone*10) + (pricetwo*(nbCopies-10)));
} else {
    console.log((priceone*10) + pricetwo*20 + (pricethree*(nbCopies-30)));
}


