// In src/v1/swagger.js
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Basic Meta Informations about our API
const options = {
  definition: {
    openapi: "3.1.0",
    info: { title: "duquesa_nodejs", version: "1.0.0" },
  },
  apis: [
    "./src/routes/addressRoute.js",
    "./src/routes/categoryRoute.js",
    "./src/routes/cityRoute.js",
    "./src/routes/imageRoute.js",
    "./src/routes/orderRoute.js",
    "./src/routes/productRoute.js",
    "./src/routes/roleRoute.js",
    "./src/routes/subCategoryRoute.js",
    "./src/routes/userRoute.js",
    "./models/address.js",
    "./models/category.js",
    "./models/city.js",
    "./models/image.js",
    "./models/index.js",
    "./models/order.js",
    "./models/product.js",
    "./models/role.js",
    "./models/subCategory.js",
    "./models/user.js",
  ],
};

// Docs in JSON format
const swaggerSpec = swaggerJSDoc(options);

// Function to setup our docs
const swaggerDocs = (app, port) => {
  // Route-Handler to visit our docs
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Make our docs in JSON format available
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `Version 1 Docs are available on http://localhost:${port}/api/v1/docs`
  );
};

module.exports = { swaggerDocs };
