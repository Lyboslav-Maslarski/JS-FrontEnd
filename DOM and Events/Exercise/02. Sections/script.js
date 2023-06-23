function create(words) {
   const mainContainer = document.getElementById('content');

   for (const word of words) {
      let container = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style.display = 'none';

      container.appendChild(paragraph);
      container.addEventListener('click', () => paragraph.style.display = 'block');

      mainContainer.appendChild(container);
   }
}