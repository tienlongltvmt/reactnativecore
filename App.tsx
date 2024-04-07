import {View, Text} from 'react-native';
import React from 'react';
import {useDeviceContext} from 'twrnc';
import tw from './lib/tailwind';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Router from './src/router/Router';

export default function App() {
  useDeviceContext(tw);
  return (
    <SafeAreaProvider>
      <Router />
    </SafeAreaProvider>
  );
}
