
import Pool from "pg";

let salasFunctions = {};

const pool = new Pool.Pool({
    host: 'ec2-34-224-239-147.compute-1.amazonaws.com',
    user: 'qfoxsdbcxjlrwx',
    password: '84ccd88118904fa7683b3c13b2e1a03fccbae0a4b867ed2861457fb815c5b4ec',
    database: 'd5rkq2vcb1kc51',
    port: '5432'
});

/*
const pool = new Pool.Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'pruebabas',
    port: '5432'
});
*/


salasFunctions.creacionTablas = async(req,res) =>{
    const response = await pool.query('create table asignatura(ecin text primary key,departamento text,sede text,horas int,creditos int, nombre text); create table paralelo(correlativo int primary key, nombre text, cuposMax int, inscritos int, ecin text,  foreign key (ecin) references Asignatura(ecin), plataforma text, acta text, calificable text, disp text, titular text, semestre text); create table salas( aforomax int, tipo text, codsala text primary key);');
    res.json('Tablas creadas');
}

salasFunctions.borrarTablas = async(req,res) =>{
    const response = await pool.query('drop table asignatura; drop table profesor; drop table paralelo;');
    res.json('Tablas borradas');
}

salasFunctions.getSalas = async(req, res) =>{
    const response = await pool.query('SELECT * FROM salas');
    res.status(200).json(response.rows); //responde con un objeto json y el status es el codigo de estado, por defecto es 200
}

salasFunctions.getSalaById = async(req, res) =>{ //el id se entrega por url
    const response = await pool.query('SELECT * FROM salas WHERE codsala = $1',[req.params.codsala])//codigo en busqueda
    res.json(response.rows)
}

salasFunctions.createSala = async(req,res)=>{
    const { aforoMax, tipo, codsala } = req.body; //datos de la nueva sala CREO que es un json
    const response = await pool.query('INSERT INTO salas (aforoMax, tipo, codsala) VALUES ($1,$2,$3)',[aforoMax, tipo, codsala])
    console.log(response);
    res.json({
        message: 'Sala creada correctamente',
        body: {
            sala: {aforoMax, tipo, codsala}
        }
    })
}


salasFunctions.deleteSala = async(req, res)=>{ //se eliminara a traves de id por url
    const response = await pool.query('DELETE FROM salas WHERE codsala = $1',[req.params.codsala])
    res.json(`Sala ${req.params.codsala} eliminada correctamente`)
}

salasFunctions.updateSala = async(req, res)=>{
    const { aforoMax, tipo, codsala} = req.body; //datos posibles a edicion
    const response = await pool.query('UPDATE salas SET aforoMax = $1, tipo = $2, codsala = $3 WHERE codsala = $4',[aforoMax,tipo,codsala, req.params.codsala])
    res.json('sala actualizada correctamente')
}

export default salasFunctions;

