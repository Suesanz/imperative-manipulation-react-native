import React, {SetStateAction} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

export interface CustomInputRef {
  clear: () => void;
}

interface CustomInputProps {
  input: string;
  setInput: React.Dispatch<SetStateAction<string>>;
}

export const CustomInput: React.FunctionComponent<CustomInputProps> = ({
  input,
  setInput,
}) => {
  return (
    <>
      {/*  Text message box from TextInput  */}
      <View style={styles.card}>
        <Text style={styles.text}>{input}</Text>
      </View>

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
    fontSize: 18,
  } as TextStyle,

  card: {
    height: 85,
    width: '72%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#2B83EA',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f4f6fa',
    fontSize: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  } as ViewStyle,
});
