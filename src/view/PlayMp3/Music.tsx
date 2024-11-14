import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {MyIcon, MyText} from 'src/share/components';
import tw from 'lib/tailwind';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IMusic} from 'src/interface/Music.interface';
import ItemMusic from './components/ItemMusic';
import TrackPlayer, {
  Event,
  State,
  useActiveTrack,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {addTrack, setupPlayer} from './service/SetupService';
import {QueueInitialTracksService} from './service/QueueInitialTracksService';
const events = [Event.PlaybackState, Event.PlaybackError];

export default function Music() {
  const [queue, setQueue] = useState<IMusic[]>([]);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [playerState, setPlayerState] = useState(null);
  const [play, setPlay] = useState(false);
  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();
      await addTrack();
      setPlay(isSetup);
    }
    setup();
  }, []);

  async function loadPlaylist() {
    const queue = await TrackPlayer.getQueue();
    setQueue(queue);
  }

  useEffect(() => {
    if (play) {
      loadPlaylist();
    }
  }, [play]);

  useTrackPlayerEvents(events, event => {
    if (event.type === Event.PlaybackError) {
      console.warn('An error occured while playing the current track.');
    }
    if (event.type === Event.PlaybackState) {
      setPlayerState(event.state);
    }
  });

  const renderItem = ({item, index}: {item: IMusic; index: number}) => {
    return <ItemMusic item={item} index={index} />;
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
          // onPress={handleShuffle}
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
        data={queue}
        renderItem={renderItem}
        keyExtractor={renderKeyExtractor}
        ItemSeparatorComponent={renderItemSeparator}
      />
    </SafeAreaView>
  );
}
