import {StyleSheet, Dimensions} from 'react-native';
import FONT from '../../Assets/Style/Font';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 50,
    justifyContent: 'space-between',
  },
  swiperContainer: {
    height: height / 2,
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '5%',
  },
  copyright: {
    textAlign: 'center',
    fontSize: 10,
    color: 'black',
    paddingBottom: 20,
    fontFamily: FONT.pop,
  },
  overlayWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 100,
  },
});
