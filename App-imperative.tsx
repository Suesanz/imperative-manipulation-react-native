import React, {useRef} from 'react';
import {
  Dimensions,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  TextStyle,
  View,
} from 'react-native';
import {Blocks} from './src/components/imperative/blocks';
import {
  CustomInput,
  CustomInputRef,
} from './src/components/imperative/custom-input';
import {
  CustomImage,
  CustomImageRef,
} from './src/components/imperative/custom-image';
import {Button} from './src/components/button';
import {Bubble} from './src/components/bubble';

export const containerHorizontalMargin = 2;

const screenHeight = Dimensions.get('screen').height;

const randomOpacityValues = [0.2, 0.4, 0.6, 0.8];
const randomScaleValues = [0.4, 0.6, 0.8, 1];
const randomRotateValues = ['20deg', '25deg', '-20deg', '-25deg', '0deg'];
const randomImage = [
  require('./src/assets/banner-1.png'),
  require('./src/assets/banner-2.png'),
];

const App = () => {
  const imageRef = useRef<CustomImageRef>(null);
  const inputRef = useRef<CustomInputRef>(null);

  const getRandomValue = (
    array: number[] | string[],
  ): string | number | ImageSourcePropType => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const setOpacity = (): void => {
    const opacity = getRandomValue(randomOpacityValues) as number;
    imageRef.current?.setOpacity(opacity);
  };

  const setScale = (): void => {
    const scale = getRandomValue(randomScaleValues) as number;
    imageRef.current?.setScale(scale);
  };

  const setRotate = (): void => {
    const rotate = getRandomValue(randomRotateValues) as string;
    imageRef.current?.setRotate(rotate);
  };

  const changeImage = (): void => {
    const imageSrc = getRandomValue(randomImage) as ImageSourcePropType;
    imageRef.current?.changeImage(imageSrc);
  };

  const onInputClear = (): void => {
    inputRef.current?.clear();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Blocks blockCount={3000} />

      <View style={styles.inputContainer}>
        <CustomInput ref={inputRef} />
        <Button label={'Clear'} onPress={onInputClear} />
        <CustomImage ref={imageRef} />

        <View style={styles.utilButtonContainer}>
          <Button label="Opacity" onPress={setOpacity} />
          <Button label="Scale" onPress={setScale} />
          <Button label="Rotate" onPress={setRotate} />
          <Button label="Change image" onPress={changeImage} />
        </View>
      </View>
      <Bubble bubblesCount={48} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#ebeff8',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    height: screenHeight,
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 130,
    bottom: 0,
  },
  backgroundImage: {
    resizeMode: 'contain',
    width: '100%',
    position: 'absolute',
    top: -50,
    bottom: 0,
  },
  input: {
    height: 30,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#162F56',
    marginTop: 150,
    fontSize: 18,
  },
  text: {
    height: 80,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 6,
    borderColor: '#2B83EA',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f4f6fa',
    fontSize: 18,
  } as TextStyle,

  utilButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 40,
  },
});

export default App;
