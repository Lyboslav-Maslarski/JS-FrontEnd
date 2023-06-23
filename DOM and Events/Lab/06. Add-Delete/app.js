function addItem() {
    const ulContainer = document.getElementById('items');
    const input = document.getElementById('newItemText');

    const newLi = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.addEventListener('click', deleteElement);
    anchor.textContent = '[Delete]';
    anchor.href = '#';
    newLi.textContent = input.value;

    newLi.appendChild(anchor);
    ulContainer.appendChild(newLi);

    input.value = '';

    function deleteElement(e) {
        e.currentTarget.parentElement.remove();
    }
}