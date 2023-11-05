/*
Filename: ComplexScript.js
Content: Complex and elaborate code showcasing various JavaScript concepts and functionalities
*/

// Object representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Object representing a car
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log(`Driving the ${this.make} ${this.model} (${this.year})...`);
  }
}

// Function to calculate the factorial of a number
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Using array map to double each number and store in a new array
const doubledNumbers = numbers.map((num) => num * 2);

// Using array filter to select even numbers and store in a new array
const evenNumbers = numbers.filter((num) => num % 2 === 0);

// Using array reduce to calculate the sum of all numbers
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Creating instances of Person and Car classes
const john = new Person("John Doe", 25);
const bmw = new Car("BMW", "X5", 2021);

// Calling methods on Person and Car objects
john.greet();
bmw.drive();

// Asynchronous function using Promises and async/await
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("Data successfully fetched.");
      } else {
        reject("Error fetching data.");
      }
    }, 2000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();

// Using setInterval to log the current time every 1 second
setInterval(() => {
  const currentTime = new Date().toLocaleTimeString();
  console.log(currentTime);
}, 1000);

// Generating a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Fibonacci sequence generator
function fibonacci(n) {
  const sequence = [0, 1];

  for (let i = 2; i <= n; i++) {
    const nextNum = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNum);
  }

  return sequence;
}

const fibonacciSequence = fibonacci(10);
console.log(fibonacciSequence);

// Complex regular expression example
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const email = "example@example.com";
const isEmailValid = emailPattern.test(email);
console.log(isEmailValid);

// More complex and elaborate code can be added as needed...

// Execution will be terminated here without further code since it only serves as a demonstration.