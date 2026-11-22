let total = 0;

function addExpense() {
  const name = document.getElementById("name").value;
  const amount = Number(document.getElementById("amount").value);

  if (name === "" || amount <= 0) {
    alert("Enter an expense and an amount.");
    return;
  }

  const item = document.createElement("li");
  item.textContent = name + " - ₹" + amount;
  document.getElementById("expenses").appendChild(item);

  total += amount;
  document.getElementById("total").textContent = total;

  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
}
