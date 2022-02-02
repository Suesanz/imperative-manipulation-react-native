import React, {useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

export const Blocks = ({blockCount = 100}) => {
  const containerRef = useRef<View>(null);
  const noBlockTextRef = useRef<Text>(null);

  const blocks = useRef<{current: View | null}[]>(
    new Array(blockCount).fill(0).map(() => ({current: null})),
  ).current;

  return (
    <View ref={containerRef} style={styles.container}>
      {/* { Blocks are here pre-rendered}*/}
      {blocks.map((blockRef, idx) => (
        <Animated.View key={idx} ref={blockRef} style={styles.block} />
      ))}

      <Text ref={noBlockTextRef} style={styles.noBlockText}>
        No Blocks!!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#ebeff8',
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
  },
  noBlockText: {
    fontWeight: 'bold',
    fontSize: 22,
  },
});
