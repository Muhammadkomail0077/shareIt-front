import React, {useState} from 'react';
import {View} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import {useSelector} from 'react-redux';
import COLORS from 'src/Assets/Style/Color';
import Heading from '../Heading';

export default function Calendars({userInfo, setUserInfo, fullDate}) {
  const reducerData = useSelector(state => state);

  // const [userInfo, setUserInfo] = useState('');
  // console.log(userInfo);
  console.log('fullDate: ', fullDate);

  return (
    <DatePicker
      options={{
        backgroundColor: reducerData?.isDark?.isdark
          ? COLORS.darkMode
          : COLORS.bgcolor,
        textHeaderColor: COLORS.primary,
        textDefaultColor: reducerData?.isDark?.isdark
          ? COLORS.white
          : COLORS.dark,
        selectedTextColor: COLORS.white,
        mainColor: COLORS.primary,
        textSecondaryColor: reducerData?.isDark?.isdark
          ? COLORS.white
          : COLORS.dark,
        // textHeaderFontSize:34
        borderColor: 'transparent',
        textFontSize: 14,
        // borderColor: 'rgba(122, 146, 165, 0.1)',
      }}
      minimumDate={fullDate ? fullDate : '1960-01-01'}
      // maximumDate={fullDate && '2004-01-01'}
      onDateChange={data => {
        if (fullDate) {
          setUserInfo(data);
        } else {
          setUserInfo({...userInfo, userDOB: data});
        }
      }}
      current={fullDate ? fullDate : '1960-01-01'}
      selected={fullDate ? fullDate : '1960-01-01'}
      mode="calendar"
      selectorStartingYear={2000}
    />
  );
}
