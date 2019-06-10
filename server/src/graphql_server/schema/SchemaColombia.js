
import { gql } from 'apollo-server-express';

export default gql`

scalar Date

type Query {

    """ COLOMBIA ALL DEPARTAMENTOS """
    getAllDepartamentos:[Departamento]

    """ COLOMBIA ALL MUNICIPIOS """
    getAllMunicipio:[Municipio]

}

type Departamento {
    id_departamento:Int,
    departamento:String
}

type Municipio {
    id_municipio:Int,
    municipio:String,
    estado:Int,
    departamento_id:Int
}

` ;