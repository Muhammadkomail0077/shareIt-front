import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import COLORS from 'src/Assets/Style/Color';
import FONT from 'src/Assets/Style/Font';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import {Pressable} from 'react-native';

function ButtonComp(props) {
  const reducerData = useSelector(state => state);
  const emptyIcon = () => null;

  let {btnText} = props;

  return (
    <Pressable
      style={{
        alignItems: props.align,
        justifyContent: props.justify,
        // backgroundColor: props.bgColor ? props.bgColor : 'transparent',
        // width: props.viewWidth,
      }}
      disabled={props.enable}
      onPress={props.press}>
      <Button
        mode={props.mode ? props.mode : 'contained'}
        color={props.color ? props.color : COLORS.primary}
        disabled={props.enable}
        labelStyle={{
          // textAlign: 'center',
          fontFamily: FONT.pop,
          fontSize: props.fontSize,
          fontWeight: props.fontStyle,
          marginTop: props.txtRightMargin,
          marginLeft: props.txtLeftMargin,
          marginRight: props.Rightmargin,
          color: props.txtColor ? props.txtColor : COLORS.primary,
          width: props.txtwidth,
        }}
        dark={true}
        uppercase={false}
        style={{
          height: props.btnHeight,
          width: props.btnwidth,
          borderRadius: props.radius,
          justifyContent: props.justify,
          alignItems: props.txtalign,
          marginRight: props.rightMargin,
          marginLeft: props.leftMargin,
          marginTop: props.topMargin,
          shadowColor: props.shadow,
          borderColor: reducerData?.isDark?.isdark
            ? COLORS.white
            : COLORS.border_color,
          borderWidth: props.Borderwidth,
          // backgroundColor: props.bgcolor ? props.bgcolor : 'transparent',
        }}
        // theme={}
        // onPress={props.press}
      >
        {props.icon ? (
          <Icon
            name={props.icon}
            color={props.IconColor}
            size={props.iconSize ? props.iconSize : 28}
          />
        ) : (
          <></>
        )}
        {props.featherIcon ? (
          <Feather
            name={props.featherIcon}
            size={props.iconSize ? props.iconSize : 28}
          />
        ) : (
          <></>
        )}
        {btnText}
      </Button>
    </Pressable>
  );
}

export default ButtonComp;
