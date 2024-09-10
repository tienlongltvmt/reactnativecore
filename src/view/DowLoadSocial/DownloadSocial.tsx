import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import tw from 'lib/tailwind';
import {MyText} from 'src/share/components';

export default function DownloadSocial() {
  return (
    <ScrollView style={tw.style('flex-1 bg-white')}>
      <TextInput
        placeholder="Gắn link video"
        style={tw.style(
          'p-4 border border-gray-300 rounded-md m-4 bg-white shadow-lg',
        )}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={tw.style(
          'bg-green mx-4 items-center justify-center py-3 rounded-md',
        )}>
        <MyText style={tw.style('text-white font-bold')}>Tải video</MyText>
      </TouchableOpacity>
    </ScrollView>
  );
}
