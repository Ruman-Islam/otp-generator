// OTP input fields
const getOtpField = document.querySelector('.getOtp__field');
const inputOtpField = document.querySelector('.inputOtp__field');
// success/error message
const successMsg = document.querySelector('.notify__success');
const errorMsg = document.querySelector('.notify__error');
// wait/remaining span tag TEXT
const waitSpan = document.getElementById('waiting');
const remainingSpan = document.getElementById('remaining');


// OTP generator
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    if ((pin + '').length === 4) {
        return pin;
    } else {
        return getPin();
    }
}


// OTP generator button
function generateOTP() {
    const otp = getPin();
    getOtpField.value = otp;
}


// put otp
document.querySelector('.calc-body').addEventListener('click', function (event) {
    const number = event.target.value;
    if (isNaN(number)) {
        if (number === 'C') {
            inputOtpField.value = '';
        } else if (number === '<') {
            inputOtpField.value = inputOtpField.value.slice(0, -1);
        }
    } else {
        inputOtpField.value += number;
    }
});


// Verifying otp
let remaining = 3;
function verifyOTP() {
    if (getOtpField.value === inputOtpField.value && getOtpField.value !== '') {
        displayError('block', 'none');
    } else {
        remaining--;
        displayError('none', 'block');
        remainingSpan.innerText = remaining;
        if (remaining === 0) {
            document.querySelector('.submit-btn').setAttribute('disabled', true);
            waitSpan.innerText = 'Please wait a minute';
            remainingSpan.innerText = '';
            setTimeout(refresh, 60000);
        }
    }
}

//  display error/success
function displayError(success, error) {
    successMsg.style.display = success;
    errorMsg.style.display = error;
    document.querySelector('.treasure').style.display = success;
}


// Refresh remaining left
function refresh() {
    remaining = 3;
    document.querySelector('.submit-btn').removeAttribute('disabled');
    remainingSpan.innerText = remaining;
    waitSpan.innerText = 'try left';
    errorMsg.style.display = 'none';
}