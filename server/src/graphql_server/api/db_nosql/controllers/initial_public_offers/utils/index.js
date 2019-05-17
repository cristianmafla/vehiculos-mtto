import { ipo } from '../../../models/ipo';
import { errorHttp } from '../../utils';

export const getSave = ({ status, data }) => {
    if (status === 200) return new ipo(data).save();
    console.log(errorHttp(status));
};