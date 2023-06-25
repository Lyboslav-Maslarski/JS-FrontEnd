function extract(content) {
    let element = document.getElementById(content);
    let texts = element.textContent.match(/(?!\()([A-Z a-z]+)(?=\))/g);
    return texts.join('; ');
}