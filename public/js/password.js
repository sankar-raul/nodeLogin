function check(pass,which) {
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
         just.type = "text";
     } else {
         just.type = "password";
     }
    }