const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
 const {pool} = require('./dbConfig');

/*app.get("/",(req,res) => {
	res.send("<h1>Hello</h1>");
});*/

app.set("view engine","ejs");

app.get("/",(req,res) => {
    res.render("index");
});

app.get("/users/register",(req,res) => {
    res.render("register");
});

app.get("/users/login",(req,res) => {
    res.render("login");
});

app.get("/users/dashboard",(req,res) => {
    res.render("dashboard",{user: "Sankar"});
});

app.listen(PORT,() => {
       console.log(`Server is running on port ${PORT}`);
});
