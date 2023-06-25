function addItem() {
    const menu = document.getElementById('menu');
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');

    let newOption = document.createElement('option');
    newOption.textContent = newItemText.value;
    newOption.value = newItemValue.value;

    menu.appendChild(newOption);
    newItemText.value = '';
    newItemValue.value = '';
}