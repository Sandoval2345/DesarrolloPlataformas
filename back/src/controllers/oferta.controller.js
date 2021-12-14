import e, { json } from "express";
import pool from "../Database/conexion.js"
let ofertaFunctions= {};

ofertaFunctions.estimacionPrereqAsignatura = async(req,res) =>{
    const {semestre, promedioReprobadosP, promedioRenunciasP, promedioReprobados, promedioRenuncias, aforoSala} = req.body;

    res.setHeader("Content-type", "text/json");
    await pool
      .query("select ecin, materia, sum(inscritos)/count(inscritos) as suma from paralelo where semestre < $1 group by ecin,materia ; ",[semestre])
      .then((result) => {
    let j={};
    j.semestre=semestre;
    for (var i=0; i<result.rowCount; i++) {
     let inscritos =result.rows[i].suma
     let estReq= inscritos -promedioRenunciasP-promedioReprobadosP;
     let demEst= Math.ceil(estReq+promedioReprobados+promedioRenuncias);
     let paralelos= Math.ceil(demEst/aforoSala);
     let deAsignatura={};
     deAsignatura.ecin=result.rows[i].ecin;
     deAsignatura.materia=result.rows[i].materia;
     deAsignatura.demEst=demEst;
     deAsignatura.paralelos=paralelos;
     j[i]=deAsignatura;
    }
    console.log(j)
    res.status(200).send(JSON.parse(JSON.stringify(j)));
    })
      .catch((e) => console.log(e));
      
}

ofertaFunctions.guardarOfertaAsignatura = async(req,res) =>{
  console.log(req.body)
  const re=req.body;
  var semestre=re.semestre;
  for (var i=0;i<199;i++){
    var ecin=re[i].ecin;
    var cantParalelos=re[i].paralelos;
    var demEstima=re[i].demEstima;
    var departamento=re[i].materia
    res.setHeader("Content-type", "text/json");
    await pool .query("insert into ofertaAcademica values ($1) ON CONFLICT DO NOTHING;;",[semestre]).catch((e) =>console.log(e));

    await pool
      .query(" insert  into ofertaAsignatura(semestre, ecin, departamento, cantParalelos, demandaEstimada) values ($1,$2,$3,$4,$5) ON CONFLICT (semestre, ecin, departamento) do update set cantparalelos=$6, demandaEstimada=$7;",[semestre, ecin, departamento,demEstima, cantParalelos,demEstima, cantParalelos])
      .then((result) => {
    
     res.json("Oferta Ingresada")
    })
      .catch((e) => console.log(e));
      
}}

ofertaFunctions.getOfertas = async(req,res)=>{
  await pool
    .query('select * from ofertaAsignatura')
    .then((result)=>{
      res.status(200).json(result.rows);
    })
    .catch((e) => console.log(e));
}
export default ofertaFunctions;

