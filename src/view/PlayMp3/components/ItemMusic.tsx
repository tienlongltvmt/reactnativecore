import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {IMusic} from 'src/interface/Music.interface';
import {MyText} from 'src/share/components';
import FastImage from 'react-native-fast-image';
import tw from 'lib/tailwind';
interface IProps {
  item: IMusic;
}
export default function ItemMusic(props: IProps) {
  const {item} = props;
  const [itemSelected, setItemSelected] = useState<IMusic>();

  const handleSelectItem = () => {
    if (item.id === itemSelected?.id) {
      setItemSelected(undefined);
    } else {
      setItemSelected(item);
    }
  };

  return (
    <TouchableOpacity
      onPress={handleSelectItem}
      activeOpacity={0.8}
      style={tw.style(
        'flex-row',
        itemSelected?.id === item.id ? 'bg-slate-800' : '',
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
