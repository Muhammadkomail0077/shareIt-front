import React, {useState} from 'react';
// import { View } from 'react-native'
import {Paragraph} from 'react-native-paper';
import COLORS from 'src/Assets/Style/Color';
import {useSelector} from 'react-redux';
import FONT from 'src/Assets/Style/Font';

function InteractParagraph(props) {
  const reducerData = useSelector(state => state);
  const [isdark, setisDark] = useState(reducerData?.isDark?.isdark);

  const {
    pWidth,
    Direction,
    pAlign,
    txtAlign,
    ml,
    p,
    fw,
    Fontsize,
    mt,
    Padding,
    just,
  } = props;

  return (
    <Paragraph
      style={{
        fontFamily: FONT.pop,
        fontSize: Fontsize,
        width: pWidth,
        flexDirection: Direction,
        alignItems: pAlign,
        textAlign: txtAlign,
        marginLeft: ml,
        fontWeight: fw,
        marginTop: mt,
        justifyContent: just,
        color: props.colors
          ? props.colors
          : COLORS.txt_color && reducerData?.isDark?.isdark
          ? COLORS.white
          : COLORS.txt_color,
        padding: Padding,
      }}>
      {p}
    </Paragraph>
  );
}

export default InteractParagraph;
