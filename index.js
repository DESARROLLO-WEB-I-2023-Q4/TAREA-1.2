//asignamos una variable de la libreria de express
const express = require ('express');

//variable para de enlace
const app= express();

//middleware= conexion previa al endpoint
app.use(express.json());

//creamos nuestras rutas desde el bakcEnd o endpoint frontEnd

const apiUsuario= require('./routes/apiUsuario');

app.use('/usuarios/',apiUsuario);

app.listen(3000);