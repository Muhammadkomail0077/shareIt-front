import {Dimensions, StyleSheet} from 'react-native';
import COLORS from 'src/Assets/Style/Color';
import FONT from 'src/Assets/Style/Font';

export const styles = StyleSheet.create({
  ContainerfirstBackIcon: {
    flexDirection: 'row',
    // marginTop: '10%',
    // marginLeft: '11%',
  },
  avatar: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
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
  containerImageFirst: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginHorizontal: '10%',
    justifyContent: 'space-between',
    marginVertical: '2%',
    // width: 600,
  },
  signUpButton: {
    // marginLeft: '13%',
    display: 'flex',
    marginTop: '5%',
    marginBottom: '5%',
    // marginRight: '9%',
  },
  containerImage: {
    // marginHorizontal: '2%',
    borderRadius: 10,

    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 3.4,
  },
  containerImage1: {
    // marginHorizontal: '2%',
    borderRadius: 10,
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width - 40,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#4DC50020',
    justifyContent: 'center',
    alignItems: 'center',
  },
  galleryTitle: {
    fontSize: 22,
    color: 'white',
    fontWeight:'800',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  galleryStyle: {
    // borderRadius: 10,
    // height: Dimensions.get('window').height / 3,
    // width: Dimensions.get('window').width / 2.22,
  },
  containerImageSecond: {
    // top: 0,
    flexDirection: 'row',
    alignItems: 'center',
    // marginHorizontal: '10%',
    justifyContent: 'space-between',
    // marginVertical: '5%'
  },
  inputMain: {
    // marginHorizontal: '10%',
    marginBottom: '2%',
    marginTop: '2%',
  },
  btnCOntrol: {
    borderWidth: 1,
    borderColor: COLORS.border_color,
    // marginHorizontal: '10%',
    borderRadius: 15,
    marginVertical: '2%',
    backgroundColor: COLORS.white,
  },
  radioBtn: {
    // bottom: '25%',
    // right: '5%',
    color: COLORS.primary,
  },
  paragraphCUstomButton: {
    // top: '13%',
    paddingBottom: 15,
    paddingTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    // padding
  },
});
