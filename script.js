function calculateTotal() {
            let prices = document.querySelectorAll(".prices");
            let total = 0;

            prices.forEach(price => {
                total += parseFloat(price.textContent);
            });

            let table = document.getElementById("groceryTable");

            // Remove existing total row if present
            let existingTotalRow = document.getElementById("totalRow");
            if (existingTotalRow) {
                existingTotalRow.remove();
            }

            let totalRow = document.createElement("tr");
            totalRow.id = "totalRow";

            let totalCell = document.createElement("td");
            totalCell.colSpan = 2;
            totalCell.style.fontWeight = "bold";
            totalCell.textContent = "Total Price: " + total;

            totalRow.appendChild(totalCell);
            table.appendChild(totalRow);
        }