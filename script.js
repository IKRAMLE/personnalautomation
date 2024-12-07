document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("add-personnel-form");
    const tableBody = document.querySelector(".personnel-table tbody");
    let currentRow = null;

    // Add a new order (personnel)
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        const name = document.getElementById("name").value;
        const product = document.getElementById("surname").value;
        const brand = document.getElementById("age").value;
        const quantity = document.getElementById("department").value;
        const totalPrice = document.getElementById("salary").value;

        // If editing an existing row
        if (currentRow) {
            currentRow.cells[1].textContent = name;
            currentRow.cells[2].textContent = product;
            currentRow.cells[3].textContent = brand;
            currentRow.cells[4].textContent = quantity;
            currentRow.cells[5].textContent = `$${totalPrice}`;
            resetForm();
        } else {
            // Otherwise, add a new row
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${Math.floor(Math.random() * 1000)}</td>
                <td>${name}</td>
                <td>${product}</td>
                <td>${brand}</td>
                <td>${quantity}</td>
                <td>$${totalPrice}</td>
                <td>
                    <button class="btn btn-edit">Edit</button>
                    <button class="btn btn-delete">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        }
        
        resetForm();
    });

    // Edit or delete rows
    tableBody.addEventListener("click", function(event) {
        if (event.target.classList.contains("btn-edit")) {
            currentRow = event.target.closest("tr");
            document.getElementById("name").value = currentRow.cells[1].textContent;
            document.getElementById("surname").value = currentRow.cells[2].textContent;
            document.getElementById("age").value = currentRow.cells[3].textContent;
            document.getElementById("department").value = currentRow.cells[4].textContent;
            document.getElementById("salary").value = currentRow.cells[5].textContent.replace('$', '');
        } else if (event.target.classList.contains("btn-delete")) {
            currentRow = event.target.closest("tr");
            currentRow.remove();
        }
    });

    // Reset the form
    function resetForm() {
        form.reset();
        currentRow = null;
    }
});
