import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';
import Input from 'src/Components/ReusableComponent/input';
import ButtonComp from 'src/Components/ReusableComponent/Button';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
import Heading from 'src/Components/ReusableComponent/Heading';
import COLORS from 'src/Assets/Style/Color';
import * as yup from 'yup';
import {Formik} from 'formik';

let changePassValidationScheme = yup.object().shape({
  oldpassword: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required ')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required ')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
  confirmpassword: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required ')
    .oneOf([yup.ref('password'), null], 'Password must match')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
});

export default function ChangePassword({navigation}) {
  return (
    <Formik
      initialValues={{
        oldpassword: 'Taha123@',
        password: 'Taha123@',
        confirmpassword: 'Taha123@',
      }}
      validateOnMount={true}
      onSubmit={values => console.log(values)}
      validationSchema={changePassValidationScheme}>
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
            <View style={{justifyContent: 'space-between', flex: 1}}>
              <View>
                <Heading
                  Stylefont={'normal'}
                  Fontweight={'700'}
                  Fontsize={34}
                  mt={'10%'}
                  lh={40}
                  Heading={'Change Password'}
                />
              </View>

              <View>
                <Input
                  Onchange={handleChange('oldpassword')}
                  Onblur={handleBlur('oldpassword')}
                  Value={values.oldpassword}
                  Pass={true}
                  outline={'#E8E6EA'}
                  mode={'outlined'}
                  label="Current password"
                />
                {errors.oldpassword && touched.oldpassword && (
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'red',
                      marginTop: 5,
                      marginBottom: 5,
                      marginLeft: 15,
                    }}>
                    {errors.oldpassword}
                  </Text>
                )}
                <Input
                  Onchange={handleChange('password')}
                  Onblur={handleBlur('password')}
                  Value={values.password}
                  Pass={true}
                  outline={'#E8E6EA'}
                  mode={'outlined'}
                  label="New password"
                />
                {errors.password && touched.password && (
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'red',
                      marginTop: 5,
                      marginBottom: 5,
                      marginLeft: 15,
                    }}>
                    {errors.password}
                  </Text>
                )}
                <Input
                  Onchange={handleChange('confirmpassword')}
                  Onblur={handleBlur('confirmpassword')}
                  Value={values.confirmpassword}
                  Pass={true}
                  outline={'#E8E6EA'}
                  mode={'outlined'}
                  label="New password again"
                />
                {errors.confirmpassword && touched.confirmpassword && (
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'red',
                      marginTop: 5,
                      marginBottom: 5,
                      marginLeft: 15,
                    }}>
                    {errors.confirmpassword}
                  </Text>
                )}
              </View>
              <View style={{alignItems: 'center'}}>
                <ButtonComp
                  btnwidth={'100%'}
                  btnHeight={56}
                  btnText={'Save'}
                  justify={'center'}
                  txtwidth={'100%'}
                  align={'center'}
                  fontSize={16}
                  radius={15}
                  color={isValid ? COLORS.primary : COLORS.border_color}
                  enable={!isValid}
                  txtColor={COLORS.white}
                />
              </View>
            </View>
          </View>
        </SafeArea>
      )}
    </Formik>
  );
}
