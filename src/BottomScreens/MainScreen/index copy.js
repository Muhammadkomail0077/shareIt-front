// import React, {useRef} from 'react';
// import {View, Text, Image} from 'react-native';
// import Swiper from 'react-native-deck-swiper';
// import photoCards from '../../Components/CardSwipe/data';
// import CardSwipe from '../../Components/CardSwipe/index';
// import {useSelector} from 'react-redux';
// import COLORS from '../../Assets/Style/Color';
// import InteractAvatar from '../../Components/ReusableComponent/Avatar';
// import Heading from '../../Components/ReusableComponent/Heading';
// import ButtonComp from '../../Components/ReusableComponent/Button';

// function MainScreen() {
//   const reducerData = useSelector(state => state);

//   // const useSwiper = useRef(null).current;
//   // const handleOnSwipedLeft = () => useSwiper.swipeLeft();
//   // const handleOnSwipedTop = () => useSwiper.swipeTop();
//   // const handleOnSwipedRight = () => useSwiper.swipeRight();

//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: reducerData?.isDark?.isdark
//           ? COLORS.darkMode
//           : COLORS.bgcolor,
//       }}>
//       <View
//         style={{
//           flexDirection: 'row',
//           margin: 30,
//           justifyContent: 'space-between',
//         }}>
//         <InteractAvatar
//           size={58}
//           src={require('src/Assets/Images/avatar.png')}
//           press={() => navigation.openDrawer()}
//         />
//         <View style={{justifyContent: 'center', alignItems: 'center'}}>
//           <Image
//             style={{width: 30, height: 30}}
//             source={require('src/Assets/Images/logo.png')}
//           />
//           <Heading
//             Fontsize={18}
//             Heading={'Discover'}
//             txtAlign={'center'}
//             Fontweight={'700'}
//           />
//         </View>
//         <ButtonComp
//           mode={'outlined'}
//           justify={'center'}
//           align={'center'}
//           btnHeight={60}
//           icon={'options-outline'}
//           Borderwidth={2}
//           radius={15}
//           topMargin={0}
//           // press={() => navigation.goBack()}
//         />
//       </View>
//       {/* <MainScreen /> */}
//     </View>
//     // <Swiper
//     //   ref={useSwiper}
//     //   animateCardOpacity
//     //   //   containerStyle={styles.container}
//     //   cards={photoCards}
//     //   renderCard={card => <CardSwipe card={card} />}
//     //   cardIndex={0}
//     //   backgroundColor="white"
//     //   stackSize={2}
//     //   infinite
//     //   showSecondCard
//     //   animateOverlayLabelsOpacity
//     //   overlayLabels={{
//     //     left: {
//     //       title: 'NOPE',
//     //       // element: <OverlayLabel label="NOPE" color="#E5566D" />,
//     //       // style: {
//     //       //   wrapper: styles.overlayWrapper,
//     //       // },
//     //     },
//     //     right: {
//     //       title: 'LIKE',
//     //       // element: <OverlayLabel label="LIKE" color="#4CCC93" />,
//     //       style: {
//     //         wrapper: {
//     //           // ...styles.overlayWrapper,
//     //           alignItems: 'flex-start',
//     //           marginLeft: 30,
//     //         },
//     //       },
//     //     },
//     //   }}
//     // />
//   );
// }

// export default MainScreen;

//////////////////////////////////////////////////////

import React, {useRef} from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import Swiper from 'react-native-deck-swiper';
import CardSwipe from '../../Components/CardSwipe/index';
import COLORS from '../../Assets/Style/Color';
import InteractAvatar from '../../Components/ReusableComponent/Avatar';
import Heading from '../../Components/ReusableComponent/Heading';
import ButtonComp from '../../Components/ReusableComponent/Button';
import SafeArea from '../../Components/ReusableComponent/Safearea';

import styles from './AppStyles';
import {Card, IconButton, OverlayLabel} from '../../Components/TinderSlider';
import {PhotoCards} from '../../Constants';

const MainScreen = () => {
  const useSwiper = useRef(null).current;
  const reducerData = useSelector(state => state);
  const handleOnSwipedLeft = () => useSwiper.swipeLeft();
  const handleOnSwipedTop = () => useSwiper.swipeTop();
  const handleOnSwipedRight = () => useSwiper.swipeRight();

  return (
    <SafeArea>
      <View
        style={{
          flexGrow: 1,
          margin: '8%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            // margin: 30,
            justifyContent: 'space-between',
          }}>
          <InteractAvatar
            size={58}
            src={require('src/Assets/Images/avatar.png')}
            press={() => navigation.openDrawer()}
          />
          <Heading
            Fontsize={18}
            Heading={'Interact'}
            txtAlign={'center'}
            Fontweight={'700'}
          />
        </View>

        <ButtonComp
          mode={'outlined'}
          justify={'center'}
          align={'center'}
          btnHeight={60}
          icon={'options-outline'}
          Borderwidth={2}
          radius={15}
          topMargin={0}
          // press={() => navigation.goBack()}
        />
      </View>

      <View style={styles.container}>
        <View style={styles.swiperContainer}>
          <Swiper
            ref={useSwiper}
            animateCardOpacity
            containerStyle={styles.container}
            cards={PhotoCards}
            renderCard={card => <Card card={card} />}
            cardIndex={0}
            backgroundColor="white"
            stackSize={2}
            infinite
            showSecondCard
            animateOverlayLabelsOpacity
            overlayLabels={{
              left: {
                title: 'NOPE',
                element: <OverlayLabel label="NOPE" color="#E5566D" />,
                style: {
                  wrapper: styles.overlayWrapper,
                },
              },
              right: {
                title: 'LIKE',
                element: (
                  <IconButton
                    size={40}
                    name="heart"
                    onPress={handleOnSwipedLeft}
                    color={COLORS.darkGreen}
                    backgroundColor={COLORS.white}
                  />
                ),
                style: {
                  wrapper: {
                    ...styles.overlayWrapper,
                    // alignItems: 'center',
                    marginLeft: 1,
                  },
                },
              },
            }}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <IconButton
            name="reload1"
            onPress={handleOnSwipedLeft}
            color={COLORS.lightGreen}
            backgroundColor={COLORS.white}
          />
          <IconButton
            size={30}
            name="close"
            onPress={handleOnSwipedLeft}
            color={COLORS.white}
            backgroundColor={COLORS.darkGreen}
          />
          <IconButton
            name="star"
            onPress={handleOnSwipedLeft}
            color={COLORS.lightGreen}
            backgroundColor={COLORS.white}
          />
          <IconButton
            size={30}
            name="heart"
            onPress={handleOnSwipedLeft}
            color={COLORS.white}
            backgroundColor={COLORS.darkGreen}
          />
          <IconButton
            name="comment-flash"
            onPress={handleOnSwipedLeft}
            color={COLORS.lightGreen}
            backgroundColor={COLORS.white}
          />
        </View>
      </View>
    </SafeArea>
  );
};

export default MainScreen;
