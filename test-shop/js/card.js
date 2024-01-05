var productAmountDisplay = document.getElementById('productAmount');
var totalPriceDisplay = document.getElementById('totalPrice');
var productAmount = 1; // Initial amount
var pricePerUnit = 155;

function updateAmount(amount) {
  productAmount += amount;
  if (productAmount < 1) {
    productAmount = 1;
  }
  updateAmountDisplay();
}

function updateAmountDisplay() {
  productAmountDisplay.innerText = productAmount;
  var totalPrice = productAmount * pricePerUnit;
  totalPriceDisplay.innerText = '$' + totalPrice.toFixed(2);
}