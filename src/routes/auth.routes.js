const { Router } = require("express");
const { check } = require("express-validator");

const { fieldsValidation } = require("../middleware/info-validate");
const { login } = require("../controllers/auth.controlles");

const router = Router();

router.post(
  "/login",
  [
    check("email", "El correo es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    fieldsValidation,
  ],
  login
);


module.exports = router;