import React, {useState} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {ic_robot_chat} from 'src/assets';
import {MyIcon} from 'src/share/components';
import tw from 'lib/tailwind';
import MyNavigator from 'src/router/MyNavigator';

function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
}

const {width, height} = Dimensions.get('screen');

export default function ChatBotBottom() {
  const [isShow, setIsShow] = useState(true);

  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);
  const prevTranslationX = useSharedValue(0);
  const prevTranslationY = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {translateX: translationX.value},
      {translateY: translationY.value},
    ],
  }));

  const pan = Gesture.Pan()
    .minDistance(1)
    .onStart(() => {
      prevTranslationX.value = translationX.value;
      prevTranslationY.value = translationY.value;
    })
    .onUpdate(event => {
      const maxTranslateX = width / 2 - 50;
      const maxTranslateY = height;

      translationX.value = clamp(
        prevTranslationX.value + event.translationX,
        -maxTranslateX,
        maxTranslateX,
      );
      translationY.value = clamp(
        prevTranslationY.value + event.translationY,
        -maxTranslateY,
        maxTranslateY,
      );
    })
    .onEnd(e => {
      console.log('e', e);
    })
    .runOnJS(true);

  return (
    <>
      {isShow ? (
        <GestureHandlerRootView style={styles.container}>
          <GestureDetector gesture={pan}>
            <Animated.View style={[animatedStyles, styles.box]}>
              <TouchableOpacity
                onPress={() => {
                  setIsShow(false);
                }}
                style={tw.style('bg-white rounded-full p-px self-end')}>
                <MyIcon
                  iconFontType="AntDesign"
                  name="close"
                  size={18}
                  color={'gray'}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  MyNavigator.navigate('ChatBot');
                }}>
                <SvgXml xml={ic_robot_chat} />
              </TouchableOpacity>
            </Animated.View>
          </GestureDetector>
        </GestureHandlerRootView>
      ) : (
        <TouchableOpacity
          onPress={() => {
            setIsShow(true);
          }}>
          <MyIcon
            name="left"
            iconFontType="AntDesign"
            size={24}
            color={'black'}
          />
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
});
