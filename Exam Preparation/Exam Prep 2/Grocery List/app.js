const url = 'http://localhost:3030/jsonstore/grocery/';

const addProductBtn = document.getElementById('add-product');
const updateProductBtn = document.getElementById('update-product');
const loadProductsBtn = document.getElementById('load-product');

const [product, count, price] = document.querySelectorAll('input');

const tbody = document.getElementById('tbody');

loadProductsBtn.addEventListener('click', loadAllProducts);
addProductBtn.addEventListener('click', addProduct);

async function loadAllProducts(e) {
    e?.preventDefault();
    tbody.innerHTML = '';
    let allProducts = await fetch(url, { method: 'GET' });
    allProducts = await allProducts.json();

    Object.values(allProducts).forEach(p => {
        let tr = document.createElement('tr');
        tr.setAttribute('id', p._id);
        tr.innerHTML = `<td class="name">${p.product}</td><td class="count-product">${p.count}</td><td class="product-price">${p.price}</td>`;

        let td = document.createElement('td');
        td.classList.add('btn');

        let updateBtn = document.createElement('button');
        updateBtn.addEventListener('click', updateProduct);
        updateBtn.classList.add('update');
        updateBtn.textContent = 'Update';

        let deleteBtn = document.createElement('button');
        deleteBtn.addEventListener('click', deleteProduct);
        deleteBtn.classList.add('delete');
        deleteBtn.textContent = 'Delete';

        td.appendChild(updateBtn);
        td.appendChild(deleteBtn);
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
}

function addProduct(e) {
    let newProduct = { product: product.value, count: count.value, price: price.value };
    fetch(url, { method: 'POST', body: JSON.stringify(newProduct) });
    product.value = '';
    count.value = '';
    price.value = '';
    loadAllProducts(e);
}

function updateProduct(e) {
    let tr = e.target.parentElement.parentElement
    let id = tr.id;

    addProductBtn.disabled = true;
    updateProductBtn.disabled = false;
    product.value = tr.getElementsByClassName('name')[0].textContent;
    count.value = tr.getElementsByClassName('count-product')[0].textContent;
    price.value = tr.getElementsByClassName('product-price')[0].textContent;

    updateProductBtn.addEventListener('click', () => submitChanges(e, id));
}

function submitChanges(e, id) {
    let newProduct = { product: product.value, count: count.value, price: price.value };

    addProductBtn.disabled = false;
    updateProductBtn.disabled = true;
    product.value = '';
    count.value = '';
    price.value = '';

    fetch(url + id, { method: 'PATCH', body: JSON.stringify(newProduct) })
        .then(() => loadAllProducts(e));
}

function deleteProduct(e) {
    let id = e.target.parentElement.parentElement.id;
    fetch(url + id, { method: 'DELETE' })
        .then(() => loadAllProducts(e));
}