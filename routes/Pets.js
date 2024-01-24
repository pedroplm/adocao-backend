const express = require('express');
const router = express.Router();
const {Pets} = require('../models');
const {validateToken} = require('../middlewares/AuthMiddleware')


//retorna lista de todos os pets
router.get('/', validateToken, async (req, res)=>{
   const listOfPets = await Pets.findAll();
   res.json(listOfPets);
});

//retorna pet por id
router.get('/:id', async (req, res)=>{
    const id = req.params.id;
    const pet = await Pets.findByPk(id);
    res.json(pet);
 });


//criar
router.post("/", validateToken, async (req, res)=>{
    //necessario receber em json seguinte formato: {NAME:STRING, AGE:INTERGER, SPECIES:STRING, RACE:STRING, ADOPTIONDATE:DATE or null}
    const pet = req.body;

    await Pets.create(pet);
    res.json(pet);

});


//editar
router.post("/edit/:id", async (req, res)=>{
    //necessario receber em json seguinte formato: {NAME:STRING, AGE:INTERGER, SPECIES:STRING, RACE:STRING, ADOPTIONDATE:DATE or null}
    const id = req.params.id;

    const pet = await Pets.findByPk(id);
   pet.set(req.body);
   await pet.save();
    

});

//deletar
router.delete('/:id', validateToken, async(req, res)=>{
    const id = req.params.id;
    const pet = await Pets.findByPk(id);

    await pet.destroy();
})

//adotado
router.post("/adopted/:id", validateToken, async (req, res)=>{
    //necessario receber em json seguinte formato: {NAME:STRING, AGE:INTERGER, SPECIES:STRING, RACE:STRING, ADOPTIONDATE:DATE or null}
    const id = req.params.id;
    const pet = await Pets.findByPk(id);


    const time = Date.now();
    const today = new Date(time);
    let dataBr = today.toLocaleDateString();
    let dataUs = dataBr.split('/').reverse().join('-');
   
    pet.adoptionDate = dataUs;
    await pet.save();

    res.send(dataUs);

    

});



module.exports = router;