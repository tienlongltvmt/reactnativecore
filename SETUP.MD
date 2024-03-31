# Setup một project React naitve\

## Bước 1: Tạo một project mới

```bash
# using npx
npx react-native@latest init AwesomeProject
```

### Nếu không sử dụng Flipper thì có thể xoá đi trong thư mục

`AwesomeProject/ios/Podfile`, sau đó chạy lệnh `cd AwesomeProject && npm install`.

## Bước 2: Cài đặt các package phụ thuộc

1. Add TypeScript, types, and ESLint plugins to your project.

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

2. Cài đặt router

```bash
# using yarn
yarn add @react-navigation/native react-native-screens react-native-safe-area-context @react-navigation/native-stack
```

### Nếu sử dụng bottomTab

```bash
yarn add @react-navigation/bottom-tabs
```

3. Cài đặt Gesture Handler

```bash
# using yarn
yarn add react-native-gesture-handler
```
