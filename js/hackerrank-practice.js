//======================================================================
//=======================HACKER RANK PRACTICE LOG=======================
//======================================================================

/**
*  Day 0: Hello, World!

*   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
*   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
*
*	Parameter:
*   parameterVariable - A string of text.
**/

function greeting(parameterVariable) {
  // This line prints 'Hello, World!' to the console:
  console.log("Hello, World!");

  // Write a line of code that prints parameterVariable to stdout using console.log:
  console.log(parameterVariable);
}

//======================================================================
/**
 *  Day 0: Data Types
 
 *   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
 *   Print three lines:
 *   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
 *   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
 *   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
 *
 *	Parameter(s):
 *   secondInteger - The string representation of an integer.
 *   secondDecimal - The string representation of a floating-point number.
 *   secondString - A string consisting of one or more space-separated words.
 **/

function performOperation(secondInteger, secondDecimal, secondString) {
  // Declare a variable named 'firstInteger' and initialize with integer value 4.
  const firstInteger = 4;

  // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
  const firstDecimal = 4.0;

  // Declare a variable named 'firstString' and initialize with the string "HackerRank".
  const firstString = "HackerRank ";

  // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number type) on a new line.
  console.log(firstInteger + parseInt(secondInteger));

  // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number type) on a new line.
  console.log(firstDecimal + parseFloat(secondDecimal));

  // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The variable 'firstString' must be printed first.
  console.log(firstString + secondString);
}

//======================================================================
/**
 * Day 1: Arithmetic Operators
 *  Calculate the area of a rectangle.
 *
 *  length: The length of the rectangle.
 *  width: The width of the rectangle.
 *
 *	Return a number denoting the rectangle's area.
 **/
function getArea(length, width) {
  let area;
  // Write your code here
  area = length * width;

  return area;
}

/**
 *  Calculate the perimeter of a rectangle.
 *
 *	length: The length of the rectangle.
 *  width: The width of the rectangle.
 *
 *	Return a number denoting the perimeter of a rectangle.
 **/
function getPerimeter(length, width) {
  let perimeter;
  // Write your code here
  perimeter = length * 2 + width * 2;

  return perimeter;
}

//======================================================================
/*
 * Day 1: Functions
 * Create the function factorial here
 *
 * Note: A factorial is a function that multiplies a number by every number below it. For example 5! = 5*4*3*2*1=120.
 */

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }

  return n;
}

//======================================================================
/*
 * Day 1: Let and Const
 *
 */

function main() {
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  const PI = Math.PI;
  const r = readLine();

  // Print the area of the circle:
  let cArea = PI * (r * r);
  console.log(cArea);

  // Print the perimeter of the circle:
  let cPerimeter = 2 * PI * r;
  console.log(cPerimeter);

  try {
    // Attempt to redefine the value of constant variable PI
    PI = 0;

    // Attempt to print the value of PI
    console.log(PI);
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}

//======================================================================
/* Day 2: Conditional Statements: If-Else
 *
 */

function getGrade(score) {
  let grade = " ";

  // Write your code here
  switch (true) {
    case score > 25:
      grade = "A";
      break;
    case score > 20:
      grade = "B";
      break;
    case score > 15:
      grade = "C";
      break;
    case score > 10:
      grade = "D";
      break;
    case score > 5:
      grade = "E";
      break;
    case score > 0:
      grade = "F";
      break;
    default:
      break;
  }

  return grade;
}

//======================================================================
/* Day 2: Conditional Statements: Switch
 *
 */

function getLetter(s) {
  let letter;
  let alphabetA = "aeiou";
  let alphabetB = "bcdfg";
  let alphabetC = "hjklm";
  let alphabetD = "npqrstvwxyz";

  // Write your code here
  switch (true) {
    case alphabetA.indexOf(s[0]) !== -1:
      letter = "A";
      break;
    case alphabetB.indexOf(s[0]) !== -1:
      letter = "B";
      break;
    case alphabetC.indexOf(s[0]) !== -1:
      letter = "C";
      break;
    case alphabetD.indexOf(s[0]) !== -1:
      letter = "D";
      break;
    default:
      break;
  }

  return letter;
}

//======================================================================
/* Day 2: Loops
 *
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  let consonants = "";
  let vowels = "aeiouAEIOU";

  for (let i of s) {
    if (vowels.includes(i)) {
      console.log(i);
    } else {
      consonants += i + "\n";
    }
  }

  return console.log(consonants);
}

//======================================================================
/* Day 3: Arrays
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  let largest = 0;
  let secondLargest = 0;

  // Complete the function
  for (let current = 0; current < nums.length; current++) {
    if (nums[current] > largest) {
      secondLargest = largest;
      largest = nums[current];
    } else if (nums[current] > secondLargest && nums[current] < largest) {
      secondLargest = nums[current];
    }
  }

  return secondLargest;
}

//======================================================================
/* Day 3: Try, Catch, and Finally
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */

function reverseString(s) {
  let errorMessage = "s.split is not a function \n" + s;

  try {
    let reversal;
    if (typeof s === "string") {
      reversal = s.split("").reverse().join("");
      console.log(reversal);
    } else {
      throw errorMessage;
    }
  } catch {
    console.log(errorMessage);
  }
}

//======================================================================
/* Day 3: Throw
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */

function isPositive(a) {
  let negativeError = "Negative Error";
  let zeroError = "Zero Error";

  if (a > 0) {
    return "YES";
  }

  // 0 is the only digit that returns false
  throw Error(a ? negativeError : zeroError);
}

//======================================================================
/* Day 4: Create a Rectangle Object
 * Complete the Rectangle function
 */

function Rectangle(a, b) {
  let rectangle = {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b,
  };

  return rectangle;
}

//======================================================================
/* Day 4: Count Objects
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */

function getCount(objects) {
  let counter = 0;

  for (let o of objects) {
    if (o.x == o.y) {
      counter++;
    }
  }

  return counter;
}

//======================================================================
/* Day 4: Classes
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  perimeter(sides) {
    let p = 0;
    for (let current = 0; current < this.sides.length; current++) {
      p += this.sides[current];
    }
    return p;
  }
}

//======================================================================
/* Day 4: Classes*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}
Rectangle.prototype.area = function (w, h) {
    return this.w * this.h;
}
class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}
