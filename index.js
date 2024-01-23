const express =  require('express');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require("./models");

//routers

const petsRouter = require('./routes/Pets')

app.use("/pets", petsRouter);

db.sequelize.sync().then(()=>{
    app.listen(port, ()=>{
        console.log(`server is running on port ${port}.`);
    });
})

