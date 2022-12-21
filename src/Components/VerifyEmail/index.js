import React from 'react';
import {Text, View, TextInput} from 'react-native';
import BackIcon from '../BackIcon/index';
import {styles} from './style';
import Button from 'src/Components/ReusableComponent/Button';

export default function index() {
  return (
    <>
      <View style={styles.ContainerfirstBackIcon}>
        <BackIcon />
      </View>
      <View>
        <Text style={styles.ContainerMyEmailText}>
          Verification email sent to your mail
        </Text>
      </View>
      <View>
        <Text style={styles.ContainerMyEmailDescription}>
          Verify email through verification link. {'\n'} Account will be
          activated after verification
        </Text>
      </View>
      <View style={styles.signUpButton}>
        <Button btnText={'Got it'} />
      </View>
    </>
  );
}
