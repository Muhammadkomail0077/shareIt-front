import React, {useCallback, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import COLORS from 'src/Assets/Style/Color';
import RangeSlider from 'rn-range-slider';
import Thumb from '../../RangeSlider/thumb';
import Rail from '../../RangeSlider/rail';
import RailSelected from '../../RangeSlider/railSelected';
import Label from '../../RangeSlider/label';
import Notch from '../../RangeSlider/notch';
import {useSelector} from 'react-redux';

const Bars = props => {
  const [rangeDisabled, setRangeDisabled] = useState(props.range);
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const reducerData = useSelector(state => state);

  // const [sliderValue, setSliderValue] = useState(75);

  const handleValueChange = useCallback((low, high) => {
    props.setLow(low);
    props.setHigh(high);
    // console.log('low: ', low);
    // console.log('high: ', high);
  }, []);

  return (
    <SafeAreaView>
      {props.value ? (
        <Text
          style={{
            color: reducerData?.isDark?.isdark ? COLORS.white : COLORS.dark,
            textAlign: 'right',
          }}>
          {`${props.low}${props.txt}  ${
            rangeDisabled ? '' : `- ${props.high}`
          }`}
        </Text>
      ) : (
        <></>
      )}
      <RangeSlider
        min={props.min ? props.min : 0}
        max={props.max ? props.max : 10}
        step={1}
        floatingLabel
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        // renderLabel={'renderLabel'}

        // renderNotch={renderNotch}
        onValueChanged={handleValueChange}
        disableRange={rangeDisabled}
      />
      {/* <Text>{renderLabel}</Text> */}
    </SafeAreaView>
  );
};

export default Bars;
