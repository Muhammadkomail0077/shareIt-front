import {StyleSheet} from 'react-native';
import COLORS from 'src/Assets/Style/Color';
import FONT from 'src/Assets/Style/Font';

export const styles = StyleSheet.create({
  header: {
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  mainContainer: {
    backgroundColor: COLORS.bgcolor,
    height: '100%',
  },
  containerText: {
    alignItems: 'flex-end',
    fontFamily: FONT.pop,
  },
  avatar: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  headline: {
    fontFamily: FONT.pop,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 34,
    textAlign: 'left',
    marginLeft: '10%',
    marginTop: '10%',
    padding: 10,
  },
  avatar: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
