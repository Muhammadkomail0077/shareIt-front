import {StyleSheet} from 'react-native';
import {ITEM_HEIGHT, ITEM_WIDTH, SLIDER_HEIGHT} from './carousel';
import COLORS from 'src/Assets/Style/Color';
import FONT from 'src/Assets/Style/Font';

export const styles = StyleSheet.create({
  Slider_container: {
  },
  Slider_logoContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    marginVertical: '8%',
  },
  Slider_image: {

    borderRadius: 26,
  },
  Slider_logoImg: {
    height: 66,
    width: 66,
    
  },
  Slider_header: {
    fontFamily: FONT.pop,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
    color: COLORS.primary,
    marginTop: '5%',
  },
  Slider_Mainheader: {
    fontFamily: FONT.pop,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    marginTop: 7,
    textAlign: 'center',
    color: COLORS.dark,
  },
  Slider_TopBar: {
    fontFamily: FONT.pop,
    fontStyle: 'normal',
    fontWeight: '700',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    fontSize: 16,
    width: '100%',
    paddingVertical: 4,
    textAlign: 'center',
    backgroundColor: COLORS.lightBgGreen,
    color: COLORS.darkGreen,
  },
  Slider_saveAmount: {
    fontFamily: FONT.pop,
    fontStyle: 'normal',
    fontWeight: '700',
    borderRadius: 12,
    fontSize: 14,
    marginVertical: '5%',
    paddingVertical: '0.2%',
    paddingHorizontal: '5%',
    textAlign: 'center',
    backgroundColor: COLORS.lightBgGreen,
    color: COLORS.darkGreen,
  },
  Slider_body: {
    color: COLORS.txt_color,
    fontFamily: FONT.pop,
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'center',
  },
  surface: {
    backgroundColor: '#ffffff',
    padding: 0,
    justifyContent:'space-around',
    width: ITEM_WIDTH,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
