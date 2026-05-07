 // Problem 1: Function to filter even numbers from a numeric array
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter(num => num % 2 === 0);
}




// Problem 2: Function that reverses a given string
const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};



// Problem 3: Type check using Union Types and Type Guards
type StringOrNumber = string | number;

function checkType(input: StringOrNumber): string {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
}



// Problem 4: Generic function to safely retrieve an object property
function getProperty<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}



// Problem 5: Interface and function to add 'isRead' status to a book
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
  return {
    ...book,
    isRead: true
  };
};



// Problem 6: OOP implementation with Person and Student classes
class Person {
  constructor(public name: string, public age: number) {}
}

class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age); // Inheriting properties from Person
  }

  // Exact output format: "Name: Alice, Age: 20, Grade: A"
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}



// Problem 7: Function to find the intersection of two numeric arrays
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter(item => arr2.includes(item));
};