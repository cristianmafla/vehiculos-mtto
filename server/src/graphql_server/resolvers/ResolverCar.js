import fs from 'fs';
import { GraphQLUpload } from 'graphql-upload';
import { newCar, editCar, deleteCar, paginationCars, totalCars } from '../api/db_nosql/controllers/cars_api';

export default {
    Upload: GraphQLUpload,

    Query: {

        paginationCars: (_, { limit, offset }, { currentUserApi }) => paginationCars(limit, offset, currentUserApi),

        totalCars: (_, args) => totalCars()

    },

    Mutation: {

        newCar: (_, { car }) => newCar(car),

        editCar: (_, { car }) => editCar(car),

        deleteCar: (_, { placa }) => deleteCar(placa)
    }
};