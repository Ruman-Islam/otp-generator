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
document.querySelector('.generate__btn').addEventListener('click', function () {
    const otp = getPin();
    const getOtpField = document.querySelector('.getOtp__field');
    getOtpField.value = otp;
});


// put otp
document.querySelector('.calc-body').addEventListener('click', function (event) {
    const inputOtpField = document.querySelector('.inputOtp__field');
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