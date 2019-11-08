// Javascript Homework
// Due next Friday Morning
// -----------------------------------------------------------------------------------
// PART I
//
// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------
//
// 1. Fibonacci
// Define function: fib(n)
// Return the nth number in the fibonacci sequence.
function fib(n) {
    if (n <= 0) {
        return NaN;
        console.log('n must be a natural number');
    } else if (n === 1) {
        return 1;
    } else if (n === 2) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}
console.log(fib(8));

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
function bubbleSort(numArray) {
    for (i = 0; i < numArray.length; i++) {
        for (j = 0; j < numArray.length - i; j++) {
            if (numArray[j] > numArray[j + 1]) {
                tempNum = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = tempNum;
                console.log(numArray)
            }
        }
    }
    return numArray;
}
console.log(bubbleSort([5, 4, 3, 2, 1]));

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.
function reverseStr(someStr) {
    outStr = '';
    for (index = someStr.length - 1; index >= 0; index -= 1) {
        outStr += someStr.charAt(index);
    }
    return outStr;
}
console.log(reverseStr('yessir'));

let reverseStrArrow = (someStr) => {
    outStr = '';
    for (index = someStr.length - 1; index >= 0; index -= 1) {
        outStr += someStr.charAt(index);
    }
    return outStr;
}
console.log(reverseStrArrow('nosir'));

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
function factorial(someNum) {
    if (someNum < 0) {
        return NaN;
        console.log('n must be a natural number');
    } else if (someNum === 0) {
        return 1;
    } else if (someNum === 1) {
        return 1;
    } else {
        return someNum * factorial(someNum - 1);
    }
}
console.log(factorial(5));

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
function substring(someStr, length, offset) {
    if (length < 0 || offset < 0) {
        alert('Both length and offset must be positive.')
    } else if (length > someStr.length || offset > someStr.length) {
        alert('Both length and offset must be sorter than the length of input string.')
    } else if (offset + length > someStr.length) {
        alert('Sum of length and offset must be sorter than the length of input string.')
    }
    else {
        return someStr.substring(offset, offset + length);
    }
}
let str = "Hello world!";
console.log(substring(str, 5, 6));

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
function isEven(someNum) {
    quotient = Math.floor(someNum / 2);
    modulus = someNum - quotient * 2;
    return modulus === 0 ? true : false;
}
console.log(isEven(4));

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
function isPalindrome(someStr) {
    for (index = 0; index < Math.ceil(someStr.length / 2); index += 1) {
        if (someStr.charAt(index) !== someStr.charAt(someStr.length - 1 - index)) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome('asdfgsa'));

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. 
// Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *
function printShape(shape, num, char) {
    if (num % 2 === 0 || num <= 0) {
        console.log(`${num} is not an odd natural number.`);
        return;
    }
    if (char.length !== 1) {
        console.log(`${char} must be a single character.`);
        return;
    }
    switch (shape) {
        case "Square": {
            printSquare(num, char);
            break;
        }
        case "Triangle": {
            printTriangle(num, char);
            break;
        }
        case "Diamond": {
            printDiamond(num, char);
            break;
        }
        default: {
            console.log('Shape must be "Square", "Triangle", or "Diamond".')
            break;
        }
    }
}

function printSquare(num, char) {
    for (i = 0; i < num; i++) {
        let row = '';
        for (j = 0; j < num; j++) {
            row += char;
        }
        console.log(row);
    }
}
function printTriangle(num, char) {
    for (i = 0; i < num; i++) {
        let row = '';
        for (j = 0; j < i + 1; j++) {
            row += char;
        }
        console.log(row);
    }
}

function printDiamond(num, char) {
    let midPoint = Math.ceil(num / 2);
    for (i = 1; i <= num; i++) {
        let row = '';
        for (j = 1; j <= num; j++) {
            if (Math.abs(midPoint - j) < midPoint - Math.abs(midPoint - i)) {
                row += char;
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
}
printShape("Square", 3, '*');
printShape("Triangle", 5, '*');
printShape("Diamond", 7, '*');
printShape("UndefinedShape", 7, '*');
printShape("Diamond", 8, '*');
printShape("Diamond", 7, '**');

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
let a = {
    id: 1,
    name: 'Zord',
    hp: 500,
    level: 5,
    type: {
        id: 5,
        name: 'Steel'
    },
    trainer: {
        id: 1,
        name: 'tommy'
    }
}
function traverseObject(someObj) {
    console.log(someObj);
}
traverseObject(a);

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.

let testArr = [1, 2, 3, 4, 5, 6]
deleteElement(testArr);
function deleteElement(someArr) {
    console.log(someArr);
    console.log('Array length is: ' + someArr.length);
    delete someArr[2];
    console.log(someArr);
    console.log('Array length is: ' + someArr.length);
}

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
let testArr2 = [1, 2, 3, 4, 5, 6];
spliceElement(testArr2);
function spliceElement(someArr) {
    console.log(someArr);
    console.log('Array length is: ' + someArr.length);
    someArr.splice(2, 1);
    console.log(someArr);
    console.log('Array length is: ' + someArr.length);
}

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	let john = new Person("John", 30);
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let john = new Person("John", 30);
console.log(john);

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	let john = getPerson("John", 30);
function getPerson(name, age) {
    let person = {
        personName: name,
        personAge: age
    };
    return person;
}
let johnJr = getPerson("John", 30);
console.log(johnJr);

