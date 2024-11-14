import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import tw from 'lib/tailwind';
import HeaderHome from './components/HeaderHome';
import {setupPlayer} from 'react-native-track-player/lib/src/trackPlayer';
import {addTrack} from '../PlayMp3/service/SetupService';
import {List3D} from '../3D/List3D';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ChatBotBottom from './components/ChatBotBottom';

export default function Home() {
  return (
    <SafeAreaView edges={['top']} style={tw.style('bg-green')}>
      <HeaderHome />
      <ChatBotBottom />
    </SafeAreaView>
  );
}
