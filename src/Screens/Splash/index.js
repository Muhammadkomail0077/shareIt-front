import React from 'react';
import {Image} from 'react-native';
import {View, Text, ActivityIndicator} from 'react-native';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import logo from 'src/Assets/Images/logo.png';
import {Headline} from 'react-native-paper';
import COLORS from '../../Assets/Style/Color';
import FONT from '../../Assets/Style/Font';

const Splash = () => {
  return (
    <SafeArea>
      <View
        style={{
          // margin: '8%',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            // backgroundColor: 'black'
            // flex: 1,
          }}>
          <Image style={{width: 200, height: 200}} source={logo} />
          <View >
          <Headline
            style={{
              fontFamily: FONT.pop,
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: 34,
              textAlign: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              color: COLORS.primary,
              // backgroundColor: 'coral',
              padding:15
            }}>
            Interact
          </Headline>
          </View>
        </View>
      </View>
    </SafeArea>
  );
};

export default Splash;
