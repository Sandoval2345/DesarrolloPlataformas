const express = require("express");

const app = express();

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//rutas
app.use(require('./routes/index'))

const port = 3001;

app.listen(port, () => console.log(`Server started on port ${port}`));


