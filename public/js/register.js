let a= 0,b=0,c=0;
function checkit(e,check=false) {
    const emailCode = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isTrue;
    if (e.id == "email") {
      isTrue = emailCode.test(e.value);
    } else if (e.id == "username") {
      isTrue = e.value.length > 2;
    } else if (e.id == "password") {
        isTrue = e.value.length >= 6;
    } else {
        if (e.value.length >= 6) {
            var conForm = document.getElementById("password");
            if (e.value == conForm.value) {
                isTrue = true;
            } else {
                isTrue = false;
                // if (a == 0) {
                //     pop4 = new Pop();
                //     pop4.body = "Opps! password does bot match";
                //     pop4.show(800);
                //     a = 1;
                // } else {
                //     pop4.show(800);
                // }
            }
        } else {
            isTrue = false;
        }
    }
    if (isTrue) {
        e.onfocus = valid(e);
        if (check) {
            return "valid";
            }
    } else {
        e.onfocus = invalid(e);
        if (check) {
        return "invalid";
        }
    }
}
function valid(e) {
    e.style.outline = "2px solid rgba(125,244,144,.9)";
    e.style.background = "rgba(255,255,255,.2)";
}
function invalid(e) {
    e.style.outline = "2px solid rgba(225,144,144,.9)";
    e.style.background = "rgba(255,255,255,.2)";
}
function checkAllFields() {
    const email = document.getElementById("email");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const password2 = document.getElementById("password2");
    const list = [email,username,password,password2];
    let val;
    for (const el of list) {
        val = checkit(el,true);
        if (val == "invalid") {
            break;
        }
    }
    let trueornot = val == "invalid" ? true : false;
    if (trueornot) {
       let ok =  document.getElementById("submit-button");
       ok.classList.add("disabled");
       ok.style.background = "rgba(255,255,255,0.5)";
    } else { 
        let op = document.getElementById("submit-button");
        op.classList.remove("disabled");
        op.style.background = "lime";
    }
}
const email = document.getElementById("email");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const password2 = document.getElementById("password2");
    const list = [email,username,password,password2];
    
    for (const l of list) {
        l.onblur = () => checkAllFields();
    }