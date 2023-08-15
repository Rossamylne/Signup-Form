var passVal = document.getElementById("password");
var passConf = document.getElementById("confirm_password");

function validatePassword() {
    if (passVal.value != passConf.value) {
        passConf.setCustomValidity("Password don't match.")
    } else {
        passConf.setCustomValidity('');
    }
}
passVal.onchange = validatePassword;
passConf.onkeyup = validatePassword;


