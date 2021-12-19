import React from 'react';
import {StyleSheet, Text, TextInput, TextStyle} from 'react-native';

export interface CustomInputRef {
  clear: () => void;
}

export const CustomInput = ({input, setInput}) => {
  return (
    <>
      {/*  Text message box from TextInput  */}
      <Text style={styles.text}>{input}</Text>

      <TextInput
        value={input}
        style={styles.input}
        onChangeText={setInput}
        placeholder="Enter something nice"
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#2B83EA',
    marginTop: 40,
    marginBottom: 30,
    fontSize: 18,
    backgroundColor: '#f4f6fa',
    borderRadius: 4,
  },

  text: {
    height: 80,
    width: '72%',
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
