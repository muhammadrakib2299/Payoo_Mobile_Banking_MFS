// add money process
document.getElementById('btn-add-money').addEventListener('click', function(e){
    e.preventDefault();    
    // get the user input amount
    const addAmount = document.getElementById('add-money-filed').value;
    const pinCode = document.getElementById('pin-filed').value;
   
    if(pinCode === '1234'){
        // current balance
        const currentBalance = document.getElementById('avilable-balance').innerText;
        const updateBalance = parseFloat(currentBalance) + parseFloat(addAmount);
        document.getElementById('avilable-balance').innerText = updateBalance;
    }
    else{
        alert("Wrong Pin code")
    }
});

// Cash Out Money Process
document.getElementById('btn-cashout').addEventListener('click', function(e){
    e.preventDefault();
    // get the user input
    
    const cashoutAmount = document.getElementById('cashout-filed').value;
    const cashoutPin = document.getElementById('cashoutPin-filed').value;

    if(cashoutPin === '1234'){
        const balance = document.getElementById('avilable-balance').innerText;
        const afterCashoutBalance = parseFloat(balance) - parseFloat(cashoutAmount);

        document.getElementById('avilable-balance').innerText = afterCashoutBalance;
    }
    else{
        alert("Wrong Pin");
    }
});

// Show the cash out from in UI
document.getElementById('btn-show-cashout').addEventListener('click', function(){
        document.getElementById('cashout-form').classList.remove('hidden');
        document.getElementById('addmoney-form').classList.add('hidden');
    });

// Show the Add Money from in UI
document.getElementById('btn-show-addmoney').addEventListener('click', function(){
        document.getElementById('cashout-form').classList.add('hidden');
        document.getElementById('addmoney-form').classList.remove('hidden');
    });