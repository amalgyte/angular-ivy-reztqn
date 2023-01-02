import { map } from 'rxjs/operators';
import { Inmate, InmateApi } from '../_models';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { dateFormat } from '../_constants';

export const mapDataToApi = (inmate: Inmate): InmateApi => {
  const names: string[] = inmate.name.split(' ');
  const arrvialDate: string = moment(inmate.arrivalDate).format(dateFormat);
  const dob: string = moment(inmate.dob).format(dateFormat);
  // const reference: string = inmate.referenceNumber;
  const id: string = uuidv4();

  return {
    id,
    reference: `I0000${id.substr(id.length - 4)}`,
    firstName: names[0],
    surname: names[1],
    arrivalDateTime: `${arrvialDate}T${inmate.arrivalTime}`,
    dob
  };
};
