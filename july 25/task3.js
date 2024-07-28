document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalExpensesDisplay = document.getElementById('total-expenses');
    const filterDateInput = document.getElementById('filter-date');
    const filterButton = document.getElementById('filter-button');

    let expenses = [];
    expenseForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const amount = parseFloat(document.getElementById('amount').value);
        const description = document.getElementById('description').value;
        const date = document.getElementById('date').value;

        if (amount && description && date) {
            const expense = {
                amount,
                description,
                date
            };

            expenses.push(expense);
            addExpenseToList(expense);
            calculateTotalExpenses();
            expenseForm.reset();
        }
    });
    function addExpenseToList(expense) {
        const li = document.createElement('li');
        li.textContent = `${expense.description}: $${expense.amount} (Date: ${expense.date})`;
        expenseList.appendChild(li);
    }
    function calculateTotalExpenses() {
        const total = expenses.reduce((accumulator, expense) => accumulator + expense.amount, 0);
        totalExpensesDisplay.textContent = `Total Expenses: $${total.toFixed(2)}`;
    }
    filterButton.addEventListener('click', function() {
        const filterDate = filterDateInput.value;

        if (filterDate) {
            const filteredExpenses = expenses.filter(expense => expense.date === filterDate);
            displayFilteredExpenses(filteredExpenses);
        } else {
            displayFilteredExpenses(expenses);
        }
    });
    function displayFilteredExpenses(filteredExpenses) {
        expenseList.innerHTML = ''; 

        filteredExpenses.forEach(expense => {
            addExpenseToList(expense);
        });
    }
});
