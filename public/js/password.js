function check(pass,which="one") {
    let just = which == "one" ? document.getElementById("password") : document.getElementById("password2");
    if (just.type == "password") {
        pass.classList.remove("fa-eye");
        pass.classList.add("fa-eye-slash");
    } else {
        pass.classList.remove("fa-eye-slash");
        pass.classList.add("fa-eye");
        
    }
    showOrHide(just);
}
function showOrHide(just) {
     if (just.type == "password") {
    document.getElementById("password").type = "text";
     } else {
    document.getElementById("password").type = "password";
     }
    }