import * as asignaturas2 from '../infoAsig.json'

let asignFuctions = {};

asignFuctions.getAsign = (req,res) =>{
    res.json(asignaturas2)
}

export default asignFuctions;