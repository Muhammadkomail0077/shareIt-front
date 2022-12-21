import {StyleSheet} from 'react-native';
import COLORS from 'src/Assets/Style/Color';
export const styles = StyleSheet.create({
  containerTinyLogo: {
    borderColor: COLORS.primary,
    borderWidth: 1,
    padding: 17,
    top: -1,
    // paddingVertical: '3%',
    // paddingHorizontal: '4.5%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  tinyLogo: {
    width: 30,
    height: 33,
  },
});
