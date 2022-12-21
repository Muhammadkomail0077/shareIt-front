import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
// import { Colors } from "react-native-paper";
import COLORS from 'src/Assets/Style/Color';
import FONT from 'src/Assets/Style/Font';

const width = Dimensions.get('window').width / 1.8;
const height = Dimensions.get('window').height / 3.3;

export const styles = StyleSheet.create({
  ContainerfirstBackIcon: {
    flexDirection: 'column-reverse',
    // marginTop: '7%',
    // marginHorizontal: '5%',
    // marginLeft: '11%',
    // backgroundColor:'black'
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
    // marginTop: '5%',
    // marginLeft: 32,
    // marginRight: 32
    // marginLeft:'13%',
    // marginRight:'9%',
    // alignContent: 'center',
    // alignSelf: 'center',
    alignItems: 'center',
  },
  signUpButton: {
    // marginLeft: '10%',
    // display: 'flex',
    // marginVertical: '10%',
    // marginRight: '9%',
  },
  containerImage: {
    height: height,
    width: width,
    // width:'10%'
  },
  containerorLoginWith: {
    // display: "flex",
    marginTop: '8%',
    flexDirection: 'row',
    // alignItems: "center",
    // alignContent: "center",
    alignSelf: 'center',
  },
  divider: {
    borderWidth: 0.4,
    borderColor: COLORS.border_color,
    width: '28%',
    marginTop: '3.9%',
  },
  containerForgetSecond: {
    marginHorizontal: '3%',
  },
});
