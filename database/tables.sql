-- Active: 1697481834804@@localhost@5432@postgres

CREATE TABLE tbl_Usuario
(   
    id SERIAL PRIMARY KEY,
    PrimerNombre VARCHAR(50),
    PrimerApellido VARCHAR(50),
    FechaDeNacimiento DATE,
    CorreoElectronico VARCHAR(60)
);

SELECT * FROM tbl_Usuario;

INSERT INTO tbl_Usuario 
(PrimerNombre, PrimerApellido, FechaDeNacimiento, CorreoElectronico)
VALUES ('Luis', 'Cardona', '01-sep-2000', 'luCar97@gmail.com'),
        ('Yuri', 'Garcia', '02-sep-2000', 'YuGarcia@gmail.com'),
        ('Bessie', 'Morales', '03-sep-2000', 'BeMoral@gmail.com');

