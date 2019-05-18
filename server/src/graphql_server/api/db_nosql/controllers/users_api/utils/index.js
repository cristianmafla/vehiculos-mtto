import { userApi as model } from '../../../models/user_api';
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

export const addNewUser =  user => {
    user.roles = [{
        id: user.roles,
        nombre: 'ADMON',
        descripcion: 'ADMINISTRADOR DE API'
    }];
    return  model.create(user).then(result => {
        result.state = true;
        return result;
    });

};