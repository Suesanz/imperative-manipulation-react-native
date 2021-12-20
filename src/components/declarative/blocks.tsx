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

const screenHeight = Dimensions.get('screen').height;

export const Blocks = ({blockCount = 100}) => {
  const [inputValue, setInputValue] = useState('');

  const blocks = useRef(new Array(blockCount).fill(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      {blocks.map((_, idx) => {
        return <Animated.View key={idx} style={styles.block} />;
      })}

      <View style={styles.inputContainer}>
        <Text style={styles.text}>{inputValue}</Text>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={setInputValue}
        />
      </View>
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
