import React, {
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import {Image, ImageSourcePropType, ImageStyle, StyleSheet} from 'react-native';

export interface CustomImageRef {
  setOpacity: (opacity: number) => void;
  setScale: (scale: number) => void;
  setRotate: (rotate: string) => void;
  changeImage: (imageSrc: ImageSourcePropType) => void;
}

export const CustomImage = forwardRef(
  (_, ref: ForwardedRef<CustomImageRef>) => {
    const imageRef = useRef<Image>(null);

    const setOpacity = (opacity: number): void => {
      imageRef.current?.setNativeProps({opacity});
    };

    const setScale = (scale: number): void => {
      imageRef.current?.setNativeProps({transform: [{scale}]});
    };

    const setRotate = (rotate: string): void => {
      imageRef.current?.setNativeProps({transform: [{rotate}]});
    };

    const changeImage = (imageSrc: ImageSourcePropType): void => {
      imageRef.current?.setNativeProps({
        source: [Image.resolveAssetSource(imageSrc)],
      });
    };

    useImperativeHandle(ref, () => ({
      setOpacity,
      setScale,
      setRotate,
      changeImage,
    }));

    return (
      <Image
        ref={imageRef}
        source={require('../../assets/banner-1.png')}
        style={styles.image}
      />
    );
  },
);

const styles = StyleSheet.create({
  image: {
    width: '72%',
    marginTop: 50,
    borderWidth: 1.5,
    borderRadius: 4,
    borderColor: '#2B83EA',
  } as ImageStyle,
});
