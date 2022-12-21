import {View, Text} from 'react-native';
import React, {memo} from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {useSelector} from 'react-redux';
import COLORS from '../../../Assets/Style/Color';

const NewCalendar = () => {
  const reducerData = useSelector(state => state);
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <Calendar
          style={{
            marginHorizontal: 10,
            borderRadius: 10,
            height: 400
          }}
          theme={{
            todayTextColor: '#E0AD00',
            calendarBackground: reducerData?.isDark?.isdark
              ? COLORS.darkMode
              : COLORS.bgcolor,
            monthTextColor: '#323232',
            arrowColor: COLORS.primary,
            dayTextColor: '',
            selectedDayTextColor: reducerData?.isDark?.isdark
              ? COLORS.darkMode
              : COLORS.bgcolor,
            selectedDayBackgroundColor: COLORS.primary,
            textDisabledColor: '#575757',
          }}
          firstDay={1}
          enableSwipeMonths={true}
          markingType={'dot'}
          //   markedDates={{
          //     '2022-04-26': {
          //       textColor: 'white',
          //       selected: true,
          //       marked: true,
          //     },
          //   }}
          minDate={'1960-01-01'}
          maxDate={'2004-01-01'}
          initialDate={'2003-01-01'}
          onDayPress={day => {
            console.log('selected day', day);
          }}
        />
      </View>
    </>
  );
};

export default memo(NewCalendar);
