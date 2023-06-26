function solve() {
   const addButtons = Array.from(document.querySelectorAll('.add-product'));
   addButtons.forEach(btn => btn.addEventListener('click', addProduct));
   let products = new Set();
   let totalPrice = 0;
   const checkOutBtn = document.querySelector('.checkout');
   const textarea = document.getElementsByTagName('textarea')[0];
   checkOutBtn.addEventListener('click', checkOut);

   function addProduct(e) {
      let currentContainer = e.target.parentNode.parentNode;
      let product = currentContainer.querySelector('.product-title').textContent;
      let price = Number(currentContainer.querySelector('.product-line-price').textContent);

      products.add(product);
      totalPrice += price;

      textarea.value += `Added ${product} for ${price.toFixed(2)} to the cart.\n`
   }

   function checkOut() {
      textarea.value += `You bought ${Array.from(products).join(', ')} for ${totalPrice.toFixed(2)}.`
      checkOutBtn.disabled = 'true';
      addButtons.forEach(btn => btn.disabled = 'true');
   }
}