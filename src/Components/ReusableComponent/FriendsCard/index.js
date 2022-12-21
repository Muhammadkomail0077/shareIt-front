import React from 'react';
import {Dimensions, Image, ImageBackground, View} from 'react-native';
import COLORS from '../../../Assets/Style/Color';
import Font from 'react-native-vector-icons/Entypo';
import InteractParagraph from '../Paragraph';
import {Divider} from 'react-native-paper';

function FriendsCard(props) {
  const width = Dimensions.get('window').width;
  const PhotoWidth = width / 2.23;
  // const LandscapePhotoWidth = width / 2.63;

  const height = Dimensions.get('window').height;
  const PhotoHeight = height / 2.6;
  // const PhotoHeight1 = height / 3;

  return (
    <View style={{marginBottom: 10}}>
      <ImageBackground
        source={props.bgImg}
        style={{
          height: props.height ? props.height : PhotoHeight,
          width: props.width ? props.width : PhotoWidth,
          // borderRadius: 15,
        }}
        borderRadius={20}>
        <View
          style={{
            backgroundColor: 'rgba(77, 197, 0, 0.2)',
            borderRadius: 15,
            flexGrow: 1,
            justifyContent: 'flex-end',
            bottom: 0,
            width: '100%',
          }}>
          <InteractParagraph
            fs={12}
            fw={'700'}
            color={COLORS.white}
            p={props.para}
            Padding={5}
            txtAlign={'center'}
          />
          <ImageBackground
            source={props.bgImg}
            resizeMode="cover"
            borderRadius={12}
            blurRadius={10}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                backgroundColor: 'transparent',
                padding: 5,
                borderBottomLeftRadius: 15,
                borderBottomEndRadius: 12,
              }}>
              <Font name={'cross'} size={18} color={COLORS.white} />
              <Divider
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.border_color,
                  height: 20,
                }}
              />
              <Font name={'heart'} size={16} color={COLORS.white} />
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
}

export default FriendsCard;
