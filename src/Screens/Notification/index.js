import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import COLORS from 'src/Assets/Style/Color';
import ButtonComp from 'src/Components/ReusableComponent/Button';
import Heading from 'src/Components/ReusableComponent/Heading';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
import {styles} from './style';
import successImage from 'src/Assets/Images/chat.png';
import InteractParagraph from 'src/Components/ReusableComponent/Paragraph';
export default function Notification({navigation}) {
  return (
    <SafeArea>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            margin: '4%',
            justifyContent: 'space-between',
            flexGrow: 1,
          }}>
          <View style={styles.ContainerfirstBackIcon}>
            <ButtonComp
              mode={'text'}
              btnText={'Skip'}
              align={'flex-end'}
              fontStyle={'700'}
              fontSize={16}
              press={() => navigation.navigate('main')}
            />
          </View>

          <View
            style={{
              alignItems: 'center',
              // justifyContent: 'center',
              flexGrow: 1,
              marginTop: '20%',
            }}>
            <View style={styles.containerInputs}>
              <Image style={styles.containerImage} source={successImage} />
            </View>
            <View>
              <Heading
                Stylefont={'normal'}
                Fontweight={'700'}
                Fontsize={22}
                txtAlign={'center'}
                // ml={'6%'}
                // p={10}
                lh={40}
                Heading={'Enable notification’s'}
              />
              <InteractParagraph
                // pWidth={'80%'}
                // Direction={'row'}
                // pAlign={'center'}
                txtAlign={'center'}
                // ml={'12%'}
                p={
                  'Get push-notification when you get the match or receive a message.'
                }
              />
            </View>
          </View>
          {/* <View style={{alignItems: 'center'}}>
        
          </View> */}

          <View>
            <ButtonComp
              btnwidth={'100%'}
              btnHeight={56}
              btnText={'I want to be notified'}
              justify={'center'}
              align={'center'}
              fontSize={14}
              radius={15}
              txtColor={COLORS.white}
            />
          </View>
        </View>
      </ScrollView>
    </SafeArea>
  );
}
