// OTP generator
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    if ((pin + '').length === 4) {
        return pin;
    } else {
        return getPin();
    }
}


// OTP input fields
const getOtpField = document.querySelector('.getOtp__field');
const inputOtpField = document.querySelector('.inputOtp__field');
// success/error message
const successMsg = document.querySelector('.notify__success');
const errorMsg = document.querySelector('.notify__error');


// OTP generator button
document.querySelector('.generate__btn').addEventListener('click', function () {
    const otp = getPin();
    getOtpField.value = otp;
});


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
document.querySelector('.submit-btn').addEventListener('click', function () {
    if (getOtpField.value === inputOtpField.value && getOtpField.value !== '') {
        successMsg.style.display = 'block';
        errorMsg.style.display = 'none';
    } else {
        remaining--;
        successMsg.style.display = 'none';
        errorMsg.style.display = 'block';
        document.getElementById('remaining').innerText = remaining;
        if (remaining === 0) {
            document.querySelector('.submit-btn').setAttribute('disabled', true);
            document.getElementById('waiting').innerText = 'Please wait a minute';
            document.getElementById('remaining').innerText = '';
            setTimeout(refresh, 60000);
        }
    }
});

// error message
function refresh() {
    document.querySelector('.submit-btn').removeAttribute('disabled');
    remaining = 3;
    document.getElementById('remaining').innerText = remaining;
    document.getElementById('waiting').innerText = 'try left';
    errorMsg.style.display = 'none';
}