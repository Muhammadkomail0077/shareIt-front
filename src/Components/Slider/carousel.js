import React from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import {Headline} from 'react-native-paper';
import {Pagination} from 'react-native-snap-carousel';
import InteractParagraph from '../ReusableComponent/Paragraph';
import data from './data';
import {styles} from './style';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const SLIDER_HEIGHT = Dimensions.get('window').height;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.66);
export const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 1.52);
export const TAB_HEIGHT = Math.round(ITEM_HEIGHT / -5);

const CarouselCardItem = ({item, index}) => {
  return (
    <View key={index} style={{marginBottom: 20}}>
      <Image
        style={styles.Slider_image}
        source={item.imgUrl}
        resizeMode="contain"
        resizeMethod="resize"
      />
      {item.logoUrl ? (
        <View style={styles.Slider_logoContainer}>
          <Image source={item.logoUrl} style={styles.Slider_logoImg} />
        </View>
      ) : (
        <></>
      )}
      {item.title1 ? (
        <Headline style={styles.Slider_Mainheader}>{item.title1}</Headline>
      ) : (
        <></>
      )}
      <Headline style={styles.Slider_header}>{item.title}</Headline>

      <InteractParagraph txtAlign={'center'} p={item.body} />
    </View>
  );
};

export default CarouselCardItem;
