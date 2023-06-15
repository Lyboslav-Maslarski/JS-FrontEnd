function solve(product, quantity) {
    let productPrices = {
        'coffee': 1.50,
        'water': 1.00,
        'coke': 1.40,
        'snacks': 2.00
    }
    console.log(`${(productPrices[product] * quantity).toFixed(2)}`);
}