function bubbleSort() {
  const arr = [5, 4, 3, 2, 1];
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  console.log(arr);
}

function insertionSort() {
  const arr = [5, 4, 3, 2, 1];
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (arr[j] > temp && j >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  console.log(arr);
}

function selectionSort() {
  const arr = [5, 4, 3, 2, 1];
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }

    if (min != i) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  console.log(arr);
}

function quickSort(arr) {
  if (arr.length <= 0) return arr;
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++){
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

function mergSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergSort(left), mergSort(right));
}

function merge(leftArr, rightArr) {
  let result = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift());
    } else {
      result.push(rightArr.shift());
    }
  }
  return (result.concat(leftArr, rightArr));
}