const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const {pool} = require('./dbConfig');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const flash = require('express-flash');
//const passport = require('passport');
//const initializePassport = require('./passportConfig');

//initializePassport(passport);

/*app.get("/",(req,res) => {
	res.send("<h1>Hello</h1>");
});*/

app.set("view engine","ejs");

app.use(express.static("public"));

app.use(express.urlencoded({extended:false}));

app.use(session({
secret: "secret",
resave: false,
saveUninitialized: false
}));

//app.use(passport.initialize());
//app.use(passport.session());

app.use(flash());

app.get("/",(req,res) => {
    res.render("index");
});

app.get("/users/register",(req,res) => {
    let args = {};
    res.render("register",{args});
});

app.get("/users/login",(req,res) => {
    res.render("login",{email:"ignore",password:"ignore"});
});

app.get("/users/dashboard",(req,res) => {
    const id = req.session.userId;
    if (id) {
    pool.query(
 `SELECT * FROM users WHERE id = $1`,[ id ],( err,results ) => {
  if (err) {
 throw err;
}
if (results.rows.length > 0) {
  const user = results.rows[0];
  res.render("dashboard",{user});
}
}
);
} else {
    res.render("dashboard",{user: "Sankar"});
}
});

app.post("/users/login",async (req,res) => {
     const { email,password } = req.body;
    console.log(email);
  pool.query(
  `SELECT * FROM users WHERE email = $1`,[email],async (err,results) => {
   if (err) {
        throw err;
}
 if (results.rows.length > 0) {
const mainPass = results.rows[0].password;
console.log(mainPass + "  = " + password);
 const isAuth = await bcrypt.compare(password,mainPass);
 if (isAuth) {
  console.log(true);
  req.session.userId = results.rows[0].id;
  res.redirect("/users/dashboard");
} else {
   console.log(false);
   res.render("login",{ msg: "Password does not match",email: email,password: password});
}
} else {
        res.render("login",{ msg: "Account not found",email:email,password:"ignore"});
}
});
});

app.post("/users/register",async (req,res) => {
    const {name,email,password,password2} = req.body;
   //console.log({name,email,password,password2});
  let errors = [];
 const args = req.body;
  if (!name || !email || !password || !password2) {
  errors.push({message:"Please enter all fields!"});
}
  if (password.length < 6) {
 errors.push({message:"Password should be atleast 6 charecter"});
}
  if (password != password2) {
 errors.push({message:"Password does not match"});
}
if (errors.length > 0) {
   res.render("register",{ errors, args});
} else {
 let hashedPassword = await bcrypt.hash(password,10);
  //console.log(hashedPassword);
 pool.query(
`SELECT * FROM users WHERE email = $1`,[email],(err,results) => {
   if (err) {
	throw err;
} else {
	//console.log(results.rows);
if (results.rows.length > 0) {
  errors.push({message: `${email} allready exits`});
  res.render("register",{ errors, args});
} else {
  pool.query(
 `INSERT INTO users (name,email,password) VALUES ($1,$2,$3) RETURNING id,password`,[name,email,hashedPassword],(err,results) => {
  if (err) {
  throw err;
}
   //console.log(results.rows);
   req.flash("success_msg","You are now registerd please login");
   res.redirect("/users/login");
}
);
}
}
}
);
}
});


app.listen(PORT,() => {
       console.log(`Server is running on port ${PORT}`);
});
