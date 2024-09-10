import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Splash from '../view/splash/Splash';
import Login from 'src/view/Login/Login';
import MyNavigator from './MyNavigator';
import RouterBottom from './RouterBottom';
import DownloadSocial from 'src/view/DowLoadSocial/DownloadSocial';
import GameNoInternet from 'src/view/Game/GameNoInternet';
import Music from 'src/view/PlayMp3/Music';

export default function Router() {
  const RootStack = createNativeStackNavigator();

  const handleScreenName = () => {
    try {
      const previousRouteName = MyNavigator.getPreviousScreen();
      const currentRouteName =
        MyNavigator.rootNavigator.getCurrentRoute()?.name || '';
      if (previousRouteName !== currentRouteName) {
        if (!__DEV__) {
          // Utilities.logAnalytics(`Screen_Of_${currentRouteName}`);
        }
      }
      if (__DEV__) console.log(currentRouteName);
    } catch (error) {
      if (__DEV__) console.log(error);
    }
  };

  return (
    <NavigationContainer
      ref={MyNavigator.rootNavigator}
      onStateChange={handleScreenName}>
      <RootStack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          // animation: 'fade',
          headerBackTitleVisible: false,
          headerTintColor: '#3A4D39',
        }}>
        <RootStack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />

        <RootStack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="MainStack"
          component={RouterBottom}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="DownloadSocial"
          component={DownloadSocial}
          options={{
            title: 'Tải video',
          }}
        />
        <RootStack.Screen
          name="GameNoInternet"
          component={GameNoInternet}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="Music"
          component={Music}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
