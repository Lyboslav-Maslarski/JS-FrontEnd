function storeProvision(stock, order) {
    let products = {};
    let combined = [...stock, ...order];

    for (let i = 0; i < combined.length; i += 2) {
        let name = combined[i];
        let quantity = combined[i + 1];
        if (products.hasOwnProperty(name)) {
            products[name] = products[name] + Number(quantity);
        } else {
            products[name] = Number(quantity);
        }
    }

    Object.entries(products)
        .forEach(([key, value]) => console.log(`${key} -> ${value}`));
}