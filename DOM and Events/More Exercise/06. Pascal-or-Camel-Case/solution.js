function solve() {
  let text = document.getElementById('text').value;
  let naming = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');
  let words = text.toLowerCase().split(' ');
  result.textContent = '';

  if (naming === 'Camel Case') {
    result.textContent += words[0];
    for (let index = 1; index < words.length; index++) {
      let word = words[index];
      result.textContent += word.substring(0, 1).toUpperCase() + word.substring(1);
    }
  } else if (naming === 'Pascal Case') {
    for (let index = 0; index < words.length; index++) {
      let word = words[index];
      result.textContent += word.substring(0, 1).toUpperCase() + word.substring(1);
    }
  } else {
    result.textContent = 'Error!';
  }
}