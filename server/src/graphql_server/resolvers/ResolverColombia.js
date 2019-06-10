import { getAllDepartamentos, getAllMunicipio } from '../api/db_sql/controllers/colombia_dpto_mncp';

export default {

    Query: {

        getAllDepartamentos: (_, args) => getAllDepartamentos(),

        getAllMunicipio: (_, args) => getAllMunicipio()

    },
};