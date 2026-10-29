const buttonGrid = document.querySelector(".button-grid");
const totalAmount = document.querySelector(".total-amount");
let total = 0;

buttonGrid.addEventListener("click", function (event) {
  const button = event.target.closest("button");

  if (!button || !buttonGrid.contains(button)) return;

  addPrice(button);
});

function addPrice(button) {
  const priceElement = button.querySelector(".product-price").textContent;
  const price = parseFloat(priceElement.replace(",", "."));

  total += price;
  totalAmount.textContent = total.toFixed(2).replace(".", ",");
}
