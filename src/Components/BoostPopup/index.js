import React, {useEffect, useRef, useState} from 'react';

import {Button, Paragraph, Modal, Portal, Provider} from 'react-native-paper';
import {
  Image,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Pressable,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
} from '../../Components/BoostPopupSlider/carousel';
import data from '../../Components/BoostPopupSlider/data';
import {
  scrollInterpolator,
  animatedStyles,
} from '../../Components/BoostPopupSlider/animation/index';
import Pagination from '../../Components/Pagination/index';
import ButtonComp from '../../Components/ReusableComponent/Button';
import {styles} from './style';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
import COLORS from '../../Assets/Style/Color';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';
import Heading from '../ReusableComponent/Heading';
import Icon from 'react-native-vector-icons/AntDesign';
const familyIcon = require('../../Assets/Images/TinderSLider/Shy-rafiki.png');

const BoostPopup = props => {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: 'white',
    height: Dimensions.get('screen').height,
  };

  return (
    <Portal>
      <Provider>
        <Modal
          visible={props.visible}
          onDismiss={props.hideModal}
          contentContainerStyle={containerStyle}>
          <View>
            <ImageBackground
              source={familyIcon}
              imageStyle={{
                alignSelf: 'center',
              }}
              resizeMode="contain"
              style={{
                height: Dimensions.get('window').height / 3.5,
              }}>
              <Pressable
                style={{marginTop: '8%', marginRight: '4%', marginLeft: '4%'}}
                onPress={props.hideModal}>
                <Icon
                  name="closecircleo"
                  style={{alignItems: 'flex-start'}}
                  color={COLORS.primary}
                  size={30}
                />
              </Pressable>
            </ImageBackground>
          </View>
          <View
            style={{
              flexGrow: 0.7,
            }}>
            <View
              style={{
                width: '80%',
                alignSelf: 'center',
              }}>
              <Heading
                ml={14}
                Heading={'Be Seen'}
                Fontweight={'700'}
                Fontsize={19}
                txtAlign={'center'}
              />
              <InteractParagraph
                txtAlign={'center'}
                p={
                  'Be a top profile in your area for 30 miniutes to get more matches'
                }
                Padding={15}
                fs={12}
              />
              <View style={styles.containerHeading}>
                <Carousel
                  layout="tinder"
                  layoutCardOffset={9}
                  ref={isCarousel}
                  data={data}
                  renderItem={CarouselCardItem}
                  sliderWidth={SLIDER_WIDTH}
                  itemWidth={ITEM_WIDTH}
                  scrollInterpolator={scrollInterpolator}
                  slideInterpolatedStyle={animatedStyles}
                  onSnapToItem={index => setIndex(index)}
                  useScrollView={true}
                />
                <Pagination
                  dots={data.length}
                  activeDot={index}
                  carRef={isCarousel}
                />
              </View>
            </View>
          </View>
        </Modal>
      </Provider>
    </Portal>
  );
};

export default BoostPopup;
