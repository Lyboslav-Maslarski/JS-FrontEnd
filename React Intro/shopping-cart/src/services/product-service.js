const url = 'http://localhost:3030/jsonstore/products/';

export async function getAllProducts() {
    const response = await fetch(url, { method: 'GET' });
    return response.json();
}

export async function addProductToCart(name, cost, imgUrl) {
    const response = await fetch(url, { method: 'POST', body: JSON.stringify({ name, cost: Number(cost), imgUrl, isBought: false }) });
    return response.json();
}

export async function buyProduct(productId) {
    const response = await fetch(url + productId, { method: 'PATCH', body: JSON.stringify({ isBought: true }) });
    return response.json();
}

export async function removeProduct(productId) {
    const response = await fetch(url + productId, { method: 'DELETE' });
    return response.json();
}