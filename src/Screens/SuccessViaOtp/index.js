import React from 'react';
import {View, TextInput, Image} from 'react-native';
import COLORS from 'src/Assets/Style/Color';
import ButtonComp from 'src/Components/ReusableComponent/Button';
import Heading from 'src/Components/ReusableComponent/Heading';
import Input from 'src/Components/ReusableComponent/input';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
import {styles} from './style';
import successImage from 'src/Assets/Images/succes.png';
import {useDispatch} from 'react-redux';
import {isMatch} from '../../Store/slices';
export default function SuccessViaOtp({navigation}) {
  const dispatch = useDispatch();

  const btn = () => {
    dispatch(isMatch(true));
    navigation.navigate('main');
  };

  return (
    <>
      <SafeArea>
        <View style={{margin: '4%', flexGrow: 1}}>
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
          <View style={{justifyContent: 'space-between', flexGrow: 1}}>
            <View>
              <Heading
                Stylefont={'normal'}
                Fontweight={'700'}
                Fontsize={32}
                mt={'10%'}
                lh={40}
                Heading={'Successfully connected with Sara Taylor'}
              />
            </View>

            <View style={styles.containerInputs}>
              <Image style={styles.containerImage} source={successImage} />
            </View>

            <View>
              <ButtonComp
                btnwidth={'100%'}
                btnHeight={56}
                btnText={'Back to home!'}
                justify={'center'}
                align={'center'}
                fontSize={16}
                radius={15}
                txtColor={COLORS.white}
                press={btn}
              />
            </View>
          </View>
        </View>
      </SafeArea>
    </>
  );
}
