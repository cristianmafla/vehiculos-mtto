import { getTokenUser } from './utils'

//GENERATE TOKEN
export const loginUser = (correo, contrasena) => getTokenUser(correo,contrasena);

//OBTIENE EL USUARIO DEL TOKEN VALIDADO
export const userValid = currentUserApi => currentUserApi;

/*
export const userValid = currentUserApi => ({
    id: 1,
    nombres: 'usuario',
    apellidos: 'valido',
    correo: 'usuario@correo.com',
    imageUrl: '../../assets/images_locals/goku.png',
    roles: {
        id: 11,
        nombre: 'administrador',
        descripcion: 'administrador del sitio'
    }
});
*/