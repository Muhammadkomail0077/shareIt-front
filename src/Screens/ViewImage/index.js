import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SafeArea from '../../Components/ReusableComponent/Safearea';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/Dimensions';
import ButtonComp from '../../Components/ReusableComponent/Button';
import ImageLoad from 'react-native-image-placeholder';

const ViewImages = ({route, navigation}) => {
  const {item} = route.params;
  console.log('item:', item);
  return (
    <SafeArea>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            padding: 20,
          }}>
          <ButtonComp
            mode={'outlined'}
            justify={'center'}
            align={'center'}
            btnHeight={65}
            icon={'chevron-back'}
            radius={15}
            Borderwidth={1}
            press={() => navigation.goBack()}
          />
        </View>
        <ImageLoad
          loadingStyle={{ size: 'large', color: 'blue' }}
          style={{
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT - 300,
            // borderRadius: 15,
            // backgroundColor: 'grey'
          }}
          resizeMode="contain"
          resizeMethod="resize"
          source={{uri: item.url}}
        />
      </View>
    </SafeArea>
  );
};

export default ViewImages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'coral',
  },
});
