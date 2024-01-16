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
       ok.name = "disabled";
    } else { 
        let op = document.getElementById("submit-button");
        op.classList.remove("disabled");
        op.style.background = "#0add0a";
        op.name = "ready";
    }
    return trueornot;
}
document.getElementById("submit-button").style.background = "rgba(255,255,255,0.5)";
const email = document.getElementById("email");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const password2 = document.getElementById("password2");
    const list = [email,username,password,password2];
    
    for (const l of list) {
        l.oninput = () => checkAllFields();
    }
    function process() {
        if (checkAllFields()) {
            if (a == 0) {
                    pop4 = new Pop();
                    pop4.body = "Opps! please check fill all fields!";
                    pop4.show(800);
                    a = 1;
                } else {
                    pop4.show(800);
                }
        } else {
            register();
        }

    }
    const submit = document.getElementById("submit-button");
    submit.addEventListener('click', () => {
        if (!(submit.name == "disabled")) {
        const keys = process();
        }
    });
    function register() {
        const data = {name: list[1].value,email: list[0].value,password: list[2].value,password2: list[3].value};
        fetch("/users/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data);
    })
}