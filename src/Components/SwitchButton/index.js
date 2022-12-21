import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Switch} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {isDark} from '../../Store/slices/';
import COLORS from 'src/Assets/Style/Color';

function ThemeSwitch() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  async function fetchThemeMode() {
    const status = await AsyncStorage.getItem('isDark');
    const value = await JSON.parse(status);
    setIsSwitchOn(value);
    dispatch(isDark(value));

    // console.log(value);
  }
  useEffect(() => {
    fetchThemeMode();
  }, [toggle]);

  const onToggleSwitch = async () => {
    let Check = new Promise(async function (resolve, reject) {
      const value = JSON.stringify(!isSwitchOn);
      await AsyncStorage.setItem('isDark', value);
      if (value) {
        resolve();
      } else {
        reject();
      }
    });
    Check.then(async () => {
      setToggle(!toggle);
    });
  };

  return (
    <Switch
      value={isSwitchOn}
      color={COLORS.primary}
      style={{margin: 15}}
      thumbColor={COLORS.white}
      onValueChange={onToggleSwitch}
    />
  );
}

export default ThemeSwitch;
