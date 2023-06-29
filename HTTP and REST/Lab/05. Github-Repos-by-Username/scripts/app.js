function loadRepos() {
	let username = document.getElementById('username').value;
	let list = document.getElementById('repos');
	const URL = `https://api.github.com/users/${username}/repos`;
	list.children[0].style.display = 'none';

	fetch(URL, { method: 'GET' })
		.then(res => res.json())
		.then(data => data.forEach(repo => {
			let newLi = document.createElement('li');
			let a = document.createElement('a');
			a.textContent = repo.full_name;
			a.href = repo.html_url;
			newLi.appendChild(a);
			list.appendChild(newLi);
		}))
		.catch(err => console.error(err));
}