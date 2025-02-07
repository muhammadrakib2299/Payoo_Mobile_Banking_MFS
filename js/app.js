// select login button 
document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault();
    // get the phone number from the input field
    const phoneNumber = document.getElementById('phone-number-filed').value;
    // get the Pin number from the input filed
    const pinNumber = document.getElementById('pin-number').value;
   
    // console.log(phoneNumber, pinNumber);
    // Temporary user authenticon 
    if(phoneNumber ==='01609' && pinNumber==='1234'){
        console.log('you are login');
        window.location.href = './home.html';
    }
    else{
        alert('Wrong Phone Number or Pin');
    }

});