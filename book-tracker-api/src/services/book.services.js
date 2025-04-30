import { Book } from "../models/Book.js";

export const findBooks = async (req, res) => {
    const books = await Book.findAll();
    res.json(books);
}

export const findBook = async (req, res) => {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if(!book){
        res.status(404).send({message: "Libro no encontrado"})
    }

    res.json(book);
}

export const createBook = async (req, res) => {
    const { title, authorId, pages, summary, imageUrl, genres } = req.body;

    if(!title || !authorId){
        res.status(400).send({message: "El libro requiere titulo y/o autor"})
    }

    

}