const buttonGrid = document.querySelector(".button-grid");
const totalAmount = document.querySelector(".total-amount");
let total = 0;

buttonGrid.addEventListener("click", function (event) {
  console.log("Das ist unser event: ", event);
  const button = event.target.closest("button");
  console.log("Das ist unser button: ", button);

  if (!button || !buttonGrid.contains(button)) return;

  addPrice(button);
  addOrderItemToSideCard(button);
});

function addPrice(button) {
  const priceElement = button.querySelector(".product-price").textContent;
  const price = parseFloat(priceElement.replace(",", "."));

  total += price;
  totalAmount.textContent = total.toFixed(2).replace(".", ",");
}

function addOrderItemToSideCard(button) {
  const buttonContent = button.innerText;
  const orderItem = document.createElement("p");

  orderItem.className = "order-item";
  orderItem.textContent = `${buttonContent}`;
  document.querySelector(".side-card .title").appendChild(orderItem);
}
