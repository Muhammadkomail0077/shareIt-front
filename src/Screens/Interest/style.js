import {StyleSheet} from 'react-native';
import COLORS from 'src/Assets/Style/Color';
import FONT from 'src/Assets/Style/Font';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.bgcolor,
    height: '100%',
  },
  containerText: {
    // alignItems: "flex-end",
    // padding: 10,
    fontFamily: FONT.pop,
  },
  Chip: {
    // flexDirection:'row',
    alignItems: 'center',
    marginLeft: '4%',
    marginRight: '4%',
    height: '10%',
    justifyContent: 'space-around',
  },
  Chip1: {
    // flexDirection:'row',
    alignItems: 'center',
    marginLeft: '4%',
    marginRight: '4%',
    height: '8%',
    justifyContent: 'space-around',
  },
  main: {
    flexDirection: 'row',
    // paddingTop: 20,

    // paddingBottom:90,
    // justifyContent:'space-evenly',
    // alignItems:'center',
    // alignContent:'center',
    // alignSelf:'center',
    // paddingLeft: 30,

    // paddingRight: 30,
    flexWrap: 'wrap',
    width: '100%',
    // padding:10,
    // margin:20,
    // flexWrap:''
    // flexBasis:'50%',
    // flexGrow:1
  },
  paragraph: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'justify',
    marginLeft: '10%',
  },
  headline: {
    fontFamily: FONT.pop,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 34,
    textAlign: 'left',
    marginLeft: '6%',
    marginTop: '5%',
    padding: 10,
    lineHeight: 40,
  },
});
