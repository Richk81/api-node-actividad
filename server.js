const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware para parsear JSON

// Repositorio de datos: un array de objetos en memoria.
let productos = [
    { id: 1, nombre: "Laptop", precio: 1200 },
    { id: 2, nombre: "Mouse", precio: 25 },
    { id: 3, nombre: "Teclado", precio: 75 }
];

// --- Endpoints de la API

// GET: Obtiene todos los productos
app.get('/productos', (req, res) => {
    res.json(productos);
});

// POST: Crea un nuevo producto
app.post('/productos', (req, res) => {
    const nuevoProducto = req.body;
    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
});

// TAREA: Agregar un endpoint PUT para actualizar un producto.
// Deberá recibir el ID del producto y los nuevos datos en el body.
app.put('/productos/:id', (req, res) => {
    // Lógica para encontrar y actualizar el producto
    res.status(404).send('Producto no encontrado');
});

// TAREA: Agregar un endpoint DELETE para eliminar un producto.
// Deberá recibir el ID del producto en los parámetros de la URL.
app.delete('/productos/:id', (req, res) => {
    // Lógica para encontrar y eliminar el producto
    res.status(404).send('Producto no encontrado');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
