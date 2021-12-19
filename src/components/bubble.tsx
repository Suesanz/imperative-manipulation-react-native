import React, {memo, useRef} from 'react';
import {Animated, Dimensions, Easing, View} from 'react-native';
import {Button} from './button';
import {BubbleType2, BubbleType4} from './bubble-type';

interface BubbleProps {
  bubblesCount: number;
}

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const getRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const Bubble: React.FunctionComponent<BubbleProps> = memo(
  ({bubblesCount}) => {
    const bubbleCountEqualDivisionFactor = Math.abs(
      Math.round(bubblesCount / 4),
    );
    const animationRef = useRef<{
      animation: Animated.CompositeAnimation | null;
    }>({
      animation: null,
    }).current;

    const bubbleAnimatedNodes = useRef<
      {
        translateY: Animated.Value;
        animationRef: null | Animated.CompositeAnimation;
      }[]
    >(
      new Array(bubblesCount).fill(0).map((_, idx) => {
        return {
          translateY: new Animated.Value(
            screenHeight +
              getRandomNumber(10, 20 + idx) *
                (idx % bubbleCountEqualDivisionFactor),
          ),
          animationRef: null,
        };
      }),
    ).current;

    const getBubbleOrigin = (idx: number): number => {
      if (idx < bubbleCountEqualDivisionFactor) {
        return getRandomNumber(0, 0.15);
      } else if (
        idx >= bubbleCountEqualDivisionFactor &&
        idx < 2 * bubbleCountEqualDivisionFactor
      ) {
        return getRandomNumber(0.15, 0.25);
      } else if (
        idx >= 2 * bubbleCountEqualDivisionFactor &&
        idx < 3 * bubbleCountEqualDivisionFactor
      ) {
        return getRandomNumber(0.6, 0.79);
      } else {
        return getRandomNumber(0.8, 0.92);
      }
    };

    const translateXNodes = bubbleAnimatedNodes.map((bubble, idx) =>
      bubble.translateY.interpolate({
        inputRange: [
          0,
          screenHeight / 6,
          screenHeight / 4,
          screenHeight / 2,
          screenHeight / 1.5,
          screenHeight / 1.3,
          screenHeight,
        ],
        outputRange: [
          screenWidth * getBubbleOrigin(idx),
          screenWidth * getBubbleOrigin(idx),
          screenWidth * getBubbleOrigin(idx),
          screenWidth * getBubbleOrigin(idx),
          screenWidth * getBubbleOrigin(idx),
          screenWidth * getBubbleOrigin(idx),
          screenWidth * getBubbleOrigin(idx),
        ],
      }),
    );

    const opacityNodes = bubbleAnimatedNodes.map(bubble =>
      bubble.translateY.interpolate({
        inputRange: [
          0,
          screenHeight / 8,
          screenHeight / 7,
          screenHeight / 1.5,
          screenHeight,
        ],
        outputRange: [0.5, 0.8, 1, 1, 0.5],
      }),
    );

    const shadowOpacityNodes = bubbleAnimatedNodes.map(bubble =>
      bubble.translateY.interpolate({
        inputRange: [0, screenHeight / 7, screenHeight / 2, screenHeight],
        outputRange: [0, 0.39, 0.39, 0],
      }),
    );

    const scaleNodes = bubbleAnimatedNodes.map(bubble =>
      bubble.translateY.interpolate({
        inputRange: [0, screenHeight / 7, screenHeight / 2, screenHeight],
        outputRange: [0.8, 1, 1, 0.8],
      }),
    );

    const rotateNodes = bubbleAnimatedNodes.map(bubble =>
      bubble.translateY.interpolate({
        inputRange: [
          0,
          screenHeight / 7,
          screenHeight / 4,
          screenHeight / 1.5,
          screenHeight,
        ],
        outputRange: ['300deg', '270deg', '180deg', '90deg', '0deg'],
      }),
    );

    // const colorNodes = bubbleAnimatedNodes.map(bubble =>
    //   bubble.translateY.interpolate({
    //     inputRange: [0, screenHeight / 7, screenHeight / 2, screenHeight],
    //     outputRange: [
    //       'rgb(154, 6, 128)',
    //       'rgb(121, 1, 140)',
    //       'rgb(76, 0, 112)',
    //       'rgb(22, 0, 64)',
    //     ],
    //   }),
    // );

    const stopAnimateBubbles = () => {
      animationRef.animation?.reset();
    };

    const animateBubbles = () => {
      animationRef.animation = Animated.parallel(
        bubbleAnimatedNodes.map((bubble, idx) => {
          let delay = 0;
          // Delay animation for only 2nd and 4th row
          if (
            (idx >= bubbleCountEqualDivisionFactor &&
              idx < 2 * bubbleCountEqualDivisionFactor) ||
            idx >= 3 * bubbleCountEqualDivisionFactor
          ) {
            delay = 500;
          }

          return Animated.timing(bubble.translateY, {
            duration: 20000 + 5 * (idx % bubbleCountEqualDivisionFactor) * 1000,
            toValue: -50,
            useNativeDriver: true,
            delay,
            easing: Easing.bezier(0.42, 0, 0.58, 1), // easingInOut
          });

          // bubble.animationRef?.start(({finished}) => {
          //   bubble.animationRef?.start();
          // });
        }),
        // }),
        // ),
        // {
        // iterations: -1, // Infinite
        // resetBeforeIteration: true,
        // },
      );
      animationRef.animation?.start(() => {
        stopAnimateBubbles();
      });
    };

    return (
      <>
        {bubbleAnimatedNodes.map((bubble, idx) => (
          <Animated.View
            key={idx}
            pointerEvents={'none'}
            style={{
              height: 40,
              width: 40,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: 50 / 2,
              overflow: 'hidden',
              // borderWidth: 1,
              position: 'absolute',
              opacity: opacityNodes[idx],
              transform: [
                {translateY: bubble.translateY},
                {translateX: translateXNodes[idx]},
                {scale: scaleNodes[idx]},
                // {perspective: 10},
                {rotate: rotateNodes[idx]},
              ],
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: shadowOpacityNodes[idx],
              shadowRadius: 8.3,
              elevation: 13,
            }}>
            {idx % 2 === 0 ? (
              <BubbleType4 />
            ) : (
              <BubbleType2 height={40} width={40} />
            )}
          </Animated.View>
        ))}

        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            top: screenHeight - 70,
            bottom: 0,
            right: 0,
            left: 0,
          }}>
          <Button label="Start animation" onPress={animateBubbles} />
          <Button label="Reset animation" onPress={stopAnimateBubbles} />
        </View>
      </>
    );
  },
);
