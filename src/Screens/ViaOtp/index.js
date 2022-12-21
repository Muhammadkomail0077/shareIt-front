import React from 'react';
import {View, TextInput, Text} from 'react-native';
import COLORS from 'src/Assets/Style/Color';
import ButtonComp from 'src/Components/ReusableComponent/Button';
import Heading from 'src/Components/ReusableComponent/Heading';
import Input from 'src/Components/ReusableComponent/input';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
import {styles} from './style';
import * as yup from 'yup';
import {Formik} from 'formik';
import {ScrollView} from 'react-native-gesture-handler';

let OtpValidationScheme = yup.object().shape({
  otp: yup
    .string()
    .required('OTP is required ')
    .min(4, ({min}) => `OTP must be at least ${min} digit`),
});
export default function Viaotp({navigation}) {
  return (
    <Formik
      initialValues={{otp: ''}}
      validateOnMount={true}
      onSubmit={values => console.log(values)}
      validationSchema={OtpValidationScheme}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <SafeArea>
          <ScrollView contentContainerStyle={{flexGrow: 1, margin: '4%'}}>
            <View>
              <ButtonComp
                mode={'outlined'}
                justify={'center'}
                align={'flex-start'}
                btnHeight={65}
                icon={'chevron-back'}
                radius={15}
                Borderwidth={2}
                topMargin={5}
                press={() => navigation.goBack()}
              />
            </View>
            <View>
              <Heading
                Stylefont={'normal'}
                Fontweight={'700'}
                Fontsize={34}
                mt={'10%'}
                lh={40}
                Heading={'Verify invite code'}
              />
            </View>
            <View style={{justifyContent: 'space-between', flexGrow: 1}}>
              <View style={{marginTop: 20}}>
                <Input
                  Onchange={handleChange('otp')}
                  Onblur={handleBlur('otp')}
                  Value={values.otp}
                  outline={'#E8E6EA'}
                  mode={'outlined'}
                  label={'OTP code'}
                  Keyboard={'numeric'}
                />
                {errors.otp && touched.otp && (
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'red',
                      marginTop: 5,
                      marginBottom: 5,
                      marginLeft: 5,
                    }}>
                    {errors.otp}
                  </Text>
                )}
              </View>

              <View>
                <ButtonComp
                  btnwidth={'100%'}
                  btnHeight={56}
                  btnText={'Verify invite code'}
                  justify={'center'}
                  align={'center'}
                  fontSize={16}
                  radius={15}
                  txtwidth={'100%'}
                  color={isValid ? COLORS.primary : COLORS.border_color}
                  enable={!isValid}
                  txtColor={COLORS.white}
                  press={() => navigation.navigate('successOtp')}
                />
              </View>
            </View>
          </ScrollView>
        </SafeArea>
      )}
    </Formik>
  );
}
