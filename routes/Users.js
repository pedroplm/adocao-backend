const express = require('express');
const router = express.Router();
const {Users} = require('../models');
const bcrypt = require('bcrypt');
const {sign} = require('jsonwebtoken');

//criar conta
router.post('/signin', async (req, res)=>{
   const {username, password} = req.body;
   bcrypt.hash(password, 10).then((hash) =>{
        Users.create({
            username:username,
            password: hash,
        })
        res.json("User Created")
   }) 
});

router.post('/login', async (req, res) =>{
    const {username, password} = req.body;
    const user = await Users.findOne({where: {username:username}});

    if (!user){
        res.json({error: "Usuario não foi encontrado"});
    } else {
        bcrypt.compare(password, user.password).then((match) =>{
            if (!match){ 
                res.json({error:"Username ou senha incorretos"})
            } else {
                const accessToken = sign({username: user.username, id: user.id}, "importantsecret")
                res.json(accessToken);
            }
        });
    }



})


module.exports = router;