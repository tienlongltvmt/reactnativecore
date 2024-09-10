import {GeoPosition} from 'react-native-geolocation-service';
import {RootToastRef} from 'src/share/components/toast/RootToast';

export default class MyStaticLocal {
  static RootToast: React.RefObject<RootToastRef>;
  static MY_LOCATION: GeoPosition | null;
}
