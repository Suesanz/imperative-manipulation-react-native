import React from 'react';
import {Image, ImageSourcePropType, ImageStyle, StyleSheet} from 'react-native';

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

const styles = StyleSheet.create({
  image: {
    width: '72%',
    marginTop: 50,
    borderWidth: 1.5,
    borderRadius: 4,
    borderColor: '#2B83EA',
  } as ImageStyle,
});
