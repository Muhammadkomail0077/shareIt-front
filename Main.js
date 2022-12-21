import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Switch} from 'react-native-paper';

const ThemeSwitch = props => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = async () => {
    await setIsSwitchOn(!isSwitchOn);
    await AsyncStorage.setItem('isDark', isSwitchOn);
  };

  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

export default ThemeSwitch;
