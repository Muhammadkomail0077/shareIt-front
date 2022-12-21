import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import COLORS from 'src/Assets/Style/Color';

const THUMB_RADIUS = 12;

const Thumb = () => {
  return <View style={styles.root} />;
};

const styles = StyleSheet.create({
  root: {
    width: THUMB_RADIUS * 2,
    height: THUMB_RADIUS * 2,
    borderRadius: THUMB_RADIUS,
    borderWidth: 3,
    // elevation: 1,
    borderColor: COLORS.white,
    backgroundColor: COLORS.primary,
  },
});

export default memo(Thumb);
