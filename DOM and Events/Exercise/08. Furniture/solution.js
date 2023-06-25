function solve() {
  const [generateTextArea, buyTextArea] = Array.from(document.getElementsByTagName('textarea'));
  const [generateBtn, buyBtn] = Array.from(document.getElementsByTagName('button'));
  const tbody = document.querySelector('tbody');

  generateBtn.addEventListener('click', generateNewObjs);

  buyBtn.addEventListener('click', generateReceipt);
  function generateNewObjs() {
    let objsToCreate = JSON.parse(generateTextArea.value);
    for (const { img, name, price, decFactor } of objsToCreate) {
      //     tbody.innerHTML += `<tr>
      //     <td>
      //         <img
      //             src=${img}>
      //     </td>
      //     <td>
      //         <p>${name}</p>
      //     </td>
      //     <td>
      //         <p>${price}</p>
      //     </td>
      //     <td>
      //         <p>${decFactor}</p>
      //     </td>
      //     <td>
      //         <input type="checkbox" />
      //     </td>
      // </tr>`;
      let newRow = document.createElement('tr');
      let newImgTd = document.createElement('td');

      let newImg = document.createElement('img');
      newImg.src = img;
      newImgTd.appendChild(newImg);
      newRow.appendChild(newImgTd);

      let newNameTd = document.createElement('td');
      let newNameP = document.createElement('p');
      newNameP.textContent = name;
      newNameTd.appendChild(newNameP);
      newRow.appendChild(newNameTd);

      let newPriceTd = document.createElement('td');
      let newPriceP = document.createElement('p');
      newPriceP.textContent = price;
      newPriceTd.appendChild(newPriceP);
      newRow.appendChild(newPriceTd);

      let newDecTd = document.createElement('td');
      let newDecP = document.createElement('p');
      newDecP.textContent = decFactor;
      newDecTd.appendChild(newDecP);
      newRow.appendChild(newDecTd);

      let newCheckBoxTd = document.createElement('td');
      let newCheckBox = document.createElement('input');
      newCheckBox.type = 'checkbox';
      newCheckBoxTd.appendChild(newCheckBox);
      newRow.appendChild(newCheckBoxTd);

      tbody.appendChild(newRow);
    }
  }

  function generateReceipt() {
    const rows = Array.from(tbody.querySelectorAll('tr'));
    let soldItems = [];
    let sumPrice = 0;
    let sumDecF = 0;
    let rowsChecked = 0;
    for (const row of rows) {
      let input = row.querySelector('input');
      let tds = Array.from(row.querySelectorAll('td'));
      if (input.checked) {
        rowsChecked++;
        soldItems.push(tds[1].children[0].textContent);
        sumPrice += Number(tds[2].children[0].textContent);
        sumDecF += Number(tds[3].children[0].textContent);
      }
    }

    let avgDecF = rowsChecked > 0 ? sumDecF / rowsChecked : 0;

    buyTextArea.value = `Bought furniture: ${soldItems.join(', ')}\n`
      + `Total price: ${sumPrice.toFixed(2)}\n`
      + `Average decoration factor: ${avgDecF}`;

  }
}