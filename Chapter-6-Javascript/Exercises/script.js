document.addEventListener("DOMContentLoaded", function() {
    const calculateBtn = document.getElementById("calculate-btn");
    const petrolCostInput = document.getElementById("petrol-cost");
    const litersInput = document.getElementById("liters-purchased");
    const totalCostDisplay = document.getElementById("total-cost");

    calculateBtn.addEventListener("click", function() {
        // Get the values from input fields
        const petrolCost = parseFloat(petrolCostInput.value);
        const liters = parseFloat(litersInput.value);

        // Calculate total cost
        const totalCost = petrolCost * liters;

        // Display total cost
        totalCostDisplay.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
    });
});
