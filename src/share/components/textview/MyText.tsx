/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-use-before-define */

import React from 'react';
import {Text, TextProps} from 'react-native';
import tw from '../../../../lib/tailwind';

export interface IMyTextProps extends TextProps {
  children?: any | null;
}
/**
 ** TextSize default '14'
 ** FontFamily default 'Medium'
 *
 */
export function MyText(props: IMyTextProps) {
  const {children, style} = props;

  return (
    <Text
      {...props}
      style={[tw.style('text-black text-sm'), style]}
      allowFontScaling={false}>
      {children}
    </Text>
  );
}
