import models from '../../models';
//import {  } from './utils'

export const getPaginationDepartamentos = (limit, offset) => {
  return models.Departamento.findAll({ offset, limit })
    .then(dpto => dpto)
    .catch(error => console.log(error));
};

export const totalDepartamentos = () => {
  return models.Departamento.findAndCountAll({ limit: 1 })
    .then(result => result.count);
};


export const getAllMunicipio = departamento_id => {
  return models.Municipio.findAll({ where: { departamento_id }})
    .then(mncp => mncp)
    .catch(error => console.log(error));
};