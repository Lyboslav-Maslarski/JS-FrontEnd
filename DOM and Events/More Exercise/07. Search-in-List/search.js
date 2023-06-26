function search() {
   const search = document.getElementById('searchText');
   const result = document.getElementById('result');
   let matches = 0;

   let listItems = Array.from(document.getElementById('towns').children);

   listItems.forEach(li => {
      if (li.textContent.includes(search.value)) {
         matches++;
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
      } else {
         li.style.fontWeight = 'normal';
         li.style.textDecoration = 'none';
      }
   })
   result.textContent = `${matches} matches found`;
   search.value = '';
}
