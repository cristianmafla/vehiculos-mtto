import { ipo as model } from '../../../models/ipo';
import { errorHttp } from '../../utils';

export const getSave = async ({ status, data }) => {
    if (status === 200) {

    /*AUN NO GUARDA EN MONGO PORQUE MUESTRA UN ERRROR POR
    LAS CLAVES DEL JSON DICE QUE SON DEMACIADO LARGAS Y ESTA RESTRINGIDO POR MONGODB
    NOTA:ESTE COMPORTAMIENDO SE PUEDE PONER OFF EN LA CONFIGURACION DE MONGODB???*/
        await model.create(data)
                .then(data => console.log('***IPOS-RESULT-SAVE-MONGO: ', data))
                .catch(error => console.log('***ERROR-SAVE-IPOS-MONGO-', error));

        /*SE RETORNA EL MISMO OBJETO JSON DE https://api.iextrading.com/1.0/stock/market/today-ipos
        PARA SER CONSUMIDO POR GRAPHQL*/
        return data
    };
    console.log(errorHttp(status));
};