import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import MyStaticLocal from './StaticLocal';
import {Platform} from 'react-native';

export default class Utilities {
  static toast(
    message?: string,
    type?: 'default' | 'info' | 'success' | 'danger' | 'warning',
    duration?: number,
  ) {
    MyStaticLocal.RootToast?.current?.onToast(message, type, duration);
  }

  static checkLocation = async () => {
    try {
      if (Platform.OS === 'ios') {
        const result = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        switch (result) {
          case RESULTS.UNAVAILABLE:
            return true;
          case RESULTS.DENIED:
            return true;
          case RESULTS.LIMITED:
            return true;
          case RESULTS.GRANTED:
            return false;
          case RESULTS.BLOCKED:
            return true;
          default:
            return true;
        }
      } else {
        const checkPermissionInAndroid = await check(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        );
        switch (checkPermissionInAndroid) {
          case RESULTS.GRANTED:
            return false;
          case RESULTS.DENIED:
            return true;
          default:
            return true;
        }
      }
    } catch (error) {
      return true;
    }
  };
  static formatNumber(number: number, decimals = 0) {
    // Làm tròn số với số lượng chữ số thập phân
    let roundedNumber = number.toFixed(decimals);

    // Thêm dấu chấm ngăn cách hàng nghìn
    return roundedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
}
