function solve() {
  let rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let counter = 0;
  const sections = document.getElementsByTagName('section');

  for (let i = 0; i < sections.length; i++) {
    Array.from(sections[i].getElementsByClassName('answer-text'))
      .forEach(btn => btn.addEventListener('click', checkAnswer));
  }


  function checkAnswer(e) {
    let btn = e.target;
    if (rightAnswers.includes(btn.textContent)) {
      counter++;
    }
    let section = btn.parentNode.parentNode.parentNode.parentNode;
    section.style.display = 'none';
    let nextSection = section.nextElementSibling;

    if (nextSection.id === 'results') {
      if (counter === 3) {
        nextSection.getElementsByTagName('h1')[0].textContent =
          'You are recognized as top JavaScript fan!';
      } else {
        nextSection.getElementsByTagName('h1')[0].textContent =
          `You have ${counter} right answers`;
      }
    }

    nextSection.style.display = 'block';
  }
}
