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
