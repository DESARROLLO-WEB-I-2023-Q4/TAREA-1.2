//requerido para la conexion de la BD
const db= require ('../database/conn');



const getUsuario=async (req, res)=>{

    //query que le pedimos a la BD
    querySQL= 'SELECT * FROM tbl_Usuario';

    //variable para que espere la conexion a la BD y realice la query que pedimos
    const resultado = await db.query(querySQL);

    //resultado que queremos nos devuelva y en que formato
    res.json(resultado);
};




const getIdUsuario= async (req, res)=>{

    const params=[
        req.params.id
    ];

    //query que le pedimos a la BD
    querySQL= 'SELECT * FROM tbl_Usuario WHERE id=$1';

    //variable para que espere la conexion a la BD y realice la query que pedimos
    const resultado = await db.query(querySQL, params);

    //resultado que queremos nos devuelva y en que formato
    res.json(resultado);
};



const postUsuario= async (req, res)=>{

    const params=[
        req.body.PrimerNombre,
        req.body.PrimerApellido,
        req.body.FechaDeNacimiento,
        req.body.CorreoElectronico
    ];

    //query que le pedimos a la BD
    querySQL= `INSERT INTO tbl_Usuario 
    (PrimerNombre, PrimerApellido, FechaDeNacimiento, CorreoElectronico)
    VALUES ($1,$2,$3,$4)
    returning * `;

    //variable para que espere la conexion a la BD y realice la query que pedimos
    const resultado = await db.query(querySQL,params);

    //resultado que queremos nos devuelva y en que formato
    res.json(resultado);
};



const putUsuario= async (req, res)=>{

    const params=[
        req.body.PrimerNombre,
        req.body.PrimerApellido,
        req.body.FechaDeNacimiento,
        req.body.CorreoElectronico,
        req.params.id
    ];

    //query que le pedimos a la BD
    querySQL= `UPDATE tbl_Usuario 
            SET PrimerNombre= $1, PrimerApellido= $2, FechaDeNacimiento=$3, CorreoElectronico= $4  
            WHERE id=$5
    returning * `;

    //variable para que espere la conexion a la BD y realice la query que pedimos
    const resultado = await db.query(querySQL,params);

    //resultado que queremos nos devuelva y en que formato
    res.json(resultado);
};



const deleteUsuario= async (req, res)=>{

    const params=[
        req.params.id
    ];

    //query que le pedimos a la BD
    querySQL= `DELETE FROM tbl_Usuario 
            WHERE id=$1
    returning * `;

    //variable para que espere la conexion a la BD y realice la query que pedimos
    const resultado = await db.query(querySQL,params);

    //resultado que queremos nos devuelva y en que formato
    res.json(resultado);
}


//exportamos los metodos para que los use ApiUsuario
module.exports={
    getUsuario, getIdUsuario, postUsuario, putUsuario, deleteUsuario
}