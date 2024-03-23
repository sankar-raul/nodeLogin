const express = require('express');
const app = express();
const path = require("path")
const { exec } = require('child_process');
const PORT = process.env.PORT || 8080;
const {
    pool
} = require('./dbConfig');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const flash = require('express-flash');
app.use(express.json())
app.use(express.static("public"));
app.use(express.urlencoded({
    extended: false
}));

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.set("view engine","ejs");
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/users/register", (req, res) => {
    let args = {};
    res.render("register");
});

app.get("/users/login", (req, res) => {
    res.render("login");
});

app.get("/users", (req, res) => {
    res.redirect("/users/login");
});

app.get("/users/logout", (req, res) => {
    res.redirect("/");
});

app.get("/users/dashboard", (req, res) => {
    res.render("dashboard");
});

app.post("/users/login", async (req, res) => {
    const {
        email,
        password
    } = req.body;
let body =  req.body;
console.log(body);
    pool.query(
        `SELECT * FROM users WHERE email = $1`, [email], async (err, results) => {
            if (err) {
                console.log("Error: " + err);
            }
            const len = await results.rows.length;
            if (len > 0) {
                const mainPass = results.rows[0].password;
                console.log(mainPass + "  = " + password);
                const isAuth = await bcrypt.compare(password, mainPass);
                if (isAuth) {
                    console.log(true);
                    res.send({msg: "done", data: results.rows[0]});
                } else {
                    console.log(false);
                     {
                      res.send({ msg: "pdm", data: { email: email, password: password }
                    })
                }
                }
            } else {
                   let data =  {
                    msg: "anf", data: {email: email, password: password}
                }
	res.send(data);
	console.log("post at /users/login");
            }
        });
});

app.post("/users/register", async (req, res) => {
    const {
        name, email, password, password2
    } = req.body;
    const errors = [];
    const args = req.body;
    
        let hashedPassword = await bcrypt.hash(password, 10);
        //console.log(hashedPassword);

        pool.query(
            `SELECT * FROM users WHERE email = $1`, [email], (err, results) => {
                if (err) {
                    console.log("Error: " + err);
                } else {
                    //console.log(results.rows);
                    if (results.rows.length > 0) {
                        res.send({msg: `${email} allready exits`});
       return;
                    } else {
                        pool.query(
                            `INSERT INTO users (name,email,password) VALUES ($1,$2,$3)`, [name, email, hashedPassword], (err, results) => {
                                if (err) {
                                    res.send({msg: err});
  return;
                                }
                                res.send({msg: "done"});
  return;
                            }
                        );
                    }
            }
            }
        );
});
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public',"404.html"))
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
