

document.getElementById('Total-cost-button').addEventListener('click', function(){



    const FoodCost = document.getElementById('food-cost');
    const InputFoodCost = FoodCost.value;
    const NewInputFoodCost = parseFloat(InputFoodCost);
    
    const TotalFoodCostText = document.getElementById('total-expenses');
    const previousFoodCost = TotalFoodCostText.innerText;
    const previousFoodCostAmount = parseFloat(previousFoodCost);
    const NewTotalFoodCost = previousFoodCostAmount + NewInputFoodCost;
    TotalFoodCostText.innerText = NewTotalFoodCost;


    
    // Rent Cost 

     const RentCost = document.getElementById('rent-cost');
     const InputRentCost = RentCost.value;
     const NewInputRentCost = parseFloat(InputRentCost);

     const TotalRentCostText = document.getElementById('total-expenses');
     const previousRentCost = TotalRentCostText.innerText;
     const previousRentCostAmount = parseFloat(previousRentCost);
     const NewTotalRentCost = previousRentCostAmount + NewInputRentCost;
     TotalRentCostText.innerText = NewTotalRentCost;
     


    //  Clothes Cost
    
    const ClothesCost = document.getElementById('clothes-cost');
    const InputClothesCost = ClothesCost.value;
    const NewInputClothesCost = parseFloat(InputClothesCost);

    const TotalClothesCost = document.getElementById('total-expenses');
    const previousClothesCost = TotalClothesCost.innerText;
    const previousClothesCostAmount = parseFloat(previousClothesCost);
    const NewTotalClothesCost = previousClothesCostAmount + NewInputClothesCost;
    TotalClothesCost.innerText = NewTotalClothesCost;



    // Income

    const Income = document.getElementById('Income');
    const InputIncome = Income.value;
    const NewInputIncome = parseFloat(InputIncome);

    const TotalExpensesIncome = document.getElementById('total-expenses');
    const previousIncome = TotalExpensesIncome.innerText;
    const previousIncomeAmount = parseFloat(previousIncome);
    const NewTotalIncome = previousIncomeAmount - NewInputIncome;
    TotalExpensesIncome.innerText = NewTotalIncome; 
   

    


    
  
 })





