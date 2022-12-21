import React from 'react';
import {View, TextInput, Image} from 'react-native';
import COLORS from 'src/Assets/Style/Color';
import ButtonComp from 'src/Components/ReusableComponent/Button';
import Heading from 'src/Components/ReusableComponent/Heading';
import Input from 'src/Components/ReusableComponent/input';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
import {styles} from './style';
import successImage from 'src/Assets/Images/invalidIcon.png';
export default function Help({navigation}) {
  return (
    <>
      <SafeArea>
        <View style={{margin: '4%', flexGrow: 1}}>
          <View
            style={{
              justifyContent: 'space-between',
              flexGrow: 1,
            }}>
            <ButtonComp
              mode={'outlined'}
              justify={'center'}
              align={'flex-start'}
              btnHeight={65}
              icon={'chevron-back'}
              radius={15}
              Borderwidth={2}
              press={() => navigation.goBack()}
            />
          </View>
          <View style={{justifyContent: 'flex-start', flexGrow: 1}}>
            <View>
              <Heading
                Stylefont={'normal'}
                Fontweight={'700'}
                Fontsize={31}
                Heading={'Hi. How can we help you?'}
                txtAlign={'center'}
              />
            </View>

            <View style={{marginTop: 40}}>
              <ButtonComp
                btnwidth={'100%'}
                btnHeight={56}
                btnText={'A guide to Interact'}
                justify={'center'}
                align={'center'}
                fontSize={16}
                radius={15}
                txtColor={COLORS.white}
              />
            </View>
            <View style={{marginTop: 10}}>
              <ButtonComp
                btnwidth={'100%'}
                btnHeight={56}
                btnText={'Troubleshooting'}
                justify={'center'}
                align={'center'}
                fontSize={16}
                radius={15}
                txtColor={COLORS.white}
              />
            </View>
            <View style={{marginTop: 10}}>
              <ButtonComp
                btnwidth={'100%'}
                btnHeight={56}
                btnText={'Security & Privacy'}
                justify={'center'}
                align={'center'}
                fontSize={16}
                radius={15}
                txtColor={COLORS.white}
              />
            </View>
            <View style={{marginTop: 10}}>
              <ButtonComp
                btnwidth={'100%'}
                btnHeight={56}
                btnText={'Safety & Reporting'}
                justify={'center'}
                align={'center'}
                fontSize={16}
                radius={15}
                txtColor={COLORS.white}
              />
            </View>
            <View style={styles.containerlastTwoLink}>
              <ButtonComp
                mode={'text'}
                btnHeight={40}
                txtRightMargin={0}
                txtLeftMargin={0}
                btnText={'Privacy'}
                align={'center'}
                fontStyle={'bold'}
                fontSize={14}
                txtColor={COLORS.dark}
              />
              <ButtonComp
                mode={'text'}
                btnHeight={40}
                txtRightMargin={0}
                txtLeftMargin={0}
                btnText={'English (US) >'}
                align={'center'}
                fontStyle={'bold'}
                fontSize={14}
                txtColor={COLORS.dark}
              />
            </View>
          </View>
        </View>
      </SafeArea>
    </>
  );
}
