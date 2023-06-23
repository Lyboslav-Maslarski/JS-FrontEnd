function toggle() {
    let btn = document.getElementsByClassName('button')[0];
    let content = document.getElementById('extra');

    if (content.style.display === "none") {
        content.style.display = "block"
        btn.textContent = "Less"
    } else {
        content.style.display = "none"
        btn.textContent = "More"
    }
}