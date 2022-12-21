import React, {useRef, useState} from 'react';
import {Dimensions, View} from 'react-native';
import COLORS from '../../Assets/Style/Color';
import ButtonComp from '../ReusableComponent/Button';
import Heading from '../ReusableComponent/Heading';
import Input from '../ReusableComponent/input';
import Bars from 'src/Components/ReusableComponent/Bars';
import InteractParagraph from '../ReusableComponent/Paragraph';
import InteractChip from 'src/Components/Chip';
import {Chip} from 'react-native-paper';
import BasicBtn from '../ReusableComponent/ButtonBasic';
import Calendars from 'src/Components/ReusableComponent/Calendar';
import BottomSheet from 'src/Components/ReusableComponent/BottomSheet';

function SecondFilters() {
  const width = Dimensions.get('window').width;
  const center = width / 5;
  const refRBSheet = useRef();

  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);
  const [low1, setLow1] = useState(0);
  const [high1, setHigh1] = useState(100);
  const emptyIcon = () => null;
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked1, setChecked1] = React.useState(true);

  const tap = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };
  const tap1 = () => {
    if (checked2) {
      setChecked2(false);
    } else {
      setChecked2(true);
    }
  };
  const tap2 = () => {
    if (checked1) {
      setChecked1(false);
    } else {
      setChecked1(true);
    }
  };

  return (
    <View style={{margin: '4%'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <Heading Fontsize={24} Fontweight={'700'} Heading={'Filters'} />
        </View>
      </View>
      <Heading
        Stylefont={'normal'}
        Fontweight={'700'}
        Fontsize={16}
        txtAlign={'left'}
        ml={'5%'}
        mt={'3%'}
        p={10}
        Heading={'Location'}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <BasicBtn
          btnText={'Texas'}
          icon={'chevron-forward'}
          justifyContent={'space-between'}
          fontSize={15}
          viewWidth={'95%'}
          iconSize={21}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Heading
          Stylefont={'normal'}
          Fontweight={'700'}
          Fontsize={16}
          txtAlign={'left'}
          ml={'5%'}
          mt={'3%'}
          p={10}
          Heading={'Distance'}
        />
        <Heading
          Stylefont={'normal'}
          //   Fontweight={'700'}
          Fontsize={14}
          txtAlign={'left'}
          mx={20}
          mt={'4%'}
          p={10}
          Heading={`${low} Km`}
        />
      </View>
      <View
        style={{
          overflow: 'hidden',
          width: '85%',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <Bars
          range={true}
          txt={' km'}
          low={low}
          high={high}
          value={false}
          setLow={setLow}
          setHigh={setHigh}
        />
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Heading
          Stylefont={'normal'}
          Fontweight={'700'}
          Fontsize={16}
          txtAlign={'left'}
          ml={'5%'}
          mt={'3%'}
          p={10}
          Heading={'Category'}
        />
        <Heading
          Stylefont={'normal'}
          //   Fontweight={'700'}
          Fontsize={14}
          txtAlign={'left'}
          mx={20}
          mt={'3%'}
          p={10}
          Heading={'5+'}
        />
      </View>
      <View
        style={{
          height: 58,
          justifyContent: 'space-between',
          alignItems: 'center',
          overflow: 'hidden',
          borderColor: COLORS.border_color,
          borderRadius: 15,
          borderWidth: 1,
          width: '85%',
          alignSelf: 'center',
          flexDirection: 'row',
        }}>
        <InteractParagraph
          p={'Food, Dating, 3+..'}
          Padding={15}
          Fontsize={14}
        />
        <ButtonComp
          mode={'text'}
          justify={'center'}
          //   Btnicon={'chevron-right'}
          align={'center'}
          btnText={'Edit >'}
          fontStyle={'bold'}
          fontSize={14}
        />
      </View>
      <Heading
        Stylefont={'normal'}
        Fontweight={'700'}
        Fontsize={16}
        txtAlign={'left'}
        ml={'5%'}
        mt={'2%'}
        p={10}
        Heading={'Dates'}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          // marginTop: '4%',
        }}>
        <BasicBtn
          btnText={'July 11th, 1995'}
          icon={'calendar-outline'}
          txtColor={COLORS.primary}
          fontSize={15}
          viewWidth={'95%'}
          flexDirection={'row-reverse'}
          justifyContent={'flex-end'}
          alignItems={'center'}
          alignSelf={'center'}
          txtLeftMargin={0}
          rightMargin1={-15}
          txtLeftMargin1={0}
          fontStyle={'700'}
          iconSize={21}
          bgcolor={COLORS.btn_bgColor}
          press={() => refRBSheet.current.open()}
        />
        <BottomSheet
          refRBSheets={refRBSheet}
          height={Dimensions.get('window').height / 1.4}>
          <Heading
            Stylefont={'normal'}
            Fontsize={14}
            txtAlign={'center'}
            Fontweight={'700'}
            mt={'5%'}
            Heading={'Birthday'}
          />
          <Calendars />
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              flexDirection: 'row',
              bottom: 20,
            }}>
            <ButtonComp
              btnwidth={'92%'}
              btnHeight={56}
              btnText={'Save'}
              txtColor={COLORS.white}
              justify={'center'}
              align={'center'}
              fontSize={16}
              radius={15}
              fontStyle={'700'}
              txtwidth={'100%'}
              press={() => refRBSheet.current.close()}
            />
          </View>
        </BottomSheet>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Heading
          Stylefont={'normal'}
          Fontweight={'700'}
          Fontsize={16}
          txtAlign={'left'}
          ml={'5%'}
          mt={'3%'}
          p={10}
          Heading={'Timings'}
        />
        <Heading
          Stylefont={'normal'}
          //   Fontweight={'700'}
          Fontsize={14}
          txtAlign={'left'}
          mx={20}
          mt={'3%'}
          p={10}
          Heading={`${low1}:00 - ${high1}:00 `}
        />
      </View>
      <View
        style={{
          overflow: 'hidden',
          width: '85%',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <Bars
          range={false}
          low={low1}
          high={high1}
          min={1}
          max={24}
          setLow={setLow1}
          setHigh={setHigh1}
        />
      </View>
    </View>
  );
}

export default SecondFilters;
