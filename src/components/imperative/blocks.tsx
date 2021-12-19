import React, {useRef} from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
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
  const containerRef = useRef<View>(null);
  const noBlockTextRef = useRef<Text>(null);
  const buttonTextRef = useRef<TextInput>(null);

  const blocks = useRef<{current: View | null}[]>(
    new Array(blockCount).fill(0).map(() => ({current: null})),
  ).current;

  const isBlocksVisible = useRef(false);
  const toggleBlocks = () => {
    isBlocksVisible.current = !isBlocksVisible.current;

    safeAreaViewRef.current?.setNativeProps({
      style: {flexWrap: isBlocksVisible.current ? 'wrap' : 'nowrap'},
    });

    buttonTextRef.current?.setNativeProps({
      text: isBlocksVisible.current ? 'Hide blocks' : 'Show blocks',
    });

    noBlockTextRef.current?.setNativeProps({
      style: {
        display: isBlocksVisible.current ? 'none' : 'flex',
      },
    });

    blocks.forEach(blockRef => {
      blockRef.current?.setNativeProps({
        style: {
          display: isBlocksVisible.current ? 'flex' : 'none',
        },
      });
    });

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
    <View ref={containerRef} style={styles.container}>
      {/* { Blocks are here pre-rendered}*/}
      {blocks.map((blockRef, idx) => {
        return <Animated.View key={idx} ref={blockRef} style={styles.block} />;
      })}

      <Text ref={noBlockTextRef} style={styles.noBlockText}>
        No Blocks!!
      </Text>

      {/* <TouchableOpacity*/}
      {/*  style={styles.button}*/}
      {/*  activeOpacity={0.6}*/}
      {/*  onPress={toggleBlocks}>*/}
      {/*  <TextInput*/}
      {/*    pointerEvents="none"*/}
      {/*    editable={false}*/}
      {/*    underlineColorAndroid={'transparent'}*/}
      {/*    focusable={false}*/}
      {/*    value="Show blocks"*/}
      {/*    ref={buttonTextRef}*/}
      {/*    style={styles.buttonText}*/}
      {/*  />*/}
      {/* </TouchableOpacity>*/}
    </View>
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
  block: {
    backgroundColor: '#ebeff8',
    height: 10,
    width: 10,
    borderWidth: 0.5,
    borderColor: '#5791d4',
    opacity: 0.3,
    // display: 'none',
  },
  // button: {
  //   margin: 5,
  //   height: 38,
  //   width: 165,
  //   backgroundColor: '#2B83EA',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   alignSelf: 'center',
  //   position: 'absolute',
  //   top: screenHeight - 65,
  //   bottom: 0,
  //   borderRadius: 2,
  // },
  // buttonText: {
  //   fontWeight: 'bold',
  //   color: '#EEEEEE',
  // },
  noBlockText: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  // utilButtonContainer: {
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   justifyContent: 'center',
  //   marginTop: 40,
  // },
  // utilButton: {
  //   height: 35,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#2B83EA',
  //   margin: 10,
  //   borderRadius: 4,
  // },
  // utilButtonText: {
  //   color: '#FFFFFF',
  //   marginHorizontal: 12,
  // },
  // inputContainer: {
  //   height: screenHeight,
  //   alignItems: 'center',
  //   alignSelf: 'center',
  //   position: 'absolute',
  //   left: 0,
  //   right: 0,
  //   top: 130,
  //   bottom: 0,
  // },
  // input: {
  //   height: 40,
  //   width: '70%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderWidth: 1.5,
  //   borderColor: '#2B83EA',
  //   marginTop: 50,
  //   marginBottom: 30,
  //   fontSize: 18,
  //   backgroundColor: '#f4f6fa',
  //   borderRadius: 4,
  // },
});
