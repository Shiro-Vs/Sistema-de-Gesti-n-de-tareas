const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Página principal (redireccionar a HTML/index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'HTML', 'index.html'));
});

// Cualquier otra ruta no encontrada
app.get('*', (req, res) => {
  res.status(404).send('Página no encontrada');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
