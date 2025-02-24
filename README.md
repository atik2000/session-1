# JavaScript কিভাবে কাজ করে

## সূচিপত্র
- [এক্সিকিউশন কনটেক্সট](#এক্সিকিউশন-কনটেক্সট)
- [কল স্ট্যাক](#কল-স্ট্যাক)
- [সিঙ্গেল-থ্রেডেড এবং অ্যাসিঙ্ক্রোনাস](#সিঙ্গেল-থ্রেডেড-এবং-অ্যাসিঙ্ক্রোনাস)
- [মেমরি ম্যানেজমেন্ট](#মেমরি-ম্যানেজমেন্ট)
- [অ্যাডভান্সড কনসেপ্টস](#অ্যাডভান্সড-কনসেপ্টস)
- [মডার্ন JavaScript ফিচারস](#মডার্ন-javascript-ফিচারস)

## ভূমিকা

JavaScript একটি **ইন্টারপ্রেটেড**, **ইভেন্ট-ড্রিভেন**, এবং **সিঙ্গেল-থ্রেডেড** প্রোগ্রামিং ভাষা। এই ডকুমেন্টে আমরা JavaScript-এর মূল কার্যপ্রণালী সম্পর্কে জানব।

## এক্সিকিউশন কনটেক্সট

JavaScript কোড রান করার সময় দুই ধরনের এক্সিকিউশন কনটেক্সট তৈরি হয়:

### Global Execution Context (GEC)
- স্ক্রিপ্ট শুরু হওয়ার সময় তৈরি হয়
- ব্রাউজারে `window` অবজেক্ট থাকে

### Function Execution Context (FEC)
- ফাংশন কল করার সময় তৈরি হয়

প্রতিটি এক্সিকিউশন কনটেক্সট দুটি ফেজে কাজ করে:
1. **Creation Phase**: মেমোরিতে ভ্যারিয়েবল ও ফাংশন আলোকেশন
2. **Execution Phase**: কোড লাইন বাই লাইন এক্সিকিউশন

## কল স্ট্যাক

JavaScript কল স্ট্যাক ব্যবহার করে LIFO (Last In, First Out) প্রিন্সিপল অনুযায়ী। উদাহরণ:

```javascript
function first() {
  console.log("প্রথম ফাংশন");
}

function second() {
  first();
  console.log("দ্বিতীয় ফাংশন");
}

second();
```

### কল স্ট্যাক ফ্লো:
1. `second()` স্ট্যাকে যায়
2. `first()` স্ট্যাকে যায়
3. `first()` শেষ হয়ে স্ট্যাক থেকে বের হয়
4. `second()` শেষ হয়ে স্ট্যাক থেকে বের হয়

## সিঙ্গেল-থ্রেডেড এবং অ্যাসিঙ্ক্রোনাস

JavaScript সিঙ্গেল থ্রেডেড হলেও অ্যাসিঙ্ক্রোনাস অপারেশন সম্ভব করে:

### অ্যাসিঙ্ক্রোনাস কম্পোনেন্টস:
- Web APIs
- Callback Queue
- Event Loop

উদাহরণ:

```javascript
console.log("শুরু");

setTimeout(() => {
  console.log("অ্যাসিঙ্ক্রোনাস টাস্ক");
}, 2000);

console.log("শেষ");
```

## মেমরি ম্যানেজমেন্ট

JavaScript অটোমেটিক গার্বেজ কালেকশন (GC) ব্যবহার করে:
- Mark-and-Sweep অ্যালগরিদম ব্যবহার করে
- অব্যবহৃত মেমরি স্বয়ংক্রিয়ভাবে মুছে ফেলে

## অ্যাডভান্সড কনসেপ্টস

### হোইস্টিং
ভ্যারিয়েবল ও ফাংশন ডেক্লারেশন স্কোপের শীর্ষে উঠে যায়।

### ক্লোজার
একটি ফাংশন অন্য ফাংশনের ভ্যারিয়েবল অ্যাক্সেস করতে পারে:

```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```

### স্কোপ
তিন ধরনের স্কোপ:
- Global Scope
- Function Scope
- Block Scope

## মডার্ন JavaScript ফিচারস

ES6 এবং তার পরবর্তী সংস্করণগুলি JavaScript-এ অনেক নতুন বৈশিষ্ট্য যোগ করেছে।

### ১. লেট ও কনস্ট (Let and Const)

```javascript
let x = 10;
x = 20; // বৈধ

const y = 30;
// y = 40; // ত্রুটি দেখাবে
```

### ২. ডেস্ট্রাকচারিং (Destructuring)

```javascript
// অ্যারে ডেস্ট্রাকচারিং
const arr = [1, 2, 3];
const [a, b] = arr;

// অবজেক্ট ডেস্ট্রাকচারিং
const obj = { name: 'John', age: 25 };
const { name, age } = obj;
```

### ৩. স্প্রেড অপারেটর (Spread Operator)

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
```

### ৪. অ্যারো ফাংশন (Arrow Functions)

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

### ৫. প্রমিজেস (Promises)

```javascript
const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve('Success!');
  } else {
    reject('Error!');
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error));
```

### ৬. এসিঙ্ক/অ্যাওয়েট (Async/Await)

```javascript
const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
```

### ৭. মডিউল সিস্টেম (Modules)

```javascript
// export.js
export const name = 'John';
export const greet = () => console.log('Hello');

// import.js
import { name, greet } from './export.js';
```

### ৮. নতুন বিল্ট-ইন ফিচারস

```javascript
const arr = [1, 2, 3];
console.log(arr.includes(2)); // true

const obj = { a: 1 };
const newObj = Object.assign({}, obj, { b: 2 });
```
