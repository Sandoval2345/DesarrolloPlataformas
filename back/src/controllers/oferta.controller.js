import e, { json } from "express";
import pool from "../Database/conexion.js"
let ofertaFunctions= {};

ofertaFunctions.estimacionPrereqAsignatura = async(req,res) =>{
    const {ecin, departamento, semestre, promedioReprobadosP, promedioRenunciasP, promedioReprobados, promedioRenuncias, aforoSala} = req.body;
    console.log(req.body)
    res.setHeader("Content-type", "text/json");
    await pool
      .query("select sum(inscritos) from paralelo where ecin= $1 and materia=$2 and semestre < $3 limit 4; ",[ecin, departamento, semestre])
      .then((result) => {
    
    const inscritos =result.rows[0].sum
    console.log(inscritos)
     let estReq= inscritos/4 -promedioRenunciasP-promedioReprobadosP;
     let demEst= Math.ceil(estReq+promedioReprobados+promedioRenuncias);
     let paralelos= Math.ceil(demEst/aforoSala);
     console.log(estReq,paralelos)
     res.status(200).send({demEst,paralelos});
    })
      .catch((e) => console.log(e));
      
}

ofertaFunctions.guardarOfertaAsignatura = async(req,res) =>{
    const {ecin, departamento,semestre, demEstima, paralelos} = req.body;
    res.setHeader("Content-type", "text/json");
    await pool
      .query("insert into ofertaAcademica values ($1); insert into ofertaAsignatura(semestre, ecin, departamento, cantParalelos, demandaEstimada) values ($2,$3,$4,$5,$6);",[semestre,semestre, ecin, departamento,demEstima, paralelos])
      .then((result) => {
     res.json("Oferta Ingresada")
    })
      .catch((e) => console.log(e));
      
}
export default ofertaFunctions;

