const e = document.getElementById("email");
const p = document.getElementById("password");
function focusElement(ok) {
    if (ok.id == "user") {
        e.focus();
    } else if (ok.id == "pass") {
        p.focus();
    } else {
        alert("last 😐");
    }
}