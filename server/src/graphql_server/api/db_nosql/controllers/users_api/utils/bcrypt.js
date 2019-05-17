import bcryptjs from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });
import jwt from 'jsonwebtoken';

const initToken = (correo, secret, expiresIn) => jwt.sign({ correo }, secret, { expiresIn: '1h' });

const hash = usuario => {
    return new Promise((res, rej) => {
        bcryptjs.hash(usuario.contrasena, 5, (err, hash) => {
            if (err) {
                rej(err);
            } else {
                usuario.contrasena = hash;
                res(usuario);
            }
        });
    });
};

const compare = (inputContrasena, {contrasena,correo}) => {
    return new Promise((resolve, reject) => {
        bcryptjs
            .compare(inputContrasena, contrasena)
            .then(result => {
                if(result){
                    resolve(initToken(correo,process.env.SECRETO,null));
                }else{
                    resolve('contraseña incorrecta');
                }
            })
            .catch(error => reject(error));
    });
};

export { hash, compare };