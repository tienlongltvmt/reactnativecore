import tw from 'lib/tailwind';
import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SafeAreaView} from 'react-native-safe-area-context';
import {I3DProduct} from 'src/interface/3D.interface';
import MyNavigator from 'src/router/MyNavigator';
import {MyIcon, MyText} from 'src/share/components';

let data: I3DProduct[] = [
  {
    id: 1,
    name: 'Model 1',
    url: 'https://raw.githubusercontent.com/google/filament/main/third_party/models/DamagedHelmet/DamagedHelmet.glb',
    thumbline: '',
  },
  {
    id: 2,
    name: 'Model 2',
    url: 'https://trade-now.s3.us-west-2.amazonaws.com/anatomy3d/angiology.glb',
    thumbline: '',
  },
  {
    id: 3,
    name: 'Model 3',
    url: 'https://trade-now.s3.us-west-2.amazonaws.com/anatomy3d/ecorche.glb',
    thumbline: '',
  },
];

export function List3D() {
  const renderItem = ({item, index}: {item: I3DProduct; index: number}) => {
    return (
      <TouchableOpacity
        style={tw.style(
          'px-4 py-2 flex-row items-center justify-between bg-slate-50 rounded-md',
        )}
        onPress={() => {
          MyNavigator.navigate('DetailProduct3D', {
            item: item,
          });
        }}>
        <View style={tw.style('flex-row items-center')}>
          <FastImage
            source={{uri: ''}}
            style={tw.style('w-10 h-10 bg-slate-400 rounded-md mr-4')}
          />
          <MyText style={tw.style('font-bold')}>{item.name}</MyText>
        </View>
        <MyIcon
          name="right"
          iconFontType="AntDesign"
          size={14}
          color={'black'}
        />
      </TouchableOpacity>
    );
  };
  const renderKeyExtractor = (item: I3DProduct) => {
    return item.id.toString();
  };
  const renderItemSeparator = () => {
    return <View style={tw.style('h-px my-2')} />;
  };
  return (
    <SafeAreaView style={tw.style('flex-1')}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={renderKeyExtractor}
        ItemSeparatorComponent={renderItemSeparator}
        contentContainerStyle={tw.style('mx-4')}
      />
    </SafeAreaView>
  );
}
