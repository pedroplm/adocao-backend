const express =  require('express');
const app = express();
const port = 3001;
const cors = require('cors');
var mysql = require('mysql2')

//ATENÇÃO, NECESSARIO COLOCAR SENHA E O NOME DA DATABASE EM BACKEND/CONFIG/CONFIG.JSON !!!

app.use(express.json());
app.use(cors());

const db = require("./models");


const con = mysql.createConnection({
    host:"localhost",
    user:"SEU USER",
    password:"SUA SENHA"
});

con.connect((err)=>{
    if(err) throw err;
    console.log("Connected");
    con.query("CREATE DATABASE IF NOT EXISTS ongadocao", (err, result)=>{
        if(err) throw err;
        console.log("Database created")
    });
})
//routers

const petsRouter = require('./routes/Pets')
app.use("/pets", petsRouter);

const usersRouter = require('./routes/Users')
app.use("/users", usersRouter);


db.sequelize.sync().then(()=>{
    app.listen(port, ()=>{
        console.log(`server is running on port ${port}.`);
    });
})

