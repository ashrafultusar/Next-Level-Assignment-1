function formatValue(value: string | number | boolean) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
}



function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }

  throw new Error("Invalid Input");
}


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
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};




function getUniqueValues(
  arr1: (number | string)[],
  arr2: (number | string)[]
): (number | string)[] {
  const result: (number | string)[] = [];
  const combined = [...arr1, ...arr2]; 

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

const array1 = [1, 2, 3, 4, 5, 8];
const array2 = [3, 4, 5, 6, 7, 7, 7, 8, 8];






type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};


function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products
    .map((product) => {
      const total = product.price * product.quantity;

      if (product.discount) {
        return total * (1 - product.discount / 100);
      }

      return total;
    })
    .reduce((acc, curr) => acc + curr, 0);
}


const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

