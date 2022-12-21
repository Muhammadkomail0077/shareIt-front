import React from 'react';
import {View, TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import COLORS from 'src/Assets/Style/Color';
import ButtonComp from 'src/Components/ReusableComponent/Button';
import Heading from 'src/Components/ReusableComponent/Heading';
import InteractParagraph from 'src/Components/ReusableComponent/Paragraph';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
import {styles} from './style';

export default function VerifyEmail({navigation}) {
  return (
    <>
      <SafeArea>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View
            style={{
              margin: '4%',
              justifyContent: 'space-between',
              flexGrow: 1,
            }}>
            <View>
              <ButtonComp
                mode={'outlined'}
                justify={'center'}
                align={'flex-start'}
                btnHeight={65}
                icon={'chevron-back'}
                radius={15}
                // topMargin={5}
                Borderwidth={2}
                press={() => navigation.goBack()}
              />
            </View>
            <View style={{alignItems: 'center', marginTop: '5%'}}>
              <Heading
                Stylefont={'normal'}
                Fontweight={'700'}
                Fontsize={32}
                txtAlign={'center'}
                // ml={'5%'}
                // mt={'6%'}
                // p={18}
                lh={40}
                Heading={'Verification email sent to your mail'}
              />
            </View>
            <View style={{justifyContent: 'space-between', flexGrow: 1}}>
              <View style={{alignItems: 'center'}}>
                {/* <Text style={styles.ContainerMyEmailDescription}>
                        
                    </Text> */}
                <InteractParagraph
                  // pWidth={'100%'}
                  // Direction={'row'}
                  pAlign={'center'}
                  txtAlign={'center'}
                  mt={'10%'}
                  // ml={'12%'}
                  p={
                    'Verify email through verification link. Account will be activated after verification'
                  }
                />
              </View>

              <View>
                <ButtonComp
                  btnwidth={'100%'}
                  btnHeight={56}
                  btnText={'Got it'}
                  justify={'center'}
                  align={'center'}
                  fontSize={16}
                  radius={15}
                  txtColor={COLORS.white}
                  press={() => navigation.navigate('login')}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeArea>
    </>
  );
}
