import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {MyIcon, MyText} from 'src/share/components';
import tw from 'lib/tailwind';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IMusic} from 'src/interface/Music.interface';
import ItemMusic from './components/ItemMusic';
let data: IMusic[] = [
  {
    id: 1,
    url: 'https://rntp.dev/example/Longing.mp3',
    title: 'Longing',
    artist: 'David Chavez',
    thumbnail: 'https://rntp.dev/example/Longing.jpeg',
    duration: 143,
  },
  {
    id: 2,
    url: 'https://rntp.dev/example/Soul%20Searching.mp3',
    title: 'Soul Searching (Demo)',
    artist: 'David Chavez',
    thumbnail: 'https://rntp.dev/example/Soul%20Searching.jpeg',
    duration: 77,
  },
  {
    id: 3,
    url: 'https://rntp.dev/example/Lullaby%20(Demo).mp3',
    title: 'Lullaby (Demo)',
    artist: 'David Chavez',
    thumbnail: 'https://rntp.dev/example/Lullaby%20(Demo).jpeg',
    duration: 71,
  },
  {
    id: 4,
    url: 'https://rntp.dev/example/Rhythm%20City%20(Demo).mp3',
    title: 'Rhythm City (Demo)',
    artist: 'David Chavez',
    thumbnail: 'https://rntp.dev/example/Rhythm%20City%20(Demo).jpeg',
    duration: 106,
  },
  {
    id: 5,
    url: 'https://rntp.dev/example/hls/whip/playlist.m3u8',
    title: 'Whip',
    artist: 'prazkhanal',
    thumbnail: 'https://rntp.dev/example/hls/whip/whip.jpeg',
    duration: 103,
  },
  {
    id: 6,
    url: 'https://ais-sa5.cdnstream1.com/b75154_128mp3',
    title: 'Smooth Jazz 24/7',
    artist: 'New York, NY',
    thumbnail: 'https://rntp.dev/example/smooth-jazz-24-7.jpeg',
    duration: 103,
  },
];

export default function Music() {
  const renderItem = ({item}: {item: IMusic}) => {
    return <ItemMusic item={item} />;
  };
  const renderKeyExtractor = (item: IMusic) => {
    return item.id.toString();
  };
  const renderItemSeparator = () => {
    return <View style={tw.style('h-px my-2')} />;
  };
  return (
    <SafeAreaView style={tw.style('flex-1 bg-black px-4')}>
      <MyText style={tw.style('text-white text-2xl')}>Songs</MyText>
      <View
        style={tw.style(
          'flex-row justify-center items-center bg-slate-700 px-4 mt-4 rounded-md',
        )}>
        <MyIcon
          name="search1"
          iconFontType="AntDesign"
          color={'white'}
          size={14}
        />
        <TextInput
          style={tw.style('flex-1 h-10 ml-2')}
          placeholder="Tìm kiếm"
          placeholderTextColor={'white'}
        />
      </View>
      <View style={tw.style('flex-row items-center my-3')}>
        <TouchableOpacity
          style={tw.style(
            'flex-row items-center bg-slate-700 flex-1 justify-center rounded-md py-2 mr-4',
          )}>
          <MyIcon
            iconFontType="Entypo"
            name="controller-play"
            color={'#F1C376'}
            size={24}
          />
          <MyText style={tw.style('text-[#F1C376] ml-2')}>Play</MyText>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw.style(
            'flex-row items-center bg-slate-700 flex-1 justify-center rounded-md py-2 ml-4',
          )}>
          <MyIcon
            iconFontType="Ionicons"
            name="shuffle"
            color={'#F1C376'}
            size={24}
          />
          <MyText style={tw.style('text-[#F1C376] ml-2')}>Shuffle</MyText>
        </TouchableOpacity>
      </View>
      <FlatList
        contentContainerStyle={tw.style('mt-2')}
        data={data}
        renderItem={renderItem}
        keyExtractor={renderKeyExtractor}
        ItemSeparatorComponent={renderItemSeparator}
      />
    </SafeAreaView>
  );
}
