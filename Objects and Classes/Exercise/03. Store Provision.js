function storeProvision(stock, order) {
    let products = {};
    
    for (let i = 0; i < stock.length; i += 2) {
        let name = stock[i];
        let quantity = stock[i + 1];
        products[name] = Number(quantity);
    }

    for (let i = 0; i < order.length; i += 2) {
        let name = order[i];
        let quantity = order[i + 1];
        if (products.hasOwnProperty(name)) {
            products[name] = products[name] + Number(quantity);
        } else {
            products[name] = Number(quantity);
        }
    }

    let entires = Object.entries(products);
    for (const [key, value] of entires) {
        console.log(`${key} -> ${value}`);
    }
}