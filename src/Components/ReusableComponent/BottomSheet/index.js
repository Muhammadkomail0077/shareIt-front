import React, {useRef} from 'react';
import {View, Button, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useSelector} from 'react-redux';
import COLORS from '../../../Assets/Style/Color';
import SafeArea from '../Safearea';

export default function BottomSheet(props) {
  //   const refRBSheet = useRef();
  const reducerData = useSelector(state => state);

  return (
    <SafeArea>
      {/* <ScrollView contentContainerStyle={{flexGrow: 1}}> */}
      {/* <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} /> */}

      {/* <Pressable onPress={props.press} /> */}
      <RBSheet
        ref={props.refRBSheets}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={props.height}
        customStyles={{
          draggableIcon: {
            backgroundColor: reducerData?.isDark?.isdark ? '#fff' : '#000',
            // flex:1,
            // borderTopRightRadius:90
            // borderTopStartRadius:90
          },
          container: {
            // borderRadius: 40,
            backgroundColor: reducerData?.isDark?.isdark
              ? COLORS.darkMode
              : COLORS.bgcolor,
            elevation: 2,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            // alignItems: 'center',
            alignSelf: 'center',

            // paddingHorizontal:10
            // padding:20
            // margin:20
          },
        }}>
        {props.children}
      </RBSheet>
      {/* </ScrollView> */}
    </SafeArea>
  );
}
