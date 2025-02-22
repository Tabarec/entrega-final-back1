import { Router } from "express";
import productsRouter from "./product.router.js"
import cartsRouter from "./cart.router.js"

const router = Router();

router.use("/products", productsRouter)
router.use("/carts", cartsRouter)

export default router;