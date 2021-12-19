import React, {useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
} from 'react-native';

const animatedNodes = 3000;
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const blockHeight = 20;
const blockWidth = 20;

const buttonStyle = {
  margin: 5,
  width: 100,
  height: 50,
  backgroundColor: 'aqua',
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center',
};

export const Blocks = ({blockCount = 100}) => {
  const [showBlocks, setShowBlocks] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const blocks = useRef(new Array(blockCount).fill(0)).current;

  // const translateNodes = useRef(
  //   new Array(animatedNodes).fill(0).map((_, idx) => {
  //     // let x = 0,
  //     //   y = 0;
  //     // x = idx * blockWidth + 2 >= screenHeight ? x + blockWidth : 0;
  //     // y = idx * blockHeight + 2 >= screenHeight ? 0 : 0;
  //     // console.log(idx * blockHeight + 2, screenHeight, x, y);
  //     return {
  //       animated: new Animated.ValueXY({x: 0, y: 0}),
  //       viewRef: {current: null},
  //     };
  //   }),
  // );
  // console.log(JSON.stringify(translateNodes));
  // const resetAnimation = () => {
  //   translateNodes.current.forEach((node, idx) => {
  //     node.y.setValue(idx);
  //     node.x.setValue(0);
  //   });
  // };
  const isDisplay = useRef(false);
  // console.log((animatedNodes * blockHeight) / screenHeight);
  const animateBlocks = () => {
    isDisplay.current = !isDisplay.current;
    console.log('isDisplay.current', isDisplay.current);
    // translateNodes.current.map(node => {
    //   node.viewRef?.current?.setNativeProps({
    //     style: {
    //       display: isDisplay ? 'flex' : 'none',
    //       position: 'relative',
    //     },
    //   });
    // });
    setShowBlocks(!showBlocks);
    // viewRef.current.setNativeProps({
    //   style: {display: isDisplay.current ? 'flex' : 'none'},
    // });
    // const zeroToWidth = Animated.parallel(
    //   translateNodes.current.map(node => {
    //     return Animated.timing(node.x, {
    //       toValue:
    //         screenWidth -
    //         Math.round(
    //           (animatedNodes * (blockHeight + containerHorizontalMargin)) /
    //             screenHeight,
    //         ) *
    //           blockWidth,
    //       useNativeDriver: true,
    //       duration: 5000,
    //     });
    //   }),
    // );
    //
    // const widthToZero = Animated.parallel(
    //   translateNodes.current.map(node => {
    //     return Animated.timing(node.x, {
    //       toValue: 0,
    //       useNativeDriver: true,
    //       duration: 5000,
    //     });
    //   }),
    // );
    //
    // Animated.sequence([zeroToWidth, widthToZero]).start(() =>
    //   console.log('Animation end'),
    // );
  };

  // const show = () => {
  //   translateNodes.current.map(node => {
  //     node.viewRef?.current?.setNativeProps({
  //       style: {
  //         display: 'flex',
  //         // position: 'relative',
  //       },
  //     });
  //   });
  // };
  //
  // const hide = () => {
  //   translateNodes.current.map(node => {
  //     node.viewRef?.current?.setNativeProps({
  //       style: {
  //         display: 'none',
  //         // position: 'relative',
  //       },
  //     });
  //   });
  // };

  // const viewRef = useRef();
  // const colors = ['#2B83EA', '#2B83EA'];
  // const backgroundColor = '#A2C9F6';
  return (
    <SafeAreaView style={[styles.container, {flexWrap: 'wrap'}]}>
      {blocks.map((_, idx) => {
        return (
          <Animated.View
            key={idx}
            // ref={node.viewRef}
            style={styles.block}
          />
        );
      })}

      <View style={styles.inputContainer}>
        <Text style={styles.text}>{inputValue}</Text>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={setInputValue}
        />
      </View>

      {/* <TouchableOpacity*/}
      {/*  style={styles.button}*/}
      {/*  activeOpacity={0.6}*/}
      {/*  onPress={() => {*/}
      {/*    setShowBlocks(!showBlocks);*/}
      {/*  }}>*/}
      {/*  <Text style={styles.buttonText}>*/}
      {/*    {showBlocks ? 'Hide blocks' : 'Show blocks'}*/}
      {/*  </Text>*/}
      {/* </TouchableOpacity>*/}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexWrap: 'wrap',
    backgroundColor: '#ebeff8',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  block: {
    backgroundColor: '#ebeff8',
    height: 12,
    width: 12,
    borderWidth: 0.5,
    borderColor: '#5791d4',
    opacity: 0.3,
  },
  button: {
    margin: 5,
    height: 38,
    width: 165,
    backgroundColor: '#2B83EA',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: screenHeight - 65,
    bottom: 0,
    borderRadius: 2,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#EEEEEE',
  },
  noBlockText: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  inputContainer: {
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 50,
    bottom: 0,
  },
  input: {
    height: 40,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#2B83EA',
    marginTop: 150,
    fontSize: 18,
    backgroundColor: '#f4f6fa',
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
});
