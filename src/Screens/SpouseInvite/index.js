import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import ButtonComp from 'src/Components/ReusableComponent/Button';
import COLORS from 'src/Assets/Style/Color';
import Heading from 'src/Components/ReusableComponent/Heading';
import BasicBtn from 'src/Components/ReusableComponent/ButtonBasic';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
import {ScrollView} from 'react-native-gesture-handler';

export default function SpouseInvite({navigation}) {
  return (
    <SafeArea>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{margin: '4%'}}>
          <View>
            <ButtonComp
              mode={'outlined'}
              justify={'center'}
              align={'flex-start'}
              btnHeight={62}
              icon={'chevron-back'}
              Borderwidth={2}
              radius={15}
              press={() => navigation.goBack()}
            />
          </View>
          <View style={{justifyContent: 'space-between', flex: 1}}>
            <View>
              <Heading
                Stylefont={'normal'}
                Fontweight={'700'}
                Fontsize={34}
                mt={'10%'}
                // p={10}
                // lh={40}
                Heading={'Invite Partner'}
              />
            </View>
            <View style={{marginTop: 30}}>
              <View style={styles.fieldSet}>
                <BasicBtn
                  btnText={'Send Invite Via Email'}
                  bgcolor={COLORS.btn_bgColor}
                  icon={'chevron-forward'}
                  justifyContent={'space-between'}
                  fontSize={15}
                  viewWidth={'100%'}
                  buttonSize={'100%'}
                  fontStyle={'700'}
                  iconSize={21}
                  press={() => navigation.navigate('viaEmail')}
                />
              </View>
              {/* <View style={styles.fieldSet}>
                <BasicBtn
                  bgcolor={COLORS.btn_bgColor}
                  btnText={'Enter OTP Code'}
                  icon={'chevron-forward'}
                  justifyContent={'space-between'}
                  viewWidth={'100%'}
                  buttonSize={'100%'}
                  fontSize={15}
                  fontStyle={'700'}
                  iconSize={21}
                  press={() => navigation.navigate('viaOtp')}
                />
              </View> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeArea>
  );
}
