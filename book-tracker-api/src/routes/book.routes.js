import { Router } from "express";
import { createBook, findBook, findBooks } from "../services/book.services";

const router = Router();

router.get("/my-books", findBooks());

router.get("/my-books/:id", findBook());

router.post("/my-books", createBook());

router.put("/my-books/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Actualizando libro con id: ${id}`)
});

router.delete("/my-books/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Borrando libro con id: ${id}`)
});

export default router;