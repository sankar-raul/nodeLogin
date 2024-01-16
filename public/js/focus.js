const e = document.getElementById("email");
const p = document.getElementById("password");
const u = document.getElementById("username");
const p2 = document.getElementById("password2");

function focusElement(ok) {
    if (ok.id == "user") {
        e.focus();
    } else if (ok.id == "pass") {
        p.focus();
    } else if (ok.id == "name") {
        u.focus(); 
    } else if (ok.id == "pass2") {
        p2.focus(); 
    } else {
        alert("last 😐");
    }
}