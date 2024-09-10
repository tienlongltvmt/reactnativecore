import {View, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import tw from 'lib/tailwind';
import FastImage from 'react-native-fast-image';
import MyNavigator from 'src/router/MyNavigator';
import {MyText, MyIcon} from 'src/share/components';
import MyStaticLocal from 'src/utils/StaticLocal';
import axios from 'axios';
import {IWeather} from 'src/interface/Weather.interface';
import {IResponse} from 'src/interface/Api.interface';
import Utilities from 'src/utils/Utilities';

export default function HeaderHome() {
  const [weather, setWeather] = useState<IWeather>();

  const getWeather = useCallback(async () => {
    if (MyStaticLocal.MY_LOCATION?.coords.longitude) {
      try {
        const response: IResponse<IWeather> = await axios?.get(
          'https://api.openweathermap.org/data/2.5/weather',
          {
            params: {
              lat: MyStaticLocal.MY_LOCATION?.coords.latitude,
              lon: MyStaticLocal.MY_LOCATION?.coords.longitude,
              appid: '049d67e7d746206971fd0ddff75ab5e8',
            },
          },
        );
        if (response.status === 200) {
          console.log('response', response.data);
          setWeather(response.data);
        }
      } catch (error) {
        console.log('error', error);
      }
    }
  }, []);

  useEffect(() => {
    getWeather();
    return () => {};
  }, [MyStaticLocal.MY_LOCATION?.coords.latitude]);
  return (
    <View style={tw.style('bg-green pb-4')}>
      <View
        style={tw.style(
          'flex-row justify-between items-start px-4 bg-green w-full',
        )}>
        <FastImage
          source={{
            uri: 'https://i.pinimg.com/736x/0a/59/4b/0a594b5fa5356d144e311f04488db8aa.jpg',
          }}
          style={tw.style('w-14 h-14 rounded-md')}
        />
        <View style={tw.style('mx-4 flex-1')}>
          <MyText
            numberOfLines={1}
            style={tw.style('text-lg font-medium text-white')}>
            Tiến Long
          </MyText>
          <MyText style={tw.style('font-normal text-white')}>Quản lý</MyText>
        </View>
        <View style={tw.style('flex-row items-center')}>
          <View style={tw.style('items-center justify-center  mr-2')}>
            <FastImage
              style={tw.style('w-8 h-8')}
              source={{
                uri: `https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`,
              }}
            />
            <MyText style={tw.style('text-xs text-white')}>
              {Utilities.formatNumber(Number(weather?.main.temp) - 273.15)}°C
            </MyText>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={tw.style('mr-3')}
            onPress={() => {
              MyNavigator.navigate('DownloadSocial');
            }}>
            <MyIcon
              iconFontType="Entypo"
              name="download"
              size={24}
              color={'white'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              MyNavigator.navigate('Music');
            }}
            activeOpacity={0.8}
            style={tw.style('mr-3')}>
            <MyIcon
              iconFontType="MaterialIcons"
              name="play-circle-outline"
              size={24}
              color={'white'}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={tw.style('')}>
            <MyIcon
              iconFontType="MaterialIcons"
              name="notifications-none"
              size={24}
              color={'white'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
