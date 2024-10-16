import express from "express";
import {upload} from "../helpers/multer.js";
import { createProduct, listProducts } from "../Controllers/products.controllers.js";

const router = express.Router();

// Ruta para crear un nuevo producto
router.post("/products", upload.single("image"), createProduct);

// Ruta para mostrar todos los productos
router.get("/products", listProducts);

export default router;