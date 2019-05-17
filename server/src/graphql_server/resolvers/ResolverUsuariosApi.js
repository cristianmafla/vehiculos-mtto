//import {  } from '../api/db_nosql/controllers/.....';

export default {

    Query: {

        UsuarioValid:(_,args) => ({
            id:1,
            nombres:'usuario',
            apellidos:'valido',
            correo:'usuario@correo.com',
            imageUrl:'../../assets/images_locals/goku.png',
            roles:{
                id:11,
                nombre:'administrador',
                descripcion:'administrador del sitio'
            }
        })

    }
};