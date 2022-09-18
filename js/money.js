document.getElementById('Total-cost-button').addEventListener('click', function () {
    const foodCost = document.getElementById('food-cost');
    const foodCostAmount = foodCost.value;

    // get current cost 
    const TotalCost = document.getElementById('total-expenses');
    const totalCostNumber = TotalCost.innerText;
    TotalCost.innerText = foodCostAmount;
    console.log(totalCostNumber);

    //clear input field 
    foodCost.value = '';




})