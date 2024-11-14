import {GeoCoordinates} from 'react-native-geolocation-service';
import {MyReduxAction, PayloadList} from '../MyAction.Type';

type ILocationState = {
  location?: GeoCoordinates | null;
};
const initialStates: ILocationState = {
  location: null,
};
const LocationReducer = (
  state: ILocationState = initialStates,
  action: MyReduxAction,
) => {
  switch (action.type) {
    case 'SET/LOCATION':
      const payload = action.payload as PayloadList['SET/LOCATION'];
      return {
        ...state,
        location: payload.location,
      };
    default:
      return {
        ...state,
      };
  }
};
export default LocationReducer;
