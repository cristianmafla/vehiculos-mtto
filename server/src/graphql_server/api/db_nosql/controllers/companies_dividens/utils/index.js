import { companyDividens } from '../../../models/company_dividens';
import { errorHttp } from '../../utils';

export const getSave = ({status,data},symbol) => {
    if (status === 200) return data.map(dividen => {
        dividen.symbol = symbol;
        return new companyDividens(dividen).save();
    })
    console.log(errorHttp(status));
}