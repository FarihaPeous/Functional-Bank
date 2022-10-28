function getInputValue(inputId){
    const  inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    
    const totalAmount = previousTotal + amount;
    totalElement.innerText = totalAmount;
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    // const balanceText = balanceTotal.innerText;
    // const previousBalanceAmount = parseFloat(balanceText);
    const previousBalanceAmount = getCurrentBalance();
    if(isAdd == true){
        const balanceTotalAmount = previousBalanceAmount + amount;
        balanceTotal.innerText = balanceTotalAmount;
    }else{
        const balanceTotalAmount = previousBalanceAmount - amount;
        balanceTotal.innerText = balanceTotalAmount;
    }
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceText);
    return previousBalanceAmount;
}




document.getElementById('deposit-button').addEventListener('click',function(){
    
    const newDepositAmount = getInputValue('deposit-input', true);
    if(newDepositAmount > 0){
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);

    }
    

    // const depositTotal = document.getElementById('deposit-total');
    // const depositText = depositTotal.innerText;
    // const previousDepositAmount = parseFloat(depositText);
    // const depositTotalAmount = previousDepositAmount + newDepositAmount;
    // depositTotal.innerText = depositTotalAmount;

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceText = balanceTotal.innerText;
    // const previousBalanceAmount = parseFloat(balanceText);
    // const balanceTotalAmount = previousBalanceAmount + newDepositAmount;
    // balanceTotal.innerText = balanceTotalAmount;

});

    document.getElementById('withdraw-button').addEventListener('click',function(){
        
        const newWithdrawAmount = getInputValue('withdraw-input');
        const currentBalance = getCurrentBalance();
        if(newWithdrawAmount > 0 && newWithdrawAmount < currentBalance){
            updateTotalField('withdraw-total', newWithdrawAmount);
            updateBalance(newWithdrawAmount, false);
        }
        if(newWithdrawAmount > currentBalance){
            console.log('You cant withdraw your money')
        }
        // const withdrawTotal = document.getElementById('withdraw-total');
        // const withdrawText = withdrawTotal.innerText;
        // const previousWithdrawAmount = parseFloat(withdrawText);
        // const withdrawTotalAmount = previousWithdrawAmount + newWithdrawAmount;
        // withdrawTotal.innerText = withdrawTotalAmount;

        // const balanceTotal = document.getElementById('balance-total');
        // const balanceText = balanceTotal.innerText;
        // const previousBalanceAmount = parseFloat(balanceText);
        // const balanceTotalAmount = previousBalanceAmount - newWithdrawAmount;
        // balanceTotal.innerText = balanceTotalAmount;

        
    
    
});
