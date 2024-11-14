import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import tw from 'lib/tailwind';
import {useSelector} from 'react-redux';
import {RootState} from 'src/redux';
import {MyIcon, MyText} from 'src/share/components';
import MyNavigator from 'src/router/MyNavigator';
import FastImage from 'react-native-fast-image';
import TrackPlayer, {
  Event,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';

export default function DetailMusic() {
  const {position, buffered, duration} = useProgress();
  const playerState = usePlaybackState();
  const isPlaying = playerState.state === State.Playing;

  const [info, setInfo] = useState({});

  useEffect(() => {
    setTrackInfo();
  }, []);

  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
    console.log('event', event);
    if (
      event.type === Event.PlaybackActiveTrackChanged &&
      event.lastTrack != null
    ) {
      setTrackInfo();
    }
  });

  async function handlePlayPress() {
    if ((await TrackPlayer.getPlaybackState()).state == State.Playing) {
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
    }
  }
  function format(seconds: number) {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }

  async function setTrackInfo() {
    const track = await TrackPlayer.getActiveTrackIndex();
    if (track) {
      const info = await TrackPlayer.getTrack(track);
      console.log('info', info);
      setInfo(info);
    }
  }

  return (
    <ImageBackground
      source={{uri: info?.thumbnail}}
      style={tw.style('w-full h-full')}>
      <SafeAreaView style={tw.style('flex-1 bg-black/70 px-4')}>
        <TouchableOpacity
          style={tw.style('flex-row items-center justify-between')}
          activeOpacity={0.8}
          onPress={() => {
            MyNavigator.goBack();
          }}>
          <MyIcon
            name="chevron-down"
            color={'white'}
            size={24}
            iconFontType="Feather"
          />
          <Text style={tw.style('text-white text-2xl font-bold')}>
            {info?.title}
          </Text>
          <TouchableOpacity activeOpacity={0.8}>
            <MyIcon
              iconFontType="Entypo"
              size={24}
              name="dots-three-horizontal"
              color={'white'}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <MyText
          style={tw.style('text-white text-lg text-center font-bold mt-4')}>
          {info?.artist}
        </MyText>
        <MyText
          style={tw.style('text-white text-lg text-center font-bold mt-4')}>
          {format(position)} / {format(duration)}
        </MyText>
        <View style={tw.style('items-center')}>
          <FastImage
            source={{uri: info?.thumbnail}}
            style={tw.style('w-60 h-60 rounded-full mt-4')}
          />
        </View>
        <View
          style={tw.style('flex-row items-center justify-around mx-9 mt-8')}>
          <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
            <MyIcon
              name="controller-jump-to-start"
              iconFontType="Entypo"
              color={'white'}
              size={24}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              handlePlayPress();
            }}>
            <MyIcon
              name={isPlaying ? 'controller-paus' : 'controller-play'}
              iconFontType="Entypo"
              color={'white'}
              size={24}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
            <MyIcon
              name="controller-next"
              iconFontType="Entypo"
              color={'white'}
              size={24}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
