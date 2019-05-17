import { gql } from 'apollo-server-express';

export default gql`

scalar Date

type Query {

    """ USUARIO VALIDO """
    UsuarioValid:Usuario

}

type Usuario {
    id:Int
    nombres:String
    apellidos:String
    correo:String
    imageUrl:String
    roles:Rol
}

type Rol {
    id:String
    nombre:String
    descripcion:String
}
` ;