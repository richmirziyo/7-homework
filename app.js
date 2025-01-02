// UYGA VAZIFA bo'limdan

// 1

function getLevel2(n) {
  let natija = [];

  for (let i = 1; i <= n; i++) {
    if (i === n) {
      natija.push(2 ** i + 30);
    } else {
      natija.unshift(2 ** i);
    }
  }

  return natija;
}


// 5
function getSingleArr(arr) {
  let result = [];
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] = (count[arr[i]] || 0) + 1;
  }
  for (let num in count) {
    if (count[num] === 1) {
      result.push(Number(num));
    }
  }
  return result;
}


// 6
function swapMinMax(arr) {
  let minIndex = arr.indexOf(Math.min(...arr));
  let maxIndex = arr.indexOf(Math.max(...arr));

  let temp = arr[minIndex];
  arr[minIndex] = arr[maxIndex];
  arr[maxIndex] = temp;

  return arr;
}

// 7
function shiftRight(arr) {
  let  = arr.pop();
  arr.unshift(last);
  return arr;
}

// 1
function getLevel2(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}

// 2
function generateArray(n, A, B) {
  let arr = [A, B];
  for (let i = 2; i < n; i++) {
    let sum = arr.reduce((acc, val) => acc + val, 0);
    arr.push(sum);
  }
  return arr;
}

// 3
function reverseArray(arr) {
  return arr.reverse();
}