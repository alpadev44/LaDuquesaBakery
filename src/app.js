const express = require('express');
const db = require('../config/db');
const addressRouter = require('./routes/addressRoute.js')
const subCategoryRouter = require('./routes/subCategoryRoute.js')
const roleRouter = require('./routes/roleRoute.js')
const userRouter = require('./routes/userRoute.js');
const productRouter = require('./routes/productRoute.js');
const categoryRouter = require('./routes/categoryRoute.js');
const cityRouter = require('./routes/cityRoute.js');
const imageRouter = require('./routes/imageRoute.js');
const orderRouter = require('./routes/orderRoute.js');

const app = express();

const PORT = process.env.PORT || 3011;

app.use(express.json());
app.use('/address', addressRouter)
app.use('/city', cityRouter)
app.use('/subCategory', subCategoryRouter)
app.use('category', categoryRouter)
app.use('/image', imageRouter)
app.use('/product', productRouter)
app.use('/role', roleRouter)
app.use('/user', userRouter)
app.use('/order', orderRouter)


db.sequelize.authenticate();
db.sequelize.sync({ alter: true })
  .then(() => {
    console.log("Conexión a la base de datos establecida con éxito");
    app.listen(PORT, () => console.log(`esta corriendo en el puerto ${PORT}`));
  })
  .catch((err) => {
    console.error("No se pudo conectar a la base de datos:", err);
  });