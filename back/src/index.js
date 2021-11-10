//import cors from 'cors';
import salasroutes from './routes/salas.routes.js';
import express from 'express'

const app = express();

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//app.use(cors());


//rutas
app.use('/api/salas',salasroutes);


const port = 3001;

app.listen(port, () => console.log(`Server started on port ${port}`));


