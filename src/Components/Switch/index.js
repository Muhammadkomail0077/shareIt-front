import * as React from 'react';
import {Switch} from 'react-native-paper';
import COLORS from 'src/Assets/Style/Color';

const SwitchBtn = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(true);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <Switch
      value={isSwitchOn}
      color={COLORS.primary}
      style={{margin: 15}}
      thumbColor={COLORS.white}
      onValueChange={onToggleSwitch}
    />
  );
};

export default SwitchBtn;
