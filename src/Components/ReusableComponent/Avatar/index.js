import React from 'react';
import {Pressable, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import COLORS from '../../../Assets/Style/Color';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

function InteractAvatar(props) {
  const reducerData = useSelector(state => state);
  const {AuthReducer} = useSelector(state => state);

  // console.log(
  //   reducerData?.UserData?.userdata,
  //   'reducerData?.UserData?.userdata',
  // );
  // console.log(
  //   reducerData?.UserData?.userdata?.additionalUserInfo?.profile?.picture?.data
  //     ?.url,
  //   'reducerData?.UserData?.userdata?.additionalUserInfo?.profile?.picture?.data?.url',
  // );

  return (
    <View
      style={{
        top: props.top,
      }}>
      <Pressable onPress={props.press}>
        <Avatar.Image
          size={props.size}
          source={
            props.src
              ? props.src
              : AuthReducer?.UserData?.profile_pic
              ? {
                  uri: AuthReducer?.UserData?.profile_pic,
                }
              : AuthReducer?.UserData?.profile_pic
              ? {
                  uri: AuthReducer?.UserData?.profile_pic,
                }
              : require('../../../Assets/Images/avatar.png')
          }
          //  onTouchStart={props.onTouch}
        />
        {props.icon ? (
          <Pressable
            style={{
              // padding: 7,
              // paddingTop: 7,
              // paddingLeft: 7,
              // paddingRight: 7,
              // paddingBottom: 5,
              width: 35,
              height: 35,
              borderRadius: 19,
              alignSelf: 'flex-end',
              // textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 5,
              top: -25,
              right: 5,
              zIndex: 1,
              borderWidth: 1,
              borderColor: COLORS.white,
              backgroundColor: COLORS.primary,
            }}
            onPress={props.IconPress}>
            <Icon name={props.icon} color={'#fff'} size={props.Iconsize} />
          </Pressable>
        ) : (
          <></>
        )}
      </Pressable>
    </View>
  );
}

export default InteractAvatar;
