import React, {
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import {StyleSheet, TextInput, TextStyle, View, ViewStyle} from 'react-native';

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
        <View style={styles.card}>
          <TextInput
            ref={textRef}
            style={styles.text}
            editable={false}
            underlineColorAndroid="transparent"
            allowFontScaling={false}
            textAlign="center"
          />
        </View>

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
