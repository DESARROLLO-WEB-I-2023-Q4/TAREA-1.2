//variable necesaria que requiere promesa para que espere la conexion y no la salte
const pgp = require('pg-promise')();

//credenciales para la conexion
const user= 'postgres';
const pass= 'admin';
const host= 'localhost';
const database= 'postgres'; 


//parametros para conexion de base de datos
const ConectionString= `postgres://${user}:${pass}@${host}:5432/${database}`;

// nos conectamos a pgp para que espere la promesa la conexion
const db =pgp(ConectionString);

db.connect()
    .then( ()=>{
        console.log('Conexión Exitosa');
    })
        .catch( (err)=>{
    console.log(`Error De Conexion ${err}`);
    });

module.exports =db;
