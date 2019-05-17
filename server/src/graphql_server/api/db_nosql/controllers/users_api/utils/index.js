/*===================================================================
MODELO DE ARCHIVO PARA TRABAJAR LAS PETICIONES A LA BASE DE DATOS NOSQL MONGODB
=====================================================================*/

//import {  } from '../../../models/any_model';
//import { compare } from './bcrypt';

import dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });
import jwt from 'jsonwebtoken';


export const getTokenUser = (correo, contrasena) => {
    //TRAER DATOS DEL MODELO DB
    const userDB = {
        id: 33,
        nombres: 'Usuario Prueba',
        apellidos: 'Apellido',
        correo,
        imageUrl: '../../assets/images_locals/superman.png',
        roles: {
            id: 1,
            nombre: 'ADMON',
            descripcion: 'administrador del sitio'
        }
    };
    //return { token: jwt.sign({ correo }, process.env.SECRET, { expiresIn: '1h' })}
    return { token: jwt.sign(userDB, process.env.SECRET, { expiresIn: '1h' }) }
};