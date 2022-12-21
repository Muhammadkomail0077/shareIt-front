import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import COLORS from 'src/Assets/Style/Color';
import FONT from 'src/Assets/Style/Font';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {Pressable, View} from 'react-native';

function BasicBtn(props) {
  const reducerData = useSelector(state => state);
  const [isdark, setisDark] = useState(reducerData?.isDark?.isdark);

  let {btnText} = props;

  return (
    <>
      <Pressable
        style={{
          alignItems: 'center',
          width: props.buttonSize ? props.buttonSize : '90%',
        }}
        onPress={props.press}>
        <View
          style={{
            flexDirection: props.flexDirection ? props.flexDirection : 'row',
            justifyContent: props.justifyContent
              ? props.justifyContent
              : 'flex-end',
            alignItems: props.alignItems ? props.alignItems : 'center',
            borderRadius: 15,
            borderColor: props.borderColor || COLORS.border_color,
            borderWidth: props.borderWidth ? props.borderWidth : 1,
            width: props.viewWidth ? props.viewWidth : '90%',
            // height: props.height ? props.height : 'auto',
            alignSelf: props.alignSelf ? props.alignSelf : 'center',
            backgroundColor: props.bgcolor,
            padding: 5,
            overflow: 'hidden',
          }}>
          <Button
            mode={'text'}
            color={props.color ? props.color : COLORS.primary}
            labelStyle={{
              fontFamily: FONT.pop,
              fontSize: props.fontSize,
              fontWeight: props.fontStyle,
              marginRight: props.txtRightMargin,
              marginLeft: props.txtLeftMargin,
              color: props.txtColor ? props.txtColor : COLORS.primary,
              width: props.txtwidth,
            }}
            dark={true}
            uppercase={false}
            style={{
              height: props.btnHeight,
              width: props.btnwidth,
              marginRight: props.rightMargin,
              marginLeft: props.ml,
              marginTop: props.topMargin,
              shadowColor: props.shadow,
            }}
            // onPress={props.press}
          >
            {btnText}
          </Button>
          <Button
            mode={'text'}
            color={props.txtColor ? props.txtColor : COLORS.txtColor}
            labelStyle={{
              color: props.IconColor ? props.IconColor : COLORS.primary,
              marginLeft: props.txtLeftMargin1,
              // justifyContent: 'flex-end',
              // alignItems: 'flex-end',
              alignSelf: 'flex-end',
            }}
            dark={true}
            uppercase={false}
            style={{
              height: props.btnHeight,
              width: props.btnwidth,
              marginRight: props.rightMargin1,
              shadowColor: props.shadow,
            }}>
            <Icon
              name={props.icon}
              size={props.iconSize ? props.iconSize : 28}
            />
          </Button>
        </View>
      </Pressable>
    </>
  );
}

export default BasicBtn;
