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
