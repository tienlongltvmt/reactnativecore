import React, {useImperativeHandle, useRef, useState} from 'react';
import {Animated, View, StyleSheet} from 'react-native';
import {MyText} from '../textview/MyText';
import tw from 'lib/tailwind';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MyIcon} from '../icon/MyIcon';

export type RootToastRef = {
  onToast: (
    message?: string,
    type?: 'default' | 'info' | 'success' | 'danger' | 'warning',
    /** duration: millisecond */
    duration?: number,
  ) => void | undefined;
};
type TypeToast = 'default' | 'info' | 'success' | 'danger' | 'warning';
type Toast = {
  isHide: boolean;
  message?: string;
  type?: TypeToast;
};
export const RootToast = React.forwardRef<RootToastRef>((_props, ref) => {
  const {top} = useSafeAreaInsets();
  const [toast, setToast] = useState<Toast>({
    isHide: true,
    message: '',
    type: 'default',
  });

  const delay = useRef(2000).current;

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;

  const showToast = (message?: string, type?: TypeToast, duration?: number) => {
    setToast({
      isHide: false,
      message,
      type,
    });

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 350,
        useNativeDriver: false,
      }),
      Animated.timing(progressAnim, {
        toValue: 1,
        duration: duration || delay,
        useNativeDriver: false,
      }),
    ]).start(() => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 350,
          useNativeDriver: false,
        }),
        Animated.timing(progressAnim, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }),
      ]).start(() => {
        setToast({
          isHide: true,
          message: '',
          type: 'default',
        });
      });
    });
  };

  useImperativeHandle(ref, () => ({
    onToast(message, type, duration) {
      showToast(message, type, duration);
    },
  }));

  if (toast.isHide) return null;

  let bg;
  let bgProgress;
  let textColor;
  let renderIcon;

  switch (toast.type) {
    case 'success':
      bg = tw.style('bg-[#E1ECC8]');
      textColor = tw.style('text-emerald-800');
      renderIcon = (
        <MyIcon
          name="checkmark-done-outline"
          iconFontType="Ionicons"
          size={24}
          color={'#065f46'}
        />
      );
      break;
    case 'danger':
      bg = tw.style('bg-red-100');
      bgProgress = tw.style('bg-red-600');
      textColor = tw.style('text-red-600');
      renderIcon = (
        <MyIcon
          name="emoji-sad"
          iconFontType="Entypo"
          size={24}
          color={'red'}
        />
      );
      break;
    case 'info':
      bg = tw.style('bg-sky-100');
      textColor = tw.style('text-sky-600');
      bgProgress = tw.style('bg-sky-600');
      renderIcon = (
        <MyIcon
          name="information-circle"
          iconFontType="Ionicons"
          size={24}
          color={'#0284c7'}
        />
      );
      break;
    case 'warning':
      bg = tw.style('bg-[#FDFCE5]');
      textColor = tw.style('text-yellow-700');
      bgProgress = tw.style('bg-yellow-700');
      renderIcon = (
        <MyIcon
          name="information-circle"
          iconFontType="Ionicons"
          size={24}
          color={'#F6995C'}
        />
      );
      break;

    default:
      bg = tw.style('bg-slate-200');
      textColor = tw.style('text-black');
      break;
  }

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
      }}>
      <Animated.View
        style={[
          {
            borderRadius: 8,
            opacity: fadeAnim,
            padding: 16,
            paddingTop: top || 16,
          },
          bg,
          tw.style('sm:w-5/10 flex-row landscape:self-center items-center'),
        ]}>
        {renderIcon}
        <MyText
          style={[{fontWeight: '500'}, tw.style('ml-2 text-base'), textColor]}>
          {toast.message || ''}
        </MyText>
      </Animated.View>
      <Animated.View
        style={[
          tw.style('h-1 w-full mx-1 rounded-b-2xl -mt-1'),
          {
            width: progressAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'],
            }),
          },
          bgProgress,
        ]}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  progressBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
    borderRadius: 2,
  },
});
