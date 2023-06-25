function solve() {
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  let sentences = input.value.split('.').filter(s => s !== '');

  while (sentences.length > 0) {
    let currentSentences = sentences.splice(0, 3);
    let text = currentSentences.map(s => s = s.trim()).join('.') + '.';

    let newP = document.createElement('p');
    newP.textContent = text;
    output.appendChild(newP);
  }
}