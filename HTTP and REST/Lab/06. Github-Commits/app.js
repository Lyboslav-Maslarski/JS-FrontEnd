async function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const list = document.getElementById('commits');
    const URL = `https://api.github.com/repos/${username}/${repo}/commits`;

    try {
        const allCommitsRes = await fetch(URL);
        const data = await allCommitsRes.json();
        data.forEach(c => {
            let newLi = document.createElement('li');
            newLi.textContent = `${c.commit.author.name}: ${c.commit.message}`;
            list.appendChild(newLi);
        })
    } catch (err) {
        let newLi = document.createElement('li');
        console.log(err);
        newLi.textContent = `Error: ${err.status} (Not Found)`;
        list.appendChild(newLi);
    }
}