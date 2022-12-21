import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import COLORS from '../../Assets/Style/Color';
import InteractAvatar from '../../Components/ReusableComponent/Avatar';
import ButtonComp from '../../Components/ReusableComponent/Button';
import Heading from '../../Components/ReusableComponent/Heading';
import Input from '../../Components/ReusableComponent/input';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import {isMatch, yourProfile} from '../../Store/slices';

function PartnerInfo({navigation, route}) {
  const dispatch = useDispatch();

  const btn = () => {
    dispatch(isMatch(false));
    navigation.navigate('edit');
  };

  const {nameOfSpouse} = route.params;
  console.log('nameOfSpouse in partner Info: ', nameOfSpouse);

  return (
    <SafeArea>
      <View style={{margin: '4%', justifyContent: 'space-evenly', flexGrow: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <ButtonComp
              mode={'outlined'}
              justify={'center'}
              align={'center'}
              btnHeight={65}
              icon={'chevron-back'}
              radius={15}
              Borderwidth={2}
              press={() => navigation.goBack()}
            />
          </View>
        </View>

        <Heading
          Stylefont={'normal'}
          Fontweight={'700'}
          Fontsize={34}
          txtAlign={'left'}
          mt={'10%'}
          // ml={'7%'}
          Heading={'Partner'}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <InteractAvatar
            size={120}
            // src={require('src/Assets/Images/avatar.png')}
          />
        </View>
        <View style={{flexGrow: 1}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Input
              outline={'#E8E6EA'}
              width={'100%'}
              top={'10%'}
              mode={'outlined'}
              label={'Partner Name'}
              Value={nameOfSpouse}
              status={true}
            />
          </View>
          {/* <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Input
              outline={'#E8E6EA'}
              width={'100%'}
              top={'2%'}
              mode={'outlined'}
              label={'D.O.B'}
              Value={'July 11th, 1995'}
              status={true}
            />
          </View> */}
        </View>
        <View
          style={{
            justifyContent: 'center',
            marginBottom: '5%',
          }}>
          <ButtonComp
            btnwidth={'100%'}
            btnHeight={56}
            btnText={'Unlink'}
            txtColor={COLORS.white}
            justify={'center'}
            align={'center'}
            fontSize={16}
            radius={15}
            fontStyle={'700'}
            press={btn}
          />
        </View>
      </View>
    </SafeArea>
  );
}

export default PartnerInfo;
