import React from 'react';
import {Pressable, View} from 'react-native';
import COLORS from '../../Assets/Style/Color';
import InteractParagraph from '../ReusableComponent/Paragraph';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLine from 'react-native-vector-icons/SimpleLineIcons';

function Tabs(props) {
  return (
    <View
      style={{
        // top: 20,
        borderWidth: 1,
        width: '48%',
        borderColor: COLORS.border_color,
        // padding: 50,
        // marginLeft: 10,
        marginVertical: 7,
        borderRadius: 10,
        // height: '70%',
      }}>
      <View
        style={{
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 30,
          paddingBottom: 20,
        }}>
        <Pressable onPress={props.Press}>
          <View
            style={{
              backgroundColor: props.bgcolor,
              alignSelf: 'center',
              height: 60,
              width: 60,
              borderRadius: 10,
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              {props.IconName ? (
                <Icon name={props.IconName} size={35} color={COLORS.white} />
              ) : (
                <></>
              )}
              {props.FeatherIcon ? (
                <Feather
                  name={props.FeatherIcon}
                  size={35}
                  color={COLORS.white}
                />
              ) : (
                <></>
              )}
              {props.FontIcon ? (
                <FontAwesome
                  name={props.FontIcon}
                  size={35}
                  color={COLORS.white}
                />
              ) : (
                <></>
              )}
              {props.SimpleIcon ? (
                <SimpleLine
                  name={props.SimpleIcon}
                  size={35}
                  color={COLORS.white}
                />
              ) : (
                <></>
              )}
            </View>
          </View>
        </Pressable>
      </View>
      <View style={{marginBottom: 30}}>
        <InteractParagraph
          fw={'100'}
          // ml={5}
          lh={20}
          txtAlign={'center'}
          p={props.title}
        />
      </View>
    </View>
  );
}

export default Tabs;
