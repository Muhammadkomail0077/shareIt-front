import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {color} from 'react-native-elements/dist/helpers';
import COLORS from 'src/Assets/Style/Color';
import FONT from 'src/Assets/Style/Font';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.bgcolor,
    height: '100%',
  },
  containerText: {
    // alignItems: "flex-end",
    padding: 10,
    fontFamily: FONT.pop,
  },

  avatar: {
    marginTop: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  headline: {
    fontFamily: FONT.pop,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 34,
    textAlign: 'left',
    marginLeft: '10%',
    marginTop: '5%',
    padding: 10,
    lineHeight: 40,
  },

  borderView: {
    justifyContent: 'center',
    alignItems: 'center',
    // height: '50%',
  },

  subBorder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Mainborder: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 13,
    paddingBottom: 10,
    borderColor: '#E8E6EA',
    borderRadius: 15,
    marginBottom: 10,
  },
  Mainborder2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    // borderWidth:1,
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 13,
    paddingBottom: 10,

    // borderColor:'#E8E6EA',
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    marginBottom: 10,
  },
  InnerBorder: {
    fontSize: 16,
    top: 5,
    // color:COLORS.dark
  },
  InnerBorder2: {
    fontSize: 16,
    top: 5,
    fontWeight: '700',
    fontFamily: FONT.pop,
    color: COLORS.white,
  },
});
