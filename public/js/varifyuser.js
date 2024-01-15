const submit = document.getElementById('submit-button');
function checkit(e) {
    const emailCode = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isTrue;
    if (e.id == "email") {
      isTrue = emailCode.test(e.value);
    } else {
      isTrue = e.value.length > 0;
    }
    if (isTrue) {
        e.onfocus = valid(e);
        
    } else {
        e.onfocus = invalid(e);
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
if (localStorage.getItem("user")) {
    document.getElementById("popupbox").style.display = "block";
    document.getElementById("popupbox").style.animation = "an  .4s ease-in-out"
    setTimeout(() => {
        window.location.href = "/users/dashboard";
    }, 2500);
}
function process() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const args = [];
    if (email.trim() == "" || email.trim() === " ") {
	args.push(0);
   } else {
	const emailCode = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!(emailCode.test(email))) {
        args.push(1);
  }
}
    if (password.trim() == "" || password.trim() === " ") {
	args.push(2);
    }
if (args.length > 0) {
	return args;
 }
    const data = {
        email: email,
        password: password
   }
  console.log(JSON.stringify(data));
    fetch('/users/login', {
        method: 'POST',
	headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
	if (data.msg === "done") {
   localStorage.setItem("user",JSON.stringify(data.data));
   const success = new Pop();
   success.body = `Wellcome back ${data.data.name}`;
   success.show();
   setTimeout(() => {
   location.href = "/users/dashboard";
  },3000);
    } else if (data.msg === "pdm") {
    incorrect();
  } else {
     alert("Account not found");
  }
  })
    .catch(error => console.error('Error:', error));
return "end";
}
 submit.addEventListener('click', () => {
    const keys = process();
    const isTrue = keys !== "end" ? true : false;
    if(isTrue) {
	for (let key of keys) {
	  if (key === 0) {
		blankEmail();
  }
       if (key === 1) {
	invalidEmail();
    }
    if (key === 2) {
	blankPass();
   }
  }
  }
});
let c = 0,pop4;
const blankEmail = () => {
const email = document.getElementById('email');
email.onfocus = invalid(email);
if (c == 0) {
    pop4 = new Pop();
    pop4.body = "Opps! username must not be blank";
    pop4.show(800);
    c = 1;
} else {
    pop4.show(800);
}
}
let a = 0;
let pop1;
const invalidEmail = () => {
if (a == 0) { 
pop1 = new Pop();
pop1.body = "Invalid email!";
pop1.show(800);
a=1;
} else {
    pop1.show(800);
}
const email = document.getElementById('email');
email.onfocus = invalid(email);
}
const blankPass = () => {
    const password = document.getElementById('password');
password.onfocus = invalid(password);
}
let pop2,b = 0;
const incorrect = () => {
    invalid(document.getElementById("password"));
    if (b == 0) {
        pop2 = new Pop();
        pop2.body = "Opps! incorrect password";
        pop2.show(800);
        b = 1;
    } else {
        pop2.show(800);
    }
}


