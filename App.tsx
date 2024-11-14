import {View, Text} from 'react-native';
import React, {useRef} from 'react';
import {useDeviceContext} from 'twrnc';
import tw from './lib/tailwind';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Router from './src/router/Router';
import {RootToast, RootToastRef} from 'src/share/components/toast/RootToast';
import MyStaticLocal from 'src/utils/StaticLocal';
import {Provider} from 'react-redux';
import {store} from 'src/redux';

export default function App() {
  useDeviceContext(tw);
  const rootToastRef = useRef<RootToastRef>(null);
  MyStaticLocal.RootToast = rootToastRef;
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Router />
        <RootToast ref={rootToastRef} />
      </Provider>
    </SafeAreaProvider>
  );
}
