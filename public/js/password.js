var identity = 0;
function check(pass,which="one") {
    if (identity % 2 == 0) {
        pass.classList.remove("fa-eye");
        pass.classList.add("fa-eye-slash");
    } else {
        pass.classList.remove("fa-eye-slash");
        pass.classList.add("fa-eye");
    }
    showOrHide(which);
    identity++;
}
function showOrHide(which="one") {
    if (which == "one") {
     if (identity % 2 == 0) {
    document.getElementById("password").type = "text";
     } else {
    document.getElementById("password").type = "password";
     }
    } else {
        if (identity % 2 == 0) {
    document.getElementById("password2").type = "text";
     } else {
    document.getElementById("password2").type = "password";
     }
    }
}