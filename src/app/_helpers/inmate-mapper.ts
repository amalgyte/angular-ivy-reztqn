import { map } from 'rxjs/operators';
import moment from 'moment';
import { Inmate, InmateApi } from '../_models';
import { dateFormat, timeFormat } from '../_constants';

export const mapInmates = map(
  (data: any[]): Inmate[] => {
    return data.map(
      (inmate: any): Inmate => {
        return {
          id: inmate.id,
          referenceNumber: inmate.reference,
          name: `${inmate.firstName} ${inmate.surname}`,
          arrivalDate: moment(inmate.arrivalDateTime).format(dateFormat),
          arrivalTime: moment(inmate.arrivalDateTime).format(timeFormat),
          dob: moment(inmate.dob).format(dateFormat)
        };
      }
    );
  }
);
