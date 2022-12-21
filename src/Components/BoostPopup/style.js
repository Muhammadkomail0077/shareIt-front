import {StyleSheet} from 'react-native';
import COLORS from 'src/Assets/Style/Color';
import FONT from 'src/Assets/Style/Font';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.bgcolor,
  },
  containerText: {
    alignItems: 'flex-end',
    fontFamily: FONT.pop,
  },
  containerHeading: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '5%',
  },

  containerLoginButton: {
    textAlign: 'center',
    alignItems: 'center',
    Color: COLORS.white,
  },
  LoginButton: {
    textDecorationColor: COLORS.white,
    backgroundColor: COLORS.primary,
    width: '90%',
    height: 56,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
  },
  LoginButtonColor: {
    color: COLORS.white,
    alignItems: 'center',
    fontFamily: FONT.pop,
    fontWeight: 'bold',
    fontSize: 16,
  },
  containerlastText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  containerlastTextFirst: {
    fontSize: 14,
  },
  containerlastTextSecond: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: FONT.pop,
  },
  logo: {
    justifyContent: 'space-evenly',
    // alignItems:
  },
});
