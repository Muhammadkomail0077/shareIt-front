import React from 'react';
import {View, TextInput, Image, ScrollView} from 'react-native';
import COLORS from 'src/Assets/Style/Color';
import ButtonComp from 'src/Components/ReusableComponent/Button';
import Heading from 'src/Components/ReusableComponent/Heading';
import Input from 'src/Components/ReusableComponent/input';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
import {styles} from './style';
import successImage from 'src/Assets/Images/people.png';
import InteractParagraph from 'src/Components/ReusableComponent/Paragraph';
import {Divider} from 'react-native-paper';
import {useSelector} from 'react-redux';
export default function Friends({navigation}) {
  const reducerData = useSelector(state => state);

  return (
    <>
      <SafeArea>
        <ScrollView contentContainerStyle={{flexGrow: 1, margin: '4%'}}>
          <View style={{justifyContent: 'space-between', flexGrow: 1}}>
            <View style={styles.ContainerfirstBackIcon}>
              <ButtonComp
                mode={'text'}
                // btnHeight={40}
                // txtRightMargin={0}
                // txtLeftMargin={0}
                btnText={'Skip'}
                align={'flex-end'}
                fontStyle={'700'}
                // colors={COLORS.primary}
                fontSize={16}
                // justify={'flex-end'}
                press={() => navigation.navigate('notification')}
              />
            </View>

            <View style={styles.containerInputs}>
              <Image style={styles.containerImage} source={successImage} />
            </View>
            <View>
              <Heading
                Stylefont={'normal'}
                Fontweight={'700'}
                Fontsize={18}
                txtAlign={'center'}
                // ml={'6%'}
                // p={10}
                lh={40}
                Heading={'Invite Partner'}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <InteractParagraph
                pWidth={'90%'}
                Direction={'row'}
                pAlign={'center'}
                txtAlign={'center'}
                // ml={'10%'}
                p={
                  'You can find your partner from your contact lists to connected'
                }
              />
            </View>
            <View style={styles.signUpButton}>
              <ButtonComp
                btnwidth={'100%'}
                btnHeight={56}
                btnText={'Invite Via Email or Verify OTP'}
                justify={'center'}
                align={'center'}
                fontSize={12}
                radius={15}
                Borderwidth={2}
                txtColor={
                  reducerData?.isDark?.isdark ? COLORS.white : COLORS.dark
                }
                mode={'outlined'}
                press={() => navigation.navigate('spouse')}
              />
            </View>
            <View style={styles.containerorLoginWith}>
              <Divider style={styles.divider} />
              <View style={styles.containerForgetSecond}>
                <InteractParagraph p={' or '} />
              </View>
              <Divider style={styles.divider} />
            </View>

            <View style={styles.signUpButton}>
              <ButtonComp
                btnwidth={'100%'}
                btnHeight={56}
                btnText={'Access to a contact list'}
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
    </>
  );
}
