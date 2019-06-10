import models from '../../models';
//import {  } from './utils'

export const getAllDepartamentos = () => {
  return models.Departamento.findAll({})
    .then(dpto => dpto)
    .catch(error => console.log(error));
};


export const getAllMunicipio = () => {
  return models.Municipio.findAll({})
    .then(mncp => mncp)
    .catch(error => console.log(error));
};