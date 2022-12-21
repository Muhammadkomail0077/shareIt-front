import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {
  Button,
  Checkbox,
  Headline,
  RadioButton,
  Text,
} from 'react-native-paper';
import COLORS from 'src/Assets/Style/Color';
import ButtonComp from 'src/Components/ReusableComponent/Button';
import {styles} from './style';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
import Heading from 'src/Components/ReusableComponent/Heading';
import RadioBtn from 'src/Components/RadioButton';

function Gender({navigation}) {
  return (
    <SafeArea>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flexGrow: 1, margin: '4%'}}>
          <View>
            <View>
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
            <View style={{marginTop: '10%', marginBottom: '20%'}}>
              <Heading
                Stylefont={'normal'}
                Fontweight={'700'}
                Fontsize={34}
                ml={2}
                lh={40}
                Heading={'I am a'}
              />
            </View>
          </View>
          <View style={{flexGrow: 1, justifyContent: 'space-between'}}>
            <RadioBtn />

            <View
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                // flexDirection: 'row',
                // marginBottom: '15%',
              }}>
              <ButtonComp
                btnwidth={'100%'}
                btnHeight={56}
                btnText={'Continue'}
                txtColor={COLORS.white}
                justify={'center'}
                align={'center'}
                fontSize={16}
                radius={15}
                fontStyle={'700'}
                press={() => navigation.navigate('interest')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeArea>
  );
}

export default Gender;
