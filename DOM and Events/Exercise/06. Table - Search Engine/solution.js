function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchField = document.getElementById('searchField');
      const tableRows = Array.from(document.querySelectorAll('tbody tr'));
      
      for (const row of tableRows) {
         if (row.textContent.includes(searchField.value)) {
            row.classList.add('select');
         } else if (row.classList.contains('select')) {
            row.classList.remove('select');
         }
      }

      searchField.value = '';
   }
}