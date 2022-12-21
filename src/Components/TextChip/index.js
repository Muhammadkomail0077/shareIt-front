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

function TextChip(props) {
  const [checked, setChecked] = React.useState(false);
  const reducerData = useSelector(state => state);

  const tap = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
      props.addChipData(props.title)
      if (props.categoryIndex != null) {
        setTimeout(() => {
          if (props.categoryIndex === 2) {
            props.addChipData(props.title)
            props.refRBSheet.current.close();
          } else {
            props.setcategoryIndex(props.categoryIndex + 1);
          }
        }, 500);
      }
    }
  };
  const emptyIcon = () => null;

  return (
    <View style={{width: '50%', padding: 12}}>
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
          alignSelf: 'center',
          alignItems: 'center',
          width: 128,
        }}
        selected={checked}
        selectedColor={checked ? '#fff' : '#000'}
        onPress={tap}
        // onPress={props.onPress}
        >
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
          fs={props.titleSize ? props.titleSize : 10}
          txtAlign={'center'}
        />
      </Chip>
    </View>
  );
}

export default TextChip;
