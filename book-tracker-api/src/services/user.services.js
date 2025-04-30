import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req,res) => {
    const { username, email, password } = req.body;

    const user = await User.findOne({
        where: {
            email
        }
    });

    if(user){
        return res.status(400).send({
            message: "El mail ya se encuentra registrado"
        })
    }


    // Configura 10 rondas de salt (costo computacional)
    const saltRounds = 10;

    //Genera un salt único
    const salt = await bcrypt.genSalt(saltRounds);

    // Hashea la contraseña con el salt
    const hashedPassword = await bcrypt.hash(password, salt);


    const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
    })

    res.json(newUser.id);
}



export const loginUser = async (req,res) => {
    const { email, password } = req.body;

    // Busca el usuario por mail
    const user = await User.findOne({
        where: {
            email
        }
    });

    if(!user){
        return res.status(404).send({
            message: "Usuario no registrado"
        })
    }

    // Compara la contraseña ingresada con el hash almacenado
    const comparison = await bcrypt.compare(password, user.password);


    // Si no coincide, devuelve error 401
    if(!comparison){
        return res.statuis(401).send({message: "Email y/o contraseña incorrectos"});
    }

    // Genera una clave secreta para firmar el token (deberia estar en variables de entorno)
    const secretKey = 'programacion3-2025';

    // Devuelve un token JWT que expira en 1 hora 
    const token = jwt.sign({ username: user.username, email }, secretKey, { expiresIn: '1h' });

    // Devuelve el token al cliente
    return res.json(token);


}
