import React from 'react';
import {View, TextInput, Image} from 'react-native';
import COLORS from 'src/Assets/Style/Color';
import ButtonComp from 'src/Components/ReusableComponent/Button';
import Heading from 'src/Components/ReusableComponent/Heading';
import Input from 'src/Components/ReusableComponent/input';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
import {styles} from './style';
import successImage from 'src/Assets/Images/invalidIcon.png';
export default function ExpiredViaOtp({navigation}) {
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
              Borderwidth={2}
              radius={15}
              press={() => navigation.goBack()}
            />
          </View>
          <View style={{justifyContent: 'space-between', flexGrow: 1}}>
            <View>
              <Heading
                Stylefont={'normal'}
                Fontweight={'700'}
                Fontsize={34}
                mt={'10%'}
                lh={40}
                Heading={'Invalid or expired code'}
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
                press={() => navigation.navigate('main')}
              />
              {/* </View> */}
            </View>
          </View>
        </View>
      </SafeArea>
    </>
  );
}
