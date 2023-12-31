document.getElementById('depositBtn').addEventListener('click',function(){
    
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    depositField.value = '';
    
    if(isNaN(newDepositAmount)){
        alert('Please provide valid number');
        return;
    }

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    depositTotalElement.innerText = newDepositAmount;
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    
    balanceTotalElement.innerText = currentBalanceTotal;  

    
})