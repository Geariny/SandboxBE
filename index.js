//Importaciones
const express = require('express');
const cors = require('cors');

//Init
const app = express();
const nuvo = "Nuevo";

//Middleware
app.use(cors());
app.use(express.json());

//routes
app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log('Sensor / activado');
});

app.get('/hola', (req, res) => {
  res.send('Hola buenas tardes a todos los que ven esto');
  console.log('Sensor /hola activado');
});

const usuario = "Isaac";
const hora = 13; 
let saludo = "No data";

app.get('/saludo', (req, res) => {
    if (hora < 12) {
        saludo = 'Buenos dias, ' + usuario;
    } else if (hora <20) {
        saludo = 'Buenas tardes, ' + usuario;
    } else {
        saludo = 'Buenas noches, ' + usuario;
    }
    res.send(saludo); 

  console.log('Sensor /saludo activado');
});

//Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
