import React, {
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import {StyleSheet, TextInput, TextStyle} from 'react-native';

export interface CustomInputRef {
  clear: () => void;
}

export const CustomInput = forwardRef(
  (_, ref: ForwardedRef<CustomInputRef>) => {
    const inputRef = useRef<TextInput>(null);
    const textRef = useRef<TextInput>(null);

    const setValue = (val: string): void => {
      inputRef.current?.setNativeProps({text: val});
      textRef.current?.setNativeProps({text: val});
    };

    const clear = (): void => {
      inputRef.current?.clear();
      textRef.current?.clear();
    };

    useImperativeHandle(ref, () => ({clear}));

    return (
      <>
        {/*  Text message box from TextInput  */}
        <TextInput
          ref={textRef}
          style={styles.text}
          editable={false}
          underlineColorAndroid="transparent"
          allowFontScaling={false}
          textAlign="center"
        />

        <TextInput
          ref={inputRef}
          style={styles.input}
          onChangeText={setValue}
          placeholder="Enter something nice"
        />
      </>
    );
  },
);

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
