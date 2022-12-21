import React from 'react';
import {Image, View} from 'react-native';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import Icon from 'react-native-vector-icons/AntDesign';
import COLORS from '../../Assets/Style/Color';
import {styles} from './style';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import {Headline} from 'react-native-paper';
import FONT from '../../Assets/Style/Font';
import ButtonComp from '../../Components/ReusableComponent/Button';
import {ScrollView} from 'react-native-gesture-handler';

function Match({navigation}) {
  return (
    <SafeArea>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            flexGrow: 1,
            justifyContent: 'space-between',
            // width: '100%',
            // alignItems: 'center',
            margin: '4%',
            //   marginTop: 100,
          }}>
          <View style={{marginTop: '50%', alignItems: 'center'}}>
            <View
              style={{
                transform: [{rotate: '-12deg'}],
                justifyContent: 'flex-end',
                marginRight: '30%',
              }}>
              <View style={styles.img1}>
                <Icon name="heart" size={25} color={COLORS.primary} />
              </View>
              <Image
                source={require('src/Assets/Images/Sliderone.png')}
                resizeMode="contain"
                resizeMethod="resize"
                style={{
                  height: 240,
                  borderRadius: 20,
                  width: 160,
                }}
              />
            </View>
            <View
              style={{
                transform: [{rotate: '11deg'}],
                position: 'absolute',
                marginVertical: '-35%',
                marginRight: '80%',
              }}>
              <View style={styles.img}>
                <Icon name="heart" size={25} color={COLORS.primary} />
              </View>
              <Image
                source={require('src/Assets/Images/Slidertwo.png')}
                resizeMode="contain"
                resizeMethod="resize"
                style={{
                  height: 240,
                  borderRadius: 20,
                  width: 160,
                }}
              />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Headline
              style={{
                fontFamily: FONT.pop,
                fontSize: 32,
                textAlign: 'center',
                fontWeight: '700',
                color: COLORS.primary,
              }}>
              It's a match !
            </Headline>
            <InteractParagraph
              p={'Show me on Interact'}
              Padding={5}
              Fontsize={14}
              colors={COLORS.primary}
            />
          </View>
          <View>
            <ButtonComp
              btnwidth={'100%'}
              btnHeight={56}
              btnText={'Say Hello'}
              txtColor={COLORS.white}
              justify={'center'}
              align={'center'}
              fontSize={16}
              radius={15}
              fontStyle={'700'}
            />
            <ButtonComp
              btnwidth={'100%'}
              btnHeight={56}
              color={'#EDF9E5'}
              topMargin={20}
              btnText={'Keep Swiping'}
              txtColor={COLORS.primary}
              justify={'center'}
              align={'center'}
              fontSize={16}
              radius={15}
              fontStyle={'700'}
              press={() => navigation.navigate('tinder')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeArea>
  );
}

export default Match;
