import {IMusic} from 'src/interface/Music.interface';
import {AllReducers} from './App.Reducer';
import {GeoPosition} from 'react-native-geolocation-service';

export type RootState = ReturnType<typeof AllReducers>;

export type MyReduxAction = {
  type: keyof PayloadList;
  payload: PayloadList[MyReduxAction['type']];
};

export type PayloadList = {
  // Music
  'SET/ITEM_Music': {
    item?: IMusic;
  };

  // Location
  'SET/LOCATION': {
    location: GeoPosition;
  };
};
