import React from 'react';
import {Image, ImageSourcePropType} from 'react-native';
import {styles} from '../styles';

export interface CustomImageRef {
  setOpacity: (opacity: number) => void;
  setScale: (scale: number) => void;
  setRotate: (rotate: string) => void;
  changeImage: (imageSrc: ImageSourcePropType) => void;
}

export const CustomImage = ({opacity, scale, rotate, source}) => {
  return (
    <Image
      source={source}
      style={[styles.image, {opacity, transform: [{scale}, {rotate}]}]}
    />
  );
};
