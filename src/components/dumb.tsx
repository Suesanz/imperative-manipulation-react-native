const [inputValue, setInputValue] = useState('');

<View>
  <Text>{inputValue}</Text>
  <TextInput value={inputValue} onChangeText={setInputValue} />
</View>;
