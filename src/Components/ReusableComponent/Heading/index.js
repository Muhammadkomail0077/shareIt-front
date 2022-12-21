import React, {useState} from 'react';
import {Headline} from 'react-native-paper';
import FONT from 'src/Assets/Style/Font';
import COLORS from 'src/Assets/Style/Color';
import {useSelector} from 'react-redux';

function Heading(props) {
  const reducerData = useSelector(state => state);
  const [isdark, setisDark] = useState(reducerData?.isDark?.isdark);

  const {
    Stylefont,
    Fontweight,
    Fontsize,
    txtAlign,
    ml,
    mt,
    p,
    lh,
    Heading,
    mx,
  } = props;

  return (
    <Headline
      style={{
        fontFamily: FONT.pop,
        fontStyle: Stylefont,
        fontWeight: Fontweight,
        fontSize: Fontsize,
        textAlign: txtAlign,
        marginLeft: ml,
        marginHorizontal: mx,
        marginTop: mt,
        padding: p,
        lineHeight: lh,
        color: reducerData?.isDark?.isdark ? COLORS.white : COLORS.dark,
      }}>
      {Heading}
    </Headline>
  );
}

export default Heading;
