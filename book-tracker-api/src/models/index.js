import { Book } from "./Book";
import { Author } from "./Author";
import { User } from "./User";
import { Lecture } from "./Lecture";

// Relaciones 1:N
// AUTORES TIENEN LIBROS
Author.hasMany(Book, {foreignKey: "authorId"});
Book.belongsTo(Author, {foreignKey: "authorId"});

// USUARIOS TIENEN LISTAS
User.hasMany(Lecture, {foreignKey: "userId"});
Lecture.belongsTo(User, {foreignKey: "userId"})

// LIBROS PUEDEN ESTAR EN VARIAS LISTAS
Book.hasMany(Lecture, {foreignKey: "bookId"}),
Lecture.belongsTo(User, {foreignKey: "bookId"})

export { Book, User, Author, Lecture };