import { uploadImageCar } from '../../utils'
import { carApi as model } from '../../../models/cars_api';

export const addNewCar = car => {
    return new Promise((resolve, reject) => {
        model.find({ placa: car.placa }).then(carDB => {
            if (carDB.length > 0) {
                resolve({ state: false, message: `this car already exists: ${car.placa}` });
            } else {
                uploadImageCar(car.file, car.placa).then(urlImage => {
                    car.imageUrl = urlImage || car.imageUrl
                    model.create(car).then(({ placa, modelo, tipo, imageUrl, marca, propietario, documento,detalle,fecha }) => {
                        resolve({ state: true, message: 'successfully created user', placa, modelo, tipo, imageUrl, marca, propietario, documento, detalle, fecha });
                    })
                    .catch(error => console.log('*** Error_modelDB', error));
                });
            }
        })
        .catch(error => console.log('*** Error_modelDB', error));
    });
};

export const updateCar = car => {
    return new Promise((resolve, reject) => {
        uploadImageCar(car.file, car.placa).then(urlImage => {
            car.imageUrl = urlImage || car.imageUrl
            const { placa, modelo, tipo,marca,propietario,documento,detalle,fecha, imageUrl } = car;
            model.updateOne({ placa }, { $set: { modelo, tipo, marca, propietario, documento, detalle, fecha, imageUrl } })
                .then(() => resolve({ state: true, message: 'successfully update car', modelo, tipo, marca, propietario, documento, detalle, fecha, imageUrl }))
                .catch(error => console.log('*** Error_MONGODB_editCar', error));
        });
    });
};