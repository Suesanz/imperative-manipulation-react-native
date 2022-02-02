import {
  Dimensions,
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

const screenHeight = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.2,
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
    padding: 10,
    borderWidth: 0.2,
    borderColor: '#2B83EA',
    borderRadius: 2,
    backgroundColor: '#f4f6fa',
    fontSize: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  } as ViewStyle,

  image: {
    width: '72%',
    marginTop: 50,
    borderWidth: 1.2,
    borderRadius: 4,
    borderColor: '#2B83EA',
  } as ImageStyle,

  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#ebeff8',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    height: screenHeight,
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 126,
    bottom: 0,
  },
  backgroundImage: {
    resizeMode: 'contain',
    width: '100%',
    position: 'absolute',
    top: -50,
    bottom: 0,
  },
  containerInput: {
    height: 30,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#162F56',
    marginTop: 150,
    fontSize: 18,
  },
  containerText: {
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

  utilButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 40,
  },
});
