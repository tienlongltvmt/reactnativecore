import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {IMusic} from 'src/interface/Music.interface';
import {MyText} from 'src/share/components';
import FastImage from 'react-native-fast-image';
import tw from 'lib/tailwind';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'src/redux';
import {createAction} from 'src/redux/MyAcction';
import MyNavigator from 'src/router/MyNavigator';
import TrackPlayer from 'react-native-track-player';
interface IProps {
  item: IMusic;
  index: number;
}
export default function ItemMusic(props: IProps) {
  const {item, index} = props;
  const itemSelectedMusic = useSelector(
    (state: RootState) => state.MusicReducer.itemSelectedMusic,
  );
  const dispatch = useDispatch();

  const handleSelectItem = async () => {
    if (item.id === itemSelectedMusic?.id) {
      dispatch(createAction('SET/ITEM_Music', {item: undefined}));
    } else {
      await TrackPlayer.skip(index);
      TrackPlayer.play();
      dispatch(createAction('SET/ITEM_Music', {item: item}));
      MyNavigator.navigate('DetailMusic');
    }
  };

  return (
    <TouchableOpacity
      onPress={handleSelectItem}
      activeOpacity={0.8}
      style={tw.style(
        'flex-row',
        itemSelectedMusic?.id === item.id ? 'bg-slate-800' : '',
      )}>
      <FastImage
        source={{uri: item.thumbnail}}
        style={tw.style('w-14 h-14 rounded-sm')}
      />
      <View style={tw.style('ml-2 py-1')}>
        <MyText style={tw.style('text-white font-bold')}>{item.title}</MyText>
        <MyText style={tw.style('text-white text-xs mt-1')}>
          {item.artist}
        </MyText>
      </View>
    </TouchableOpacity>
  );
}
