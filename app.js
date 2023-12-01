// ## 1. ****Return the Sum of Two Numbers****
// Create a function that takes two numbers as arguments and returns their sum.

// addition(3, 2) ➞ 5
// addition(-3, -6) ➞ -9
// addition(7, 3) ➞ 10

const Sum = (num1, num2) => {
    return num1 + num2;
}
console.log(Sum(3, 2));
console.log(Sum(-3, -6));
console.log(Sum(7, 3));


//  ## 2. ****Convert Minutes into Seconds****

// Write a function that takes an integer `minutes`
//  and converts it to seconds.

// convert(5) ➞ 300
// convert(3) ➞ 180
// convert(2) ➞ 120

const convert = (minutes) => {
    return minutes * 60;
}
console.log(convert(5));
console.log(convert(3));
console.log(convert(2));


// ## 3. ****Return the Next Number from the Integer Passed****

// Create a function that takes a number as an argument, increments the number by +1, and returns the result

// addition(0) ➞ 1
// addition(9) ➞ 10
// addition(-3) ➞ -2


const addition = (num) => {
    return num + 1;
}

console.log(addition(0));
console.log(addition(9));
console.log(addition(-3));



//    ## 4. ****Area of a Triangle****

//    Write a function that takes the base and height of a triangle and `return`
//     its area.


// triArea(3, 2) ➞ 3
// triArea(7, 4) ➞ 14
// triArea(10, 10) ➞ 50


const triangleArea = (base, height) => {
    return 1 / 2 * base * height;
}
console.log(triangleArea(3, 2));
console.log(triangleArea(7, 4));
console.log(triangleArea(10, 10));



// ## 5. ****Return the First Element in an Array****

// Create a function that takes an array containing only numbers and `return` the first element.

// **Examples**

// getFirstValue([1, 2, 3]) ➞ 1
// getFirstValue([80, 5, 100]) ➞ 80
// getFirstValue([-500, 0, 50]) ➞ -500


const getFirstValue = (num) => {
    return num[0];
}
console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));



// 6. Convert Age to Days
// Create a function that takes the age in years and returns the age in days.
// Examples

// calcAge(65) ➞ 23725
// calcAge(0) ➞ 0
// calcAge(20) ➞ 7300

const convertAgeToDays = (age) => {
    return age * 365;
}
console.log(convertAgeToDays(65));
console.log(convertAgeToDays(0));
console.log(convertAgeToDays(20));



// ## 7. ****Power Calculator****

// Create a function that takes `voltage`
//  and `current`
//  and returns the calculated **power**

// circuitPower(230, 10) ➞ 2300

// circuitPower(110, 3) ➞ 330

// circuitPower(480, 20) ➞ 9600

const circuitPower = (voltage, current) => {
    return voltage * current;
}
console.log(circuitPower(230, 10));
console.log(circuitPower(110, 3));
console.log(circuitPower(480, 20));


// ## 8. ****Maximum Edge of a Triangle****

// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

// **Examples**

// nextEdge(8, 10) ➞ 17

// nextEdge(5, 7) ➞ 11

// nextEdge(9, 2) ➞ 10


const nextEdge = (side1, side2) => {
    return (side1 + side2) - 1;
}
console.log(nextEdge(8, 10));
console.log(nextEdge(5, 7));
console.log(nextEdge(9, 2));


// ## 9. ****Return the Remainder from Two Numbers****

// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

// **Examples**

// remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9
// remainder(5, 5) ➞ 0

const remainder = (num1, num2) => {
    return num1 % num2;
}
console.log(remainder(1, 3));
console.log(remainder(3, 4));
console.log(remainder(-9, 45));
console.log(remainder(5, 5));


// 10. Return Something to Me!
// Write a function that returns the string "something" joined with a space " "
// and the given argument a
// Examples

// giveMeSomething("is better than nothing") ➞ "something is better than nothing"
// giveMeSomething("Bob Jane") ➞ "something Bob Jane"
// giveMeSomething("something") ➞ "something something"

const giveMeSomething = (a) => {
    return `something ${a}`;
}

console.log(giveMeSomething("is better than nothing"));
console.log(giveMeSomething("Bob Jane"));
console.log(giveMeSomething("something"));


// 11. Correct the Mistakes
// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do
// Examples

// squared(5) ➞ 25
// squared(9) ➞ 81
// squared(100) ➞ 10000

const correctMistake = (num) => {
    return num * num
}
console.log(correctMistake(5));
console.log(correctMistake(9));
console.log(correctMistake(100));

// 12. Is the Number Less than or Equal to Zero?
// Create a function that takes a number as its only argument and returns true
//  if it's less than or equal to zero, otherwise return false
// Examples

// lessThanOrEqualToZero(5) ➞ false
// lessThanOrEqualToZero(0) ➞ true
// lessThanOrEqualToZero(-2) ➞ true

const lessThanOrEqualToZero = (num) => {
    if (num <= 0) return true;
    return false;
}
console.log(lessThanOrEqualToZero(5));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));


// 13. Sum of Polygon Angles
// Given an n-sided regular polygon n return the total sum of internal angles
//  (in degrees).
// Examples

// sumPolygon(3) ➞ 180
// sumPolygon(4) ➞ 360
// sumPolygon(6) ➞ 720

const sumPolygon = (n) => {
    if (n > 2) {
        return (n - 2) * 180;
    }
    else {
        return "input value has given less than 2";
    }
}

console.log(sumPolygon(3));
console.log(sumPolygon(4));
console.log(sumPolygon(6));


// 14. Basic Variable Assignment
// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with the string "Coder" and store it in a variable called result He needs your help to fix this code.
// Examples
// nameString("Mubashir") ➞ "MubashirCoder"

// nameString("Matt") ➞ "MattCoder"

// nameString("javaScript") ➞ "javaScriptCoder"

const nameString = (name) => {
    return `${name}Coder`;
}

console.log(nameString("Mubashir"));
console.log(nameString("Matt"));
console.log(nameString("javaScript"));


// 15. Less Than 100?
// Given two numbers, return true
//  if the sum of both numbers is less than 100. Otherwise, return false.
// Examples

// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

// lessThan100(3, 77) ➞ true

const lessThan100 = (num3, num4) => {
    let sum = num3 + num4;
    if (sum < 100) {
        return true;
    }
    else {
        return false;
    }
}
console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));
console.log(lessThan100(3, 77));
