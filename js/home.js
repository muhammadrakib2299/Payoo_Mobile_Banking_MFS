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
