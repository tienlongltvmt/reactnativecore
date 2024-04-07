# Setup một project React naitve\

## Bước 1: Tạo một project mới

```bash
# using npx
npx react-native@latest init AwesomeProject
```

### Nếu không sử dụng Flipper thì có thể xoá đi trong thư mục

`AwesomeProject/ios/Podfile`, sau đó chạy lệnh `cd AwesomeProject && npm install`.

## Bước 2: Cài đặt các package phụ thuộc

**1. Add TypeScript, types, and ESLint plugins to your project.**

```bash
# using yarn
yarn add --dev @tsconfig/react-native @types/jest @types/react @types/react-test-renderer typescript
```

Add a TypeScript config file. Create a tsconfig.json in the root of your project:

```bash
{
  "extends": "@tsconfig/react-native/tsconfig.json"
}
```

**2. Cài đặt router**

```bash
# using yarn
yarn add @react-navigation/native react-native-screens react-native-safe-area-context @react-navigation/native-stack
```

**Nếu sử dụng bottomTab**

```bash
yarn add @react-navigation/bottom-tabs
```

**3. Cài đặt React Native Gesture Handler**

- React Native Gesture Handler là một thư viện JavaScript cho React Native, được phát triển để quản lý các cử động và sự kiện cử động trên các thành phần của ứng dụng. Thư viện này cung cấp một cách linh hoạt và mạnh mẽ để xử lý các cử động như vuốt, kéo, nhấn và các hành vi tương tự trên màn hình cảm ứng.

**Một số tính năng quan trọng**

- Hiệu suất: Nó được sử dụng một cơ chế xử lý động dựa trên Javascript Native Modules, giúp giảm thiểu độ trễ và tăng cường trải nghiệm người dùng
- Hỗ trợ Animated API
- Hỗ trợ các cử động phức tạp: Vd: như vuốt đa hướng, kéo dài, xoay và các tương tác các ngón tay
- Tương thích với React Navigation
- Hỗ trợ cả Android và IOS

**Chú ý**

- Tối ưu hoá hiệu suất
- Thận trọng với các cử động phức tạp: Hãy đảm bảo rằng chúng không làm giảm hiệu suất trải nghiệm người dùng hoặc tăng độ phức tạp cửa ứng dụng

```bash
# using yarn
yarn add react-native-gesture-handler
```
