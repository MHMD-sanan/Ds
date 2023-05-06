const arr = [1,-2,100,-3,40,50,-5];
let max = arr[0];
let tempMax = arr[0];
let i = 1;
for ( i ; i < arr.length; i++){
    let sum = tempMax + arr[i];
    if (sum > max) {
        max = sum;
    } else {
        tempMax = arr[i];
    }
}

console.log(max);