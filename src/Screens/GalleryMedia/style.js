// import { WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import {StyleSheet} from 'react-native';
import COLORS from '../../Assets/Style/Color';
import DIM from '../../Assets/Style/dimension';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/Dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BackIcon: {
    flexDirection: 'row',
    // marginTop: '10%',
    // marginLeft: '11%',
    // flexGrow: 1,
    // margin: '4%',
  },
  addBtn: {
    borderWidth: 1,
    width: SCREEN_WIDTH/5,
    height: SCREEN_HEIGHT/10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // width: WINDOW_HEIGHT - 300,
  },
});

export default styles;
