function check(pass,which) {
    let just = which == "one" ? document.getElementById("password") : document.getElementById("password2");
    if (just.type == "password") {
        pass.classList.remove("fa-eye");
        pass.classList.add("fa-eye-slash");
	just.type = "text";
    } else {
        pass.classList.remove("fa-eye-slash");
        pass.classList.add("fa-eye");
        just.type = "password";
    }
}