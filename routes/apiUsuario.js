//asignamos una variable de la libreria de express
const express = require ('express');
//variable para de enlace
const apiUsuario= express();

// traemos los metodos del controlador
const {getUsuario, getIdUsuario, postUsuario, putUsuario, deleteUsuario }=require('../controllers/apiController')



//metodo Get
apiUsuario.get('', getUsuario);

//metodo Get por Id
apiUsuario.get('/:id', getIdUsuario);

//metodo post
apiUsuario.post('', postUsuario);

//metodo put
apiUsuario.put('/:id', putUsuario);

//metodo delete
apiUsuario.delete('/:id', deleteUsuario);


//exportamos para que le sirva a otros archivos
module.exports= apiUsuario;