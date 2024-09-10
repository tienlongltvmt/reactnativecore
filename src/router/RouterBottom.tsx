import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'src/view/Home/Home';
import {MyIcon} from 'src/share/components';

const BottomStack = createBottomTabNavigator();

const inactiveTintColor: string = '#E5D2B8';
const activeTintColor: string = '#809671';

export default function RouterBottom() {
  return (
    <BottomStack.Navigator
      screenOptions={{
        lazy: true,
        headerShown: false,
        tabBarActiveTintColor: activeTintColor,
        tabBarInactiveTintColor: inactiveTintColor,
      }}
      initialRouteName="Home">
      <BottomStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Trang chủ',
          tabBarIcon: props => (
            <MyIcon
              name="home"
              iconFontType="AntDesign"
              size={24}
              color={props.focused ? activeTintColor : inactiveTintColor}
            />
          ),
        }}
      />
      <BottomStack.Screen
        name="Homes"
        component={Home}
        options={{
          title: 'Lịch',
          tabBarIcon: props => (
            <MyIcon
              name="calendar"
              iconFontType="FontAwesome"
              size={24}
              color={props.focused ? activeTintColor : inactiveTintColor}
            />
          ),
        }}
      />
    </BottomStack.Navigator>
  );
}
