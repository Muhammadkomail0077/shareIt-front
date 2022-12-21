import {StyleSheet} from 'react-native';
import FONT from 'src/Assets/Style/Font';

export const styles = StyleSheet.create({
  ContainerfirstBackIcon: {
    flexDirection: 'row',
    marginTop: '10%',
    marginLeft: '11%',
  },
  ContainerMyEmailText: {
    fontSize: 34,
    fontWeight: '700',
    color: '#000000',
    marginHorizontal: '11%',
    marginTop: '5%',
  },
  ContainerMyEmailDescription: {
    marginHorizontal: '11%',
    marginTop: '3%',
    fontSize: 14,
    fontWeight: '400',
  },
  input: {
    height: 50,
    margin: 5,
    borderWidth: 1,
    padding: 13,
    borderRadius: 15,
    textAlign: 'center',
    borderColor: '#E8E6EA',
    backgroundColor: '#F5F5F5',
  },
  containerText: {
    // alignItems: "flex-end",
    padding: 10,
    fontFamily: FONT.pop,
  },
  containerInputs: {
    alignItems: 'center',
  },
  signUpButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '15%',
    // marginLeft: '13%',
    // display: 'flex',
    // marginTop:'10%',
    // marginRight:'9%'
  },
  containerImage: {
    // width:'10%'
  },
});
