const express = require('express')
const router = express.Router();

//get the controler of car
const carroControler = require('../controllers/carControler/index.js');

//routers
router.get('/cars', carroControler.getAll);
router.get('/cars/:id', carroControler.getOne);
router.post('/cars', carroControler.setOne);
router.put('/cars/modelo/:id', carroControler.updateModelCar);
router.put('/cars/placa/:id', carroControler.updatePlacaCar);
router.delete('/cars/:id', carroControler.deletCar);

module.exports = router;