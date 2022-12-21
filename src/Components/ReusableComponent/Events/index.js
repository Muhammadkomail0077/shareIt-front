import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import COLORS from '../../../Assets/Style/Color';
import Heading from '../Heading';
import Font from 'react-native-vector-icons/Entypo';
import InteractParagraph from '../Paragraph';
import {Divider} from 'react-native-paper';
import ImageLoad from 'react-native-image-placeholder';
 
function EventCard(props) {
  return (
    <View style={{marginBottom: 10}}>
      <ImageLoad
        source={props.bgImg}
        imageStyle={{borderRadius: 20}}
        loadingStyle={{ size: 'large', color: 'blue' }}
        // resizeMode="cover"
        style={{
          height: props.height ? props.height : 220,
          width: props.width ? props.width : 140,
        }}>
        <View
          style={{
            backgroundColor: 'rgba(102, 255, 3, 0.1)',
            flexGrow: 1,
            borderRadius: 25,
            justifyContent: props.justify,
            bottom: 0,
            width: '100%',
          }}>
          <InteractParagraph
            fs={20}
            mr={props.marginRight}
            fw={'700'}
            color={COLORS.white}
            p={props.para}
            Padding={5}
            txtAlign={props.Textalign}
          />
          <ImageBackground
            source={props.bgImg}
            // loadingStyle={{ size: 'large', color: 'blue' }}
            resizeMode="cover"
            imageStyle={{
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
            blurRadius={200}>
            <View style={{overflow: 'hidden', marginBottom: 5}}>
              <InteractParagraph
                fs={props.titleSize ? props.titleSize : 12}
                txtAlign={props.Align}
                ml={props.marginLeft}
                mt={props.marginTop}
                mb={props.marginBottom}
                p={props.title}
                color={COLORS.white}
                fw={'700'}
              />
              {props.subtitle ? (
                <InteractParagraph
                  fs={14}
                  p={props.subtitle}
                  txtAlign={props.Align}
                  ml={props.marginLeft}
                  color={COLORS.white}
                />
              ) : (
                <></>
              )}
            </View>
          </ImageBackground>
        </View>
      </ImageLoad>
    </View>
  );
}

export default EventCard;
