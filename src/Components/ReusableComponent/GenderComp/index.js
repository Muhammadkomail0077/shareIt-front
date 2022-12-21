import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RadioBtn from '../../RadioButton';
import COLORS from '../../../Assets/Style/Color';
import ButtonComp from '../Button';

const GenderComp = () => {
  return (
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
          btnText={'Save'}
          txtColor={COLORS.white}
          justify={'center'}
          align={'center'}
          fontSize={16}
          radius={15}
          fontStyle={'700'}
        //   press={() => navigation.navigate('interest')}
        />
      </View>
    </View>
  );
};

export default GenderComp;

const styles = StyleSheet.create({});
