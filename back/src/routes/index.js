const { Router } = require('express')
const router = Router()

const { getSalas, createSala, getSalaById, deleteSala, updateSala, creacionTablas, borrarTablas } = require('../controllers/index.controller')
router.get('/salas', getSalas)
router.post('/salas',createSala) //ruta para guardar datos, por eso se usa post
router.get('/salas/:codsala',getSalaById)
router.delete('/salas/:codsala',deleteSala)
router.put('/salas/:codsala',updateSala)
router.post('/tablas', creacionTablas) //se crean tablas
//router.delete('/tablas', borrarTablas) //se borran tablas

module.exports = router