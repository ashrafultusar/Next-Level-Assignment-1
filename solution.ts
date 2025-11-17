function formatValue(value: string | number | boolean) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
}

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }

  throw new Error("Invalid Input");
}

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}';`;
  }
}

// const person1 = new Person("John Doe", 30);
// console.log(person1.getDetails());

// const person2 = new Person("Alice", 25);
// console.log(person2.getDetails());

type Item = {
  title: string;
  rating: number;
};

function filterByRating(item: Item[]): Item[] {
  return item.filter((item) => item.rating >= 4);
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

// console.log(filterByRating(books));

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive === true);
}

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

// console.log(filterActiveUsers(users));

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "No";

  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

// printBookDetails(myBook);



function getUniqueValues (arr1: (number | string)[], arr2: (number | string)[]): (number | string)[] {
  const result: (number | string)[] = [];
  const combined = [...arr1, ...arr2]; // just to loop once

  for (let i = 0; i < combined.length; i++) {
    let isUnique = true;
    for (let j = 0; j < result.length; j++) {
      if (combined[i] === result[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      result.push(combined[i]);
    }
  }

  return result;
}


const array1 = [1, 2, 3, 4, 5,8];
const array2 = [3, 4, 5, 6, 7,7,7,8,8];

console.log(getUniqueValues(array1, array2)); 


