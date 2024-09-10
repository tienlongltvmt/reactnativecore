import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import tw from 'lib/tailwind';
import {MyIcon, MyText} from 'src/share/components';
import MyNavigator from 'src/router/MyNavigator';
import HeaderHome from './components/HeaderHome';

export default function Home() {
  return (
    <SafeAreaView edges={['top']} style={tw.style('bg-green')}>
      <HeaderHome />
    </SafeAreaView>
  );
}
