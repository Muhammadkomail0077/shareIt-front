import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
  SLIDER_HEIGHT,
} from '../../Components/Slider/carousel';
import data from '../../Components/Slider/data';
import {
  scrollInterpolator,
  animatedStyles,
} from '../../Components/Slider/animation/index';
import Pagination from '../../Components/Pagination/index';
import ButtonComp from '../../Components/ReusableComponent/Button';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
import COLORS from '../../Assets/Style/Color';
import InteractParagraph from '../../Components/ReusableComponent/Paragraph';

// const app = navigation
function Onboarding({navigation}) {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);

  return (
    <SafeArea>
      <View
        style={{
          justifyContent: 'space-around',

          flexGrow: 1,
          flexWrap: 'wrap',
        }}>
        <View style={styles.containerHeading}>
          <Carousel
            layout="tinder"
            layoutCardOffset={9}
            ref={isCarousel}
            data={data}
            renderItem={CarouselCardItem}
            sliderWidth={SLIDER_WIDTH}
            sliderHeight={SLIDER_HEIGHT}
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

      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          flexDirection: 'row',
        }}>
        <ButtonComp
          btnwidth={'90%'}
          btnHeight={56}
          txtColor={COLORS.white}
          btnText={'Create an account'}
          justify={'center'}
          align={'center'}
          fontSize={16}
          radius={15}
          txtwidth={'100%'}
          press={() => navigation.navigate('signup')}
        />
      </View>
      <View style={styles.containerlastText}>
        <InteractParagraph p={'Already have an account ?'} />
        <ButtonComp
          mode={'text'}
          btnHeight={40}
          txtRightMargin={0}
          txtLeftMargin={0}
          btnText={' Sign In'}
          align={'center'}
          fontStyle={'bold'}
          fontSize={14}
          press={() => navigation.navigate('login')}
        />
      </View>
    </SafeArea>
  );
}

export default Onboarding;
