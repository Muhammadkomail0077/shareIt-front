import React from 'react';
import {View} from 'react-native';
import {Chip} from 'react-native-paper';
import COLORS from 'src/Assets/Style/Color';
import FONT from 'src/Assets/Style/Font';
import NewFont from 'react-native-vector-icons/SimpleLineIcons';
import NewFontone from 'react-native-vector-icons/Ionicons';
import NewFonttwo from 'react-native-vector-icons/MaterialCommunityIcons';
import NewFontthree from 'react-native-vector-icons/Foundation';
import Icon from 'react-native-vector-icons/AntDesign';
import InteractParagraph from '../ReusableComponent/Paragraph';
import {useSelector} from 'react-redux';

function InteractChip(props) {
  const [checked, setChecked] = React.useState(false);
  const reducerData = useSelector(state => state);

  const tap = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };
  const emptyIcon = () => null;

  return (
    <View style={{width: '50%', paddingTop: 10, paddingRight: 15}}>
      <Chip
        mode="outlined"
        icon={emptyIcon}
        style={{
          backgroundColor:
            reducerData?.isDark?.isdark && checked
              ? COLORS.primary
              : reducerData?.isDark?.isdark && !checked
              ? '#292929'
              : !reducerData?.isDark?.isdark && !checked
              ? COLORS.bgcolor
              : COLORS.primary,
          height: 45,
          alignContent: 'center',
        }}
        selected={checked}
        selectedColor={checked ? '#fff' : '#000'}
        onPress={tap}>
        <Icon
          name={props.IconName}
          size={15}
          color={checked ? '#fff' : COLORS.primary}
          style={{fontFamily: FONT.pop}}
        />
        <NewFont
          name={props.IconNameone}
          size={15}
          color={checked ? '#fff' : COLORS.primary}
          style={{fontFamily: FONT.pop}}
        />
        <NewFontone
          name={props.IconNametwo}
          size={15}
          color={checked ? '#fff' : COLORS.primary}
          style={{fontFamily: FONT.pop}}
        />
        <NewFonttwo
          name={props.IconNamethree}
          size={15}
          color={checked ? '#fff' : COLORS.primary}
          style={{fontFamily: FONT.pop}}
        />{' '}
        <NewFontthree
          name={props.IconNamefour}
          size={15}
          color={checked ? '#fff' : COLORS.primary}
          style={{fontFamily: FONT.pop}}
        />
        {/* {props.title} */}
        <InteractParagraph
          color={
            reducerData?.isDark?.isdark && checked
              ? COLORS.white
              : reducerData?.isDark?.isdark && !checked
              ? COLORS.white
              : !reducerData?.isDark?.isdark && !checked
              ? COLORS.dark
              : COLORS.white
          }
          p={props.title}
          fs={props.titleSize ? props.titleSize : 14}
          txtAlign={'center'}
        />
      </Chip>
    </View>
  );
}

export default InteractChip;
