import { addNewCar, updateCar } from './utils'
import { carApi as model } from  '../../models/cars_api';

export const newCar = car => addNewCar(car);

export const paginationCars = (limit, offset, currentUserApi) => {
    if (currentUserApi) {
        const rolAdmon = currentUserApi.roles.map(rol => rol.name);
        if (rolAdmon.indexOf('rol_admon') >= 0) {
            return model.find({}).limit(limit).skip(offset)
                .then(cars => cars)
                .catch(error => console.log('*** Error_MONGODB_totalCars', error));
        }
    }
};

export const totalCars = () => {
    return new Promise((resolve, reject) => {
        model.countDocuments({}, (error, count) => {
            error ? reject(error) : resolve(count);
        });
    });
};

export const editCar = async car => {
    let objCar = []
    await updateCar(car)
        .then(carDB => {
            objCar = carDB;
        })
        .catch(error => console.log('*** Error_MONGODB_updateCar', error));
    return objCar;
};

export const deleteCar = async placa => {
    let delt = '';
    await model.deleteOne({ placa }).then(() => {
        delt = 'delete user ok';
    });
    return delt;
};
