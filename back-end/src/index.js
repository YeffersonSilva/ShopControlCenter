const express = require('express');
const cors = require('cors'); // Importar CORS
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const clientRoutes = require('./routes/clientRoutes'); // Rutas de cliente
const productRoutes = require('./routes/productRoutes'); // Rutas de producto
const orderRoutes = require('./routes/orderRoutes'); // Rutas de pedido
const user = require('./routes/userRoutes');
const path = require('path');

app.use(cors());

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/restapishop', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Configuración de rutas
app.use('/clients', clientRoutes); // Prefijo de ruta para clientes
app.use('/products', productRoutes); // Prefijo de ruta para productos
app.use('/orders', orderRoutes); // Prefijo de ruta para pedidos
app.use('/users', user);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
