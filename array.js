function reverse() {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  console.log("Before reversing");
  console.log(arr);
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  console.log("After reversing");
  console.log(arr);
}

function palindrom() {
  const arr = [1, 1, 2, 1, 1];
  let flag = 1;
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (arr[i] != arr[j]) {
      flag = 0;
    }
  }
  if (flag == 1) {
    console.log("This is a palindrome");
  } else {
    console.log("This is not a palindrome");
  }
}
  // let sum = 0;
  // for (let i = 1; i <= N; i++){
  //     sum += i;
  // }
  // return sum;
function primeDelete() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let flag = 0;
    for (let j = 1; j <= num; j++) {
      if (num % j == 0) {
        flag = flag + 1;
      }
    }
    if (flag == 2) {
      arr.splice(j, 1);
      i--;
    }
  }
  console.log(arr);
}

function insertElement() {
  let arr = [1, 2, 3, 4, 5];
  let p = 2;
  let value = 6;
  for (let i = arr.length; i >= p; i--) {
    arr[i] = arr[i - 1];
  }
  arr[p - 1] = value;
  console.log(arr);
}

function deleteElement() {
  let arr = [1, 2, 3, 4, 5];
  let p = 2;
  for (let i = p - 1; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  console.log(arr);
}

// finding 2nd largest number
function secondLargest() {
  let arr = [1, 2, 3, 4, 5];
  let l1;
  let l2;
  if (arr[0] > arr[1]) {
    l1 = arr[0];
    l2 = arr[1];
  } else {
    l1 = arr[1];
    l2 = arr[0];
  }

  for (let i = 2; i < arr.length; i++) {
    if (a[i] > l1) {
      l2 = l1;
      l1 = a[i];
    }
  }

  console.log(l1);
  console.log(l2);
}
function sumOfNumbers(n) {
  return (n * (n + 1)) / 2;
}
// to print n number of elements in fibonacci series
function fibonacci(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}
// factorial of a number
function factorial(n) {
  let sum = 1;
  for (let i = 1; i <= n; i++){
    sum *= i;
  }
  return sum;
}

// prime number finding
function primeNumber(n) {
  if (n < 2) {
    return false
  }
  for (let i = 2; i <Math.sqrt(n); i++){
    if(n%i===0) return false
  }
  return true
}
// finding power of two
function powerOfTwo(n) {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) return false;
    n /= 2;
  }
  return true;
}
// recursive fibonacci
function fibonacciWithRecursion(n) {
  if (n < 2) return n;
  return fibonacciWithRecursion(n - 1) + fibonacciWithRecursion(n - 2);
}

// recursive factorial
function factorialWithRecursion(n) {
  if (n <2) return n;
  return n*factorialWithRecursion(n-1)
}

// linear search
function searchElement() {
  const arr = [1, 2, 3, 4, 5, 6];
  const t = 6;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === t) return i;
  }
  return -1;
}

// Binary search
function binarySearch(t) {
  const arr = [1, 2, 3, 4, 5, 6];
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (t === arr[middleIndex]) return middleIndex;
    if (t < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

// set ds in js
function forOfLoop() {
  const set = new Set([1, 2, 3]);
  for (const item of set) {
    console.log(item);
  }
}

forOfLoop();