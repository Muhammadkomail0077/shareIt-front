import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import COLORS from 'src/Assets/Style/Color';
import {useSelector} from 'react-redux';

export default function PhoneInput(props) {
  const emptyIcon = () => null;
  const [text, setText] = useState();

  const reducerData = useSelector(state => state);
  const [isdark, setisDark] = useState(reducerData?.isDark?.isdark);
  return (
    <>
      {/* role =1 for disabled with place holder */}

      <TextInput
        mode={props.mode}
        label={props.label}
        placeholder={props.placeholder}
        disabled={props.status}
        outlineColor={props.outline}
        ref={props.ref}
        maxLength={props.length}
        onChangeText={props.Onchange}
        onBlur={props.Onblur}
        value={props.Value}
        keyboardType={props.Keyboard}
        secureTextEntry={props.Pass}
        autoFocus={props.focus}
        activeOutlineColor={
          props.activeOutlineColor ? props.activeOutlineColor : COLORS.primary
        }
        multiline={props.multiline}
        numberOfLines={props.line}
        theme={{colors: '#fff'}}
        style={{
          width: '18%',
          marginTop: props.top,
          backgroundColor: COLORS.primary,
          textAlign: 'center',
          margin: 5,
          fontWeight: 'bold',
          fontSize: 20,
          borderRadius: 10,
        }}
      />
    </>
  );
}
