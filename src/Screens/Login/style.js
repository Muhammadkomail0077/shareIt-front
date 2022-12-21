import {Dimensions, StyleSheet} from 'react-native';
import COLORS from 'src/Assets/Style/Color';
import FONT from 'src/Assets/Style/Font';
const height = Dimensions.get('window').height / 5.5;
const width = Dimensions.get('window').width / 3;

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F5F5F5',
  },
  containerImg: {
    alignItems: 'center',
  },
  logoImg: {
    width: width,
    height: height,
    marginTop: '10%',
  },
  containerHeading: {
    alignContent: 'center',
    textAlign: 'center',
    alignContent: 'center',
  },
  textheading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: '10%',
    color: '#000000',
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
  containerInputs: {
    marginTop: 5,
  },
  containerForget: {
    display: 'flex',
    marginRight: 30,
    marginLeft: 25,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  containerForgetFirst: {
    borderBottomColor: '#E8E6EA',
    borderBottomWidth: 1,
    width: '37%',
    display: 'flex',
    marginBottom: 0,
  },
  containerLoginLine: {
    borderBottomColor: '#E8E6EA',
    borderBottomWidth: 1,
    width: '35%',
    display: 'flex',
    marginBottom: 0,
  },
  containerForgetSecond: {
    marginRight: 6,
    marginLeft: 6,
  },
  containerForgetSecond: {
    marginHorizontal: '3%',
  },
  containerLoginButton: {
    textAlign: 'center',
    alignItems: 'center',
    Color: 'white',
    // marginTop: 20
  },
  LoginButton: {
    textDecorationColor: '#FFFFFF',
    backgroundColor: '#4DC500',
    width: '90%',
    height: 56,
    color: 'red',
    borderRadius: 15,
  },
  LoginButtonColor: {
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: FONT.pop,
    fontWeight: 'bold',
    lineHeight: 24,
    fontSize: 24,
    marginTop: 20,
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
    width: '30%',
    borderWidth: 0.3,
    alignSelf: 'center',
    borderColor: '#ADAFBB',
    // marginTop: '1%'
  },
  dividerForgetFirst: {
    width: '24%',
    borderWidth: 0.3,
    alignSelf: 'center',
    borderColor: '#ADAFBB',
    // marginTop: '1%'
  },

  containerVectorIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '11%',
  },
  icons: {
    marginHorizontal: 13,
    borderColor: COLORS.primary,
    borderWidth: 1,
    padding: 15,
    borderRadius: 15,
  },
  tinyLogo: {
    width: 32,
    height: 30,
    marginTop: '10%',
  },
  containerTinyLogo: {
    borderColor: COLORS.primary,
    borderWidth: 1,
    padding: 15,
    // borderColor
    // paddingVertical: '3%',
    // paddingHorizontal: '4.5%',
    borderRadius: 15,
  },
  containerlastText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  containerlastTextFirst: {
    fontSize: 18,
    // marginHorizontal:13
  },
  containerlastTextSecond: {
    color: '#4DC500',
    fontWeight: 'bold',
    fontSize: 18,
    marginHorizontal: '1%',
  },

  containerlastTwoLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    // marginTop: 30
  },
  containerlastTwoLinkFirst: {
    fontSize: 16,
    marginHorizontal: 10,
    color: '#4DC500',
  },
});
