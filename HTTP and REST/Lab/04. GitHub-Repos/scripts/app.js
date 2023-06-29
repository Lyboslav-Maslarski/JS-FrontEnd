function loadRepos() {
   const URL = 'https://api.github.com/users/testnakov/repos';
   const result = document.getElementById('res');
   fetch(URL, { method: 'GET' })
      .then(res => res.text())
      .then(data => result.textContent = data)
      .catch(err => console.error(err));
}