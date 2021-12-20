import React, {useState} from 'react';
import {
  Dimensions,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  TextStyle,
  View,
} from 'react-native';
import {Blocks} from './src/components/imperative/blocks';
import {CustomInput} from './src/components/declarative/custom-input';
import {CustomImage} from './src/components/declarative/custom-image';
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
  const [input, setInput] = useState('');
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState('0deg');
  const [source, setSource] = useState(require('./src/assets/banner-1.png'));

  const getRandomValue = (
    array: number[] | string[],
  ): string | number | ImageSourcePropType => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const setImageOpacity = (): void => {
    // @ts-ignore
    setOpacity(getRandomValue(randomOpacityValues));
  };

  const setImageScale = (): void => {
    // @ts-ignore
    setScale(getRandomValue(randomScaleValues));
  };

  const setImageRotate = (): void => {
    // @ts-ignore
    setRotate(getRandomValue(randomRotateValues));
  };

  const changeImage = (): void => {
    setSource(getRandomValue(randomImage));
  };

  const onInputClear = (): void => {
    setInput('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Blocks blockCount={3000} />

      <View style={styles.inputContainer}>
        <CustomInput input={input} setInput={setInput} />
        <Button label={'Clear'} onPress={onInputClear} />
        <CustomImage
          opacity={opacity}
          scale={scale}
          rotate={rotate}
          source={source}
        />

        <View style={styles.utilButtonContainer}>
          <Button label="Opacity" onPress={setImageOpacity} />
          <Button label="Scale" onPress={setImageScale} />
          <Button label="Rotate" onPress={setImageRotate} />
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
    top: 135,
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
