const express = require("express");
const cors = require("cors");
const trainengineroutes = require("./src/Routes/trainengine.routes");
const wagonroutes = require("./src/Routes/wagon.routes");
const app = express();

require("dotenv").config();

const port = 3001;

//middleware

app.use(cors()); // CORS significa Cross-Origin Resource Sharing, 
// y es una política a nivel de navegador web
app.use(express.json());

//Routes
app.use(require("./src/Routes/users"));

app.use("/api/trainengine", trainengineroutes);
app.use("/api/wagon", wagonroutes);

app.listen(port, () => console.log(`Server started on port ${port}`));