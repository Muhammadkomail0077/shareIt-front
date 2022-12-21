import {StyleSheet} from 'react-native';
import COLORS from 'src/Assets/Style/Color';
import FONT from 'src/Assets/Style/Font';
export const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginLeft: -20,
    top: -20,
    zIndex: 1,
    transform: [{rotate: '5deg'}],
    backgroundColor: COLORS.white,
  },
  img1: {
    width: 50,
    height: 50,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginLeft: -20,
    bottom: -10,
    zIndex: 1,
    transform: [{rotate: '5deg'}],
    backgroundColor: COLORS.white,
  },
});
