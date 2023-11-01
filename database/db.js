const mysql = require('mysql2');

// Crea la conexión a la base de datos con los datos de acceso correspondientes
// Para que funcione, deben tener un servidor MySQL corriendo en el puerto 3307
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'proyecto_grupo_1', // Nombre de la base de datos (reeemplazar por el de ustedes)
});

// Ejemplo de obtención de saludo desde la base de datos
// Devuelve un 'promise' que resuelve con el saludo o se rechaza con un error (Eso se maneja en el código del servidor)

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MYSQL database: ', error);

  } else {
    console.log('Connected to MYSQL database');
  }
});

// cerrar la conexion
connection.end();

/* function returnGreetingFromDB() {
  return new Promise((resolve, reject) => {
    // Fetching last name from the MySQL database
    connection.query(
      'SELECT * FROM perro',
      (error, results) => {
        if (error) {
          console.error('Error:', error);
          reject(error);
        } 
      }
    );
  });
}
// Exporta las funciones que se quieran usar desde otros archivos
module.exports = {
  returnGreetingFromDB,
};      */
