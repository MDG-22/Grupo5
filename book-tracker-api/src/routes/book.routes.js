import { Router } from "express";
import { createBook, deleteBook, findBook, findBooks, updateBook } from "../services/book.services";

const router = Router();

router.get("/my-books", findBooks);

router.get("/my-books/:id", findBook);

router.post("/my-books", createBook);

router.put("/my-books/:id", updateBook);

router.delete("/my-books/:id", deleteBook);

export default router;