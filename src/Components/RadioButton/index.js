import React, {memo, useEffect, useState} from 'react';
import {View} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';
import COLORS from 'src/Assets/Style/Color';
import {styles} from './style';
import {useSelector} from 'react-redux';
import {Pressable} from 'react-native';

function RadioBtn({userInfo, setUserInfo}) {
  const reducerData = useSelector(state => state);
  const [isdark, setisDark] = useState(reducerData?.isDark?.isdark);
  const [checked, setChecked] = useState('');
  console.log('userInfo: inside Gender Sheet:', userInfo);
  useEffect(() => {
    if (userInfo?.userGender === 0) {
      setChecked('first');
    } else if (userInfo?.userGender === 1) {
      setChecked('second');
    } else {
      setChecked('third');
    }
  }, []);
  return (
    <View style={styles.borderView}>
      <Pressable
        style={checked === 'first' ? styles.Mainborder2 : styles.Mainborder}
        onPress={() => {
          setChecked('first');
          setUserInfo({...userInfo, userGender: 0});
        }}>
        {/* <View> */}
        <Text
          theme={
            reducerData?.isDark?.isdark
              ? {colors: {text: COLORS.white}}
              : {colors: {text: COLORS.dark}}
          }
          style={
            checked === 'first' ? styles.InnerBorder2 : styles.InnerBorder
          }>
          Man
        </Text>
        <RadioButton.Android
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked('first');
            setUserInfo({...userInfo, userGender: 0});
          }}
          color={COLORS.white}
          theme={
            reducerData?.isDark?.isdark
              ? {colors: {text: COLORS.white}}
              : {colors: {text: COLORS.dark}}
          }
        />
        {/* </View> */}
      </Pressable>
      <Pressable
        style={checked === 'second' ? styles.Mainborder2 : styles.Mainborder}
        // onPress={() => setChecked('second')}
        onPress={() => {
          setChecked('second');
          setUserInfo({...userInfo, userGender: 1});
        }}>
        <Text
          theme={
            reducerData?.isDark?.isdark
              ? {colors: {text: COLORS.white}}
              : {colors: {text: COLORS.dark}}
          }
          style={
            checked === 'second' ? styles.InnerBorder2 : styles.InnerBorder
          }>
          Women
        </Text>
        <RadioButton.Android
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked('second');
            setUserInfo({...userInfo, userGender: 2});
          }}
          color={COLORS.white}
          theme={
            reducerData?.isDark?.isdark
              ? {colors: {text: COLORS.white}}
              : {colors: {text: COLORS.dark}}
          }
        />
      </Pressable>
      <Pressable
        onPress={() => {
          setChecked('third');
          setUserInfo({...userInfo, userGender: 2});
        }}
        style={checked === 'third' ? styles.Mainborder2 : styles.Mainborder}>
        <Text
          theme={
            reducerData?.isDark?.isdark
              ? {colors: {text: COLORS.white}}
              : {colors: {text: COLORS.dark}}
          }
          style={
            checked === 'third' ? styles.InnerBorder2 : styles.InnerBorder
          }>
          other
        </Text>
        <RadioButton.Android
          value="third"
          status={checked === 'third' ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked('third');
            setUserInfo({...userInfo, userGender: 1});
          }}
          color={COLORS.white}
          theme={
            reducerData?.isDark?.isdark
              ? {colors: {text: COLORS.white}}
              : {colors: {text: COLORS.dark}}
          }
        />
      </Pressable>
    </View>
  );
}

export default memo(RadioBtn);
