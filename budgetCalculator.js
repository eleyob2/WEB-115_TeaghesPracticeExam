// Budget Calculator Script

document.getElementById('calculateBudget').addEventListener('click', function() {
    try {
        // Prompt for inputs
        let income = parseFloat(prompt("Enter your total monthly income (without commas):"));
        let expenses = parseFloat(prompt("Enter your estimated monthly expenses:"));
        let months = parseInt(prompt("Enter the number of months to project the budget for:"));

        // Check if inputs are numbers
        if (isNaN(income) || isNaN(expenses) || isNaN(months)) {
            throw new Error("All inputs must be numeric values.");
        }

        // Calculations
        let monthlySavings = income - expenses;
        let totalProjectedSavings = monthlySavings * months;

        // Get the results div
        let resultsDiv = document.getElementById('budgetResults');
        resultsDiv.innerHTML = ''; // Clear previous results

        // Display results
        resultsDiv.innerHTML += `<p>Monthly Income: $${income.toFixed(2)}</p>`;
        resultsDiv.innerHTML += `<p>Monthly Expenses: $${expenses.toFixed(2)}</p>`;
        resultsDiv.innerHTML += `<p>Monthly Savings: $${monthlySavings.toFixed(2)}</p>`;
        resultsDiv.innerHTML += `<p>Total Projected Savings: $${totalProjectedSavings.toFixed(2)}</p>`;

        // Warning if negative savings
        if (monthlySavings < 0) {
            resultsDiv.innerHTML += `<p>Warning: Spending exceeds income!</p>`;
        }

        // Loop to display each month's savings
        for (let i = 1; i <= months; i++) {
            let monthSavings = monthlySavings * i;
            let p = document.createElement('p');
            p.textContent = `Month ${i} Projected Savings: $${monthSavings.toFixed(2)}`;
            resultsDiv.appendChild(p);
        }

    } catch (error) {
        alert("Error: " + error.message);
    }
});