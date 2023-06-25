function editElement(element, textToReplace, newText) {
    while (element.textContent.includes(textToReplace)) {
        element.textContent = element.textContent.replace(textToReplace, newText);
    }
}