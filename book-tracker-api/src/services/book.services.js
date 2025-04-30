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
    const { title, authorId, pages, genres, summary, imageUrl } = req.body;

    if(!title || !authorId){
        res.status(400).send({message: "El libro requiere titulo y/o autor"});
    };

    const newBook = await Book.create({
        title,
        authorId,
        pages,
        genres,
        summary,
        imageUrl
    });

    res.json(newBook);
}

export const updateBook = async (req, res) => {
    const { id } = req.params;

    const { title, authorId, pages, genres, summary, imageUrl } = req.body;
    
    const book = Book.update(findByPk(id));
    
    await Book.update({
        title,
        authorId,
        pages,
        genres,
        summary,
        imageUrl
    },
        {
            where:{
                id
            }
        });

    res.json(book);
}

export const deleteBook = async (req,res) => {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    await book.destroy();

    res.send(`El libro con id: ${id} ha sido destruido`);
}