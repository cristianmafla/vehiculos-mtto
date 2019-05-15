import { companyDividens } from '../../../models/company_dividens';
import { errorHttp } from '../../utils';

export const getSave = ({status,data},symbol) => {

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
