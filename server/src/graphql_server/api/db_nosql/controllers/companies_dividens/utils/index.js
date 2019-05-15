import { companyDividens } from '../../../models/company_dividens';
import { errorHttp } from '../../utils';

export const getSave = ({status,data},symbol) => {
<<<<<<< HEAD
    if (status === 200) return data.map(dividen => {
        dividen.symbol = symbol;
        return new companyDividens(dividen).save();
    })
    console.log(errorHttp(status));
}
=======
    if(status === 200){
        const dividens = data.map(dividen => {
            dividen.symbol = symbol;
            return dividen;
        });
        companyDividens.insertMany(dividens, (error, data) => {
            error ? console.log('error', error) : console.log('data', data);
        });
        return dividens;
    }
    console.log(errorHttp(status));
}
>>>>>>> dcd424f054b2d6f45ca9557284b5ab6ad9190c04
