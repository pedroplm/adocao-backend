É necessário colocar a senha e username em "./config/config.json"  da seguinte forma:
"development": {
    "username": "SEU USERNAME", <---
    "password": "SUA SENHA", <---
    "database": "ongadocao",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

Também é necessario colocar em "./index.js":
const con = mysql.createConnection({
    host:"localhost",
    user:"seu user",
    password:"sua senha"
});
