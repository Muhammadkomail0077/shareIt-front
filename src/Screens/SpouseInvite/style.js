import {StyleSheet} from 'react-native';
import COLORS from 'src/Assets/Style/Color';

export const styles = StyleSheet.create({
  ContainerfirstBackIcon: {
    marginTop: '12%',
    marginLeft: '11%',
    marginRight: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  ContainerSkip: {
    marginTop: 20,
  },
  ContainerInputs: {
    marginHorizontal: '10%',
    marginTop: '10%',
  },
  fieldSet: {
    // marginHorizontal:'10%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  legend: {
    position: 'absolute',
    top: -11,
    left: 10,
    fontWeight: 'bold',
    backgroundColor: '#FFFFFF',
    color: 'rgba(0, 0, 0, 0.4)',
  },
  ContainerMyEmailText: {
    fontSize: 34,
    fontWeight: '700',
    color: '#000000',
    marginHorizontal: '12%',
    marginTop: '5%',
  },
});
