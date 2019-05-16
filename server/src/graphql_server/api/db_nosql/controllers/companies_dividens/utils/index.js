import { companyDividens as model } from '../../../models/company_dividens';
import { errorHttp } from '../../utils';

export const getSave = ({status,data},symbol) => {

    if(status === 200){
        const dividens = data.map(dividen => {
            dividen.symbol = symbol;
            return dividen;
        });
        model.insertMany(dividens, (error, data) => {
            error ? console.log('ERROR-MODEL:', error) : null;
        });
        return dividens;
    }
    console.log(errorHttp(status));
}
