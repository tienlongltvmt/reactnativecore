import {GeoPosition} from 'react-native-geolocation-service';
import {RootToastRef} from 'src/share/components/toast/RootToast';

// Let là biến toàn cục cụ, nên là ta có thể sử dụng bất cư đâu
let Location: GeoPosition | null;
export default class MyStaticLocal {
  static RootToast: React.RefObject<RootToastRef>;

  static setLocation(loccation?: GeoPosition) {
    if (loccation) {
      Location = loccation;
    }
  }
  static MY_LOCATION(): GeoPosition | undefined {
    if (Location) {
      return Location;
    }
  }
}
