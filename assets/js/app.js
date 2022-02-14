// DOM elements capturing common function
function getId(get) {
    const common = document.querySelector(get);
    return common;
}


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
    // getOtpField.value = otp;
    getId('.getOtp__field').value = otp;
}


// put otp
document.querySelector('.calc-body').addEventListener('click', function (event) {
    const number = event.target.value;
    const inputOtpField = getId('.inputOtp__field');
    if (isNaN(number)) {
        if (number === 'C') {
            // inputOtpField.value = '';
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
    const getOtpField = getId('.getOtp__field');
    const inputOtpField = getId('.inputOtp__field');
    if (getOtpField.value === inputOtpField.value && getOtpField.value !== '') {
        displayError('block', 'none');
    } else {
        remaining--;
        displayError('none', 'block');
        getId('.remaining').innerText = remaining;
        if (remaining === 0) {
            document.querySelector('.submit-btn').setAttribute('disabled', true);
            getId('.waiting').innerText = 'Please wait a minute';
            getId('.remaining').innerText = '';
            setTimeout(refresh, 60000);
        }
    }
}

//  display error/success
function displayError(success, error) {
    getId('.notify__success').style.display = success;
    getId('.notify__error').style.display = error;
    document.querySelector('.treasure').style.display = success;
}


// Refresh remaining left
function refresh() {
    remaining = 3;
    document.querySelector('.submit-btn').removeAttribute('disabled');
    getId('.remaining').innerText = remaining;
    getId('.waiting').innerText = 'try left';
    getId('.notify__error').style.display = 'none';
}