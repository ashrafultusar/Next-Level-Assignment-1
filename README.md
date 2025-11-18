1. What are some differences between interfaces and types in TypeScript?

ভূমিকা

TypeScript আজকের দিনে JavaScript ডেভেলপারদের জন্য এক ধাঁধার মতো, আবার একই সাথে এক অসাধারণ শক্তিশালী টুল। TS ব্যবহার করলে bug কমে, কোড maintain করা সহজ হয়, আর বড় project এ consistency নিশ্চিত করা যায়।

TypeScript শেখার পথে দুটো জিনিস খুব common প্রশ্ন তৈরি করে:

interface vs type এর পার্থক্য কী?

keyof আসলে কী করে?

এখন চলুন এগুলো নিয়ে সহজ ও বাস্তব উদাহরণ সহ কথা বলি।


১.TypeScript-এ interface আর type এর মধ্যকার মূল পার্থক্য

আমরা অনেকেই বলি: দুইটাই তো প্রায় একই! যে কেউ ব্যবহার করা যায়!
হ্যাঁ, এটা আংশিক সত্য।
কিন্তু কিছু advanced ক্ষেত্রে এদের আচরণ আলাদা হয়ে যায়।
এই পার্থক্যগুলো জানলে আপনি ঠিক সময়ে ঠিকটা ব্যবহার করতে পারবেন।


১. Declaration Merging (merge করতে পারে শুধু interface)

ধরুন আপনি একটা User interface লিখলেন। পরে নতুন property যোগ করতে চান।

interface User {
  name: string;
}

interface User {
  age: number;
}



👉 এখানে দুইটা interface স্বয়ংক্রিয়ভাবে merge হলো।

কিন্তু type এ এভাবে করলেই error:

type User = {
  name: string;
}

type User = { age: number }


🟢 Interface = extendable
❌ Type = overwrite করতে গেলে conflict হয়


type ID = string | number
type Status = "active" | "blocked" | "pending"
type TupleExample = [string, number]
এসব interface দিয়ে লেখা যায় না।

মানেই:
➡️ type বেশি flexible
➡️ interface বেশি structural/object focused



৩. Extends vs Intersection (দুইটাই extend করা যায়, কিন্তু syntax আলাদা)
interface A { a: string }
interface B extends A { b: number }


type এ এভাবে:

type A = { a: string }
type B = A & { b: number }


🔎 কখন কোনটা ব্যবহার করব?
Interface ব্যবহার করুন যদি:

✔ OOP-style structure লাগবে
✔ Extend করতে চান
✔ Declaration merging দরকার

Type ব্যবহার করুন যদি:

✔ Union / primitive / tuple লাগবে
✔ Complex type manipulation দরকার
✔ React/utility-first style কোড লিখছেন




2. What is the use of the keyof keyword in TypeScript? Provide an example.



প্রথমে এক লাইনে বুঝি:

keyof কোনো object type এর key গুলোকে union type হিসেবে return করে।

Basic Example:
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
}

type UserKeys = keyof User
// "name" | "age" | "isAdmin"


এখানে UserKeys হল তিনটা string literal এর union।
যতই property থাকে সব keyof-এ list হয়ে যাবে।


Real-world Use Case: Type-safe property access
Without keyof (error ধরবে না)
function getValue(obj: any, key: string) {
  return obj[key];
}

getValue({name:"Tusar"}, "email") 

With keyof
function getValue<T>(obj: T, key: keyof T) {
  return obj[key];
}

getValue({name:"Tusar"}, "name") 
getValue({name:"Tusar"}, "email") 


TypeScript এখন ভুল key ধরতে পারছে—compile time এ!



Dynamic Object Access Function (advanced but useful)
type Person = {
  id: number;
  name: string;
  city: string;
}

function updateField<T>(obj: T, key: keyof T, value: T[keyof T]) {
  obj[key] = value;
}

const p: Person = { id: 1, name: "Ashraful", city: "Dhaka" };
updateField(p, "name", "Tusar"); 
updateField(p, "city", "BD"); 
updateField(p, "country", "Bangladesh");


📌 কী notice করলেন?
👉 Property name ভুল হলে TypeScript ধরে ফেলছে।
👉 Property value-র টাইপ ভুল হলেও error হবে।

এটাই TypeScript-এর আসল জাদু! 

