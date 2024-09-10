import {
  CommonActions,
  createNavigationContainerRef,
  DrawerActions,
  StackActions,
  TabActions,
} from '@react-navigation/native';
import {RootParamsList, RouterParamsList} from './RouterType';

class MyNavigator {
  // Khởi tạo tham chiếu đến navigator.
  static rootNavigator = createNavigationContainerRef<RootParamsList>();

  /**
   * Kiểm tra xem navigator có sẵn sàng và không nằm trong một số màn hình modal cụ thể.
   * Phương thức @isReady trả về một boolean cho biết cây điều hướng đã sẵn sàng hay chưa. Cây điều hướng sẵn sàng khi NavigationContainer chứa ít nhất một bộ điều hướng và tất cả các bộ điều hướng đã được gắn xong.
   * @param modalNames Danh sách tên các màn hình modal cần loại trừ.
   * @returns Trả về true nếu điều kiện được thoả mãn, ngược lại false.
   */
  private static isReadyAndNotInModal(modalNames: string[]): boolean {
    return (
      MyNavigator.rootNavigator.isReady() &&
      !modalNames.includes(
        MyNavigator.rootNavigator.getCurrentRoute()?.name || '',
      )
    );
  }

  /**
   * Lấy tên màn hình hiện tại.
   * @returns Tên màn hình hiện tại hoặc chuỗi rỗng nếu không tìm thấy.
   */
  static getCurrentScreen(): string {
    if (MyNavigator.rootNavigator.isReady()) {
      return MyNavigator.rootNavigator.getCurrentRoute()?.name || '';
    }
    return '';
  }

  static getPreviousScreen() {
    if (
      MyNavigator.rootNavigator &&
      MyNavigator.rootNavigator.isReady() &&
      MyNavigator.rootNavigator.getState().routes.length
    ) {
      const size = MyNavigator.rootNavigator.getState().routes.length;

      return MyNavigator.rootNavigator.getState().routes[
        size >= 2 ? size - 2 : size - 1
      ].name;
    }
    return '';
  }

  /**
   * Mở drawer.
   * Chỉ thực hiện hành động này nếu navigator sẵn sàng và màn hình hiện tại không phải là 'MyCheckAppModal'.
   */
  static openDrawer(): void {
    if (MyNavigator.isReadyAndNotInModal(['MyCheckAppModal'])) {
      MyNavigator.rootNavigator.dispatch(DrawerActions.openDrawer());
    }
  }

  /**
   * Đóng drawer.
   * Hành động này chỉ được thực hiện khi navigator sẵn sàng.
   */
  static closeDrawer(): void {
    if (MyNavigator.rootNavigator.isReady()) {
      MyNavigator.rootNavigator.dispatch(DrawerActions.closeDrawer());
    }
  }

  /**
   * Chuyển đổi trạng thái của drawer (mở nếu đang đóng, đóng nếu đang mở).
   * Chỉ thực hiện nếu navigator sẵn sàng và màn hình hiện tại không phải là 'MyCheckAppModal'.
   */
  static toggleDrawer(): void {
    if (MyNavigator.isReadyAndNotInModal(['MyCheckAppModal'])) {
      MyNavigator.rootNavigator.dispatch(DrawerActions.toggleDrawer());
    }
  }

  /**
   * Chuyển đến một màn hình khác.
   * @param screen Tên màn hình cần chuyển đến.
   * @param params Các tham số cần truyền cho màn hình (nếu có).
   * Hành động này chỉ được thực hiện nếu navigator sẵn sàng và màn hình hiện tại không phải là 'MyRemoteConfigModal'.
   */
  static navigate<ScreenName extends keyof RouterParamsList>(
    screen: ScreenName,
    params?: RouterParamsList[ScreenName],
  ): void {
    if (MyNavigator.isReadyAndNotInModal(['MyRemoteConfigModal'])) {
      MyNavigator.rootNavigator.dispatch(
        CommonActions.navigate(screen, params),
      );
    }
  }

  /**
   * Thay thế màn hình hiện tại bằng một màn hình mới.
   * @param screen Tên màn hình mới.
   * @param params Các tham số cho màn hình mới (nếu có).
   * Chỉ thực hiện nếu navigator sẵn sàng và màn hình hiện tại không phải là 'MyRemoteConfigModal'.
   * Nếu xảy ra lỗi, sẽ ghi log lỗi.
   */
  static replace<ScreenName extends keyof RouterParamsList>(
    screen: ScreenName,
    params?: RouterParamsList[ScreenName],
  ): void {
    try {
      if (MyNavigator.isReadyAndNotInModal(['MyRemoteConfigModal'])) {
        MyNavigator.rootNavigator.dispatch(
          StackActions.replace(screen, params),
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Quay lại màn hình trước đó.
   * Chỉ thực hiện nếu navigator sẵn sàng và có thể quay lại màn hình trước đó.
   */
  static goBack(): void {
    if (
      MyNavigator.rootNavigator.isReady() &&
      MyNavigator.rootNavigator.canGoBack()
    ) {
      MyNavigator.rootNavigator.dispatch(CommonActions.goBack());
    }
  }

  /**
   * Quay về màn hình đầu tiên của stack.
   * Chỉ thực hiện nếu navigator sẵn sàng.
   */
  static popToTop(): void {
    if (MyNavigator.rootNavigator.isReady()) {
      MyNavigator.rootNavigator.dispatch(StackActions.popToTop());
    }
  }

  /**
   *  Push 1 màn hình trong StackScreen
   * @param screen Tên màn hình mới.
   * @param params Các tham số cho màn hình mới (nếu có).
   * Chỉ thực hiện nếu navigator sẵn sàng và màn hình hiện tại không phải là 'MyRemoteConfigModal'.
   * Nếu xảy ra lỗi, sẽ ghi log lỗi.
   */
  static push<ScreenName extends keyof RouterParamsList>(
    screen: ScreenName,
    params?: RouterParamsList[ScreenName],
  ): void {
    try {
      if (MyNavigator.isReadyAndNotInModal(['MyRemoteConfigModal'])) {
        MyNavigator.rootNavigator.dispatch(StackActions.push(screen, params));
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Thêm các hàm khác tương tự nếu cần, như push, pushModal, replaceModal, refresh, v.v.,
  // với cách tiếp cận tương tự để giảm sự trùng lặp và tăng tính dễ đọc, dễ bảo trì.
}

export default MyNavigator;
