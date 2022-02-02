import React, {SetStateAction} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from '../styles';

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
      {/*  Text message box  */}
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
