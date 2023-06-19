function createCatalog(input) {
    let productCatalog = {};
    for (const line of input) {
        let category = line.charAt(0);
        if (!productCatalog.hasOwnProperty(category)) {
            productCatalog[category] = [];
        }
        let [productName, price] = line.split(' : ');
        productCatalog[category].push({ productName: productName, price });

    }
    let entries = Object.entries(productCatalog)
        .sort(([fKey, fValue], [sKey, sValue]) => fKey.localeCompare(sKey));

    for (const [key, value] of entries) {
        console.log(key);
        console.log(value
            .sort((f, s) => f.productName.localeCompare(s.productName))
            .map(item => '  ' + item.productName + ': ' + item.price)
            .join('\n'));
    }
}

createCatalog([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)