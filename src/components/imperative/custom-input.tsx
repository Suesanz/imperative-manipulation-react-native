import React, {
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import {TextInput, View} from 'react-native';
import {styles} from '../styles';

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
        {/*  Text message box  */}
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
