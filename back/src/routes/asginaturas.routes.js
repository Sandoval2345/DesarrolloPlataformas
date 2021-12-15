import express from 'express';
import asignaturas from '../controllers/asignaturas.controllers.js';


const router3 = express.Router();

router3.get('/asignaturas',asignaturas.getAsign);


export default router3;