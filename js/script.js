//Generate Pin
function getPin(){
    const random = Math.random()*10000;
    const pin = (random + '').split('.')[0];

    if(pin.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
};

//Display Generated Pin
function generatePin(){
    const showPin = document.getElementById('show-pin');
    showPin.value = getPin();
}

//Handle Button Event
const buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click', function(event){
    const digit = event.target.innerText;
    if(isNaN(digit)){
        //handle clear
        if(digit === 'C')
        {
            const typeInput = document.getElementById('typed-digits');
            typeInput.value = '';
        }
        //handle back
    }
    else{
        const typeInput = document.getElementById('typed-digits');
        typeInput.value = typeInput.value + digit;
    }
});


//Verify Pin
function verifyPin(){
    const pin = document.getElementById('show-pin').value;
    const typedPin = document.getElementById('typed-digits').value;
    if(pin === typedPin){
        displayMatchResult('block', 'none');
    }
    else{
        displayMatchResult('none', 'block');
    }
}

function displayMatchResult(correctStatus, incorrectStatus){
    const pinMatched = document.getElementById('matched');
    pinMatched.style.display = correctStatus;
    const pinNotMatched = document.getElementById('not-matched');
    pinNotMatched.style.display = incorrectStatus;
}
