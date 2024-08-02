import { request, response } from "express";
import productDao from "../dao/product.dao.js";
import cartDao from "../dao/cart.dao.js";

export const checkProductAndCart = async (req = request , res= response, next) => {
    try {
      const { cid, pid } = req.params;
      
      const product = await productDao.getById(pid);
      if(!product) return res.status(404).json({ status: "error", msg: "El producto no ha sido encontrado"});

      const cart = await cartDao.getById(cid);
      if(!cart) return res.status(404).json({ status: "error", msg: "El carrito no ha sido encontrado"});

      next();
      
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: "error", msg: "Error interno del servidor" });
    }
}