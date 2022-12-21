import React from 'react';
import {Text, View, TextInput} from 'react-native';
import BackIcon from '../BackIcon/index';
import ButtonComp from '../ReusableComponent/Button';
import {styles} from './style';
// import Button from 'src/Components/ReusableComponent/Button';

export default function index() {
  return (
    <>
      <View style={styles.ContainerfirstBackIcon}>
        <BackIcon />
      </View>
      <View>
        <Text style={styles.ContainerMyEmailText}>My email</Text>
      </View>
      <View>
        <Text style={styles.ContainerMyEmailDescription}>
          Please enter your valid email address. We will send you a 4-digit code
          to verify your account.
        </Text>
      </View>
      <View style={styles.containerInputs}>
        <TextInput
          style={styles.input}
          placeholder="Enter Email Address"
          // keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          // keyboardType="numeric"
        />
      </View>
      <View style={styles.signUpButton}>
        <ButtonComp btnText={'Sign up'} />
      </View>
    </>
  );
}
