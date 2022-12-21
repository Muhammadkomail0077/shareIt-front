import React from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import {Headline, Surface} from 'react-native-paper';
import {Pagination} from 'react-native-snap-carousel';
import InteractParagraph from '../ReusableComponent/Paragraph';
import data from './data';
import {styles} from './style';
import ButtonComp from '../ReusableComponent/Button';
export const SLIDER_WIDTH = Dimensions.get('window').width;
export const SLIDER_HEIGHT = Dimensions.get('window').height;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
export const ITEM_HEIGHT = Math.round(ITEM_WIDTH / .8);
export const TAB_HEIGHT = Math.round(ITEM_HEIGHT / -5);

const CarouselCardItem = ({item, index}) => {
  return (
    <View key={index} style={{marginBottom: 80}}>
      <Surface style={styles.surface} elevation={6}>
        {item.title ? (
          <Headline style={styles.Slider_TopBar}>{item.topBar}</Headline>
        ) : (
          <></>
        )}
        {item.title1 ? (
          <Headline style={styles.Slider_Mainheader}>{item.title1}</Headline>
        ) : (
          <></>
        )}

        {item.title ? (
          <Headline style={styles.Slider_Mainheader}>{item.title}</Headline>
        ) : (
          <></>
        )}
        {item.logoUrl ? (
          <View style={styles.Slider_logoContainer}>
            
            <Image source={item.logoUrl} style={styles.Slider_logoImg} />
          </View>
        ) : (
          <></>
        )}
        <InteractParagraph txtAlign={'center'} p={item.body} />
        {item.saveAmount ? 
        <Headline style={styles.Slider_saveAmount}>{item.saveAmount}</Headline>
        :<View style={{marginTop:20}}></View>
      }
        <View style={{marginBottom:'7%'}}>

        <ButtonComp
           btnwidth={'100%'}
           btnHeight={46}
           btnText={'Select'}
           txtColor={'#fff'}
          justify={'center'}
          align={'center'}
          fontSize={16}
          radius={15}
          fontStyle={'700'}
          txtwidth={'40%'}
          />
      </View>
        
      </Surface>
      
    </View>
  );
};

export default CarouselCardItem;
