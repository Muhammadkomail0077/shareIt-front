import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Label = ({text, ...restProps}) => {
  return (
    <View {...restProps}>
      <Text style={styles.text}>{text} km</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: '#000',
    justifyContent: 'flex-end',
    textAlign: 'right',
    marginRight: 20,
  },
});

export default memo(Label);
