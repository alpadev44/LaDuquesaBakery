const express = require("express");
require("dotenv/config.js");
//const cors = require("cors");
const { swaggerDocs } = require("./swagger.js");

const addressRouter = require("../src/routes/addressRoute.js");
const subCategoryRouter = require("../src/routes/subCategoryRoute.js");
const roleRouter = require("../src/routes/roleRoute.js");
const userRouter = require("../src/routes/userRoute.js");
const productRouter = require("../src/routes/productRoute.js");
const categoryRouter = require("../src/routes/categoryRoute.js");
const cityRouter = require("../src/routes/cityRoute.js");
const imageRouter = require("../src/routes/imageRoute.js");
const orderRouter = require("../src/routes/orderRoute.js");
const paypalRouter = require("../src/routes/paypalRoutes.js");

const db = require("./db.js");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.addressPath = "/address";
    this.cityPath = "/city";
    this.subCategoryPath = "/subCategory";
    this.categoryPath = "/category";
    this.imagePath = "/image";
    this.productPath = "/prodruct";
    this.rolePath = "/role";
    this.userPath = "/user";
    this.orderPath = "/order";
    this.authPath = "/auth";
    this.paypalpath = "/payment";

    this.middlewares();
    this.routes();
    this.listen();
  }

  middlewares() {
    // CORS
    //this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.addressPath, addressRouter);
    this.app.use(this.cityPath, cityRouter);
    this.app.use(this.subCategoryPath, subCategoryRouter);
    this.app.use(this.categoryPath, categoryRouter);
    this.app.use(this.imagePath, imageRouter);
    this.app.use(this.productPath, productRouter);
    this.app.use(this.rolePath, roleRouter);
    this.app.use(this.userPath, userRouter);
    this.app.use(this.orderPath, orderRouter);
    this.app.use(this.paypalpath, paypalRouter);
  }

  async listen() {
    db.sequelize.authenticate();
    db.sequelize
      .sync({ force: true })
      .then(() => {
        console.log("Conexión a la base de datos establecida con éxito");
        this.app.listen(process.env.PORT, () =>
          console.log(`esta corriendo en el puerto ${process.env.PORT}`)
        );
        swaggerDocs(this.app, process.env.PORT);
      })
      .catch((err) => {
        console.error("No se pudo conectar a la base de datos:", err);
      });
  }
}

module.exports = Server;
