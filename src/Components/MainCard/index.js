import React from 'react';
import {Dimensions, ImageBackground} from 'react-native';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../Assets/Style/Color';
import InteractParagraph from '../ReusableComponent/Paragraph';

function MainCard(props) {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  return (
    <View>
      <ImageBackground
        source={props.bgImg}
        style={{
          height: height / 2.7,
          width: width / 2.3,
          // borderRadius: 15,
          // height: 200,
          // width: 140,
        }}
        borderRadius={20}>
        <View
          style={{
            backgroundColor: ' rgba(102, 255, 3, 0.1)',
            borderRadius: 15,
            flexGrow: 1,
            justifyContent: 'space-between',
            bottom: 0,
            width: '100%',
          }}>
          <InteractParagraph
            fs={12}
            fw={'700'}
            color={COLORS.white}
            //   p={props.para}
            Padding={5}
            txtAlign={'center'}
          />
          <View
            style={{
              width: '90%',
              justifyContent: 'center',
              //   alignContent: 'center',
              alignSelf: 'center',
              //   borderRadius: 25,
              //   alignItems: 'center',
            }}>
            <LinearGradient
              colors={['rgba(96, 196, 12, 0.8)', 'rgba(77, 197, 0, 0.1)']}
              style={{borderRadius: 5}}>
              <View style={{padding: 5}}>
                <InteractParagraph
                  fs={13}
                  fw={'700'}
                  color={COLORS.white}
                  p={props.para}
                  Padding={5}
                  txtAlign={'center'}
                />
              </View>
            </LinearGradient>
          </View>
          <ImageBackground
            source={require('../../Assets/Images/friends.png')}
            resizeMode="cover"
            borderRadius={12}
            blurRadius={10}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                backgroundColor: 'transparent',
                height: 35,
                // padding: 5,
                // borderBottomLeftRadius: 15,
                // borderBottomEndRadius: 12,
              }}>
              {/* <Font name={'cross'} size={18} color={COLORS.white} /> */}
              {/* <Divider
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.border_color,
                  height: 20,
                }}
              /> */}
              {/* <Font name={'heart'} size={16} color={COLORS.white} /> */}
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
}

export default MainCard;
