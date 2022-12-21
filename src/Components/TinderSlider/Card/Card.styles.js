import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../../Assets/Style/Color';
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  card: {
    /*
      Setting the height according to the screen height,
      also could be fixed value orbased on percentage.
      In this example this worked well on Android and iOS.
    */
    height: height / 1.75,
    marginTop: -30,
    // marginHorizontal: 15,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
  },
  image: {
    borderRadius: 20,
    flex: 1,
    width: '100%',
  },
  photoDescriptionContainer: {
    justifyContent: 'flex-end',
    // alignItems: 'flex-start',
    // flexDirection: 'column',
    height: '100%',
    width: '100%',
    position: 'absolute',
    borderRadius: 20,
    // left: 10,
    // bottom: 10,
  },
  locationMark: {
    justifyContent: 'space-between',
    // alignItems: 'flex-start',
    // flexDirection: 'column',
    height: '100%',
    width: '100%',
    position: 'absolute',
    borderRadius: 20,
    // left: 10,
    // bottom: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.darkGreen,
    opacity: 0.3,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textHeading: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',

    color: COLORS.white,
    // color: COLORS.black,
    // fontFamily: 'Avenir',
    // textShadowColor: 'black',
    textShadowRadius: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    // color: COLORS.black,
    color: COLORS.white,
    // fontFamily: 'Avenir',
    // textShadowColor: 'black',
    marginBottom: 15,
    textShadowRadius: 10,
  },
  textMark: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    color: COLORS.white,
    // color: COLORS.black,
    // fontFamily: 'Avenir',
    // textShadowColor: 'black',
    textShadowRadius: 10,
  },
});
