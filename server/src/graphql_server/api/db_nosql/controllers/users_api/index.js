import { getTokenUser, addNewUser } from './utils'

//GENERATE TOKEN
export const loginUser = (correo, contrasena) => getTokenUser(correo,contrasena);

//OBTIENE EL USUARIO DEL TOKEN VALIDADO
export const userValid = currentUserApi => currentUserApi;

//NUEVO USUARIO Y ROLES PARA INTERACTUAR CON LA API
export const newUser = user => addNewUser(user);