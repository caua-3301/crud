const express = require('express')
const router = express.Router();

//get the controler of car
const carroControler = require('../controllers/carControler/index.js');

//routers
router.get('/cars', carroControler.getAll);
router.get('/cars/:id', carroControler.getOne);

module.exports = router;