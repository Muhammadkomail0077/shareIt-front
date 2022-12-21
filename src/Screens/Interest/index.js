import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Headline, Paragraph} from 'react-native-paper';
import COLORS from 'src/Assets/Style/Color';
import ButtonComp from 'src/Components/ReusableComponent/Button';
import {styles} from './style';
import {Chip} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import InteractChip from 'src/Components/Chip';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
import {withTheme, useTheme} from 'react-native-paper';
import InteractParagraph from 'src/Components/ReusableComponent/Paragraph';
import Heading from 'src/Components/ReusableComponent/Heading';

function Interest({navigation}) {
  return (
    <SafeArea>
      <View style={{margin: '4%'}}>
      <ButtonComp
        mode={'outlined'}
        justify={'center'}
        align={'flex-start'}
        btnHeight={65}
        icon={'chevron-back'}
        radius={15}
        Borderwidth={2}
        press={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>

          {/* <View
            style={{
              // flexDirection: 'row',
              // justifyContent: 'space-between',
              // margin: 20,
              alignItems: 'flex-start',
            }}> */}
          {/* </View> */}
          <View style={{marginVertical:'10%'}} >
            <Heading
              Stylefont={'normal'}
              Fontweight={'700'}
              Fontsize={34}
              txtAlign={'left'}
              lh={40}
              Heading={'Your interests'}
            />
            <InteractParagraph
              pWidth={'90%'}
              // Direction={'row'}
              pAlign={'center'}
              txtAlign={'justify'}
              // ml={'10%'}
              p={
                'Select a few of your interests and let everyone know what you’re passionate about.'
              }
            />
          </View>

          <View
            style={
              {
                justifyContent: 'space-around',
                flexGrow: 1,
                flexWrap: 'wrap',
              }
            }>
            <View style={styles.main}>
              <InteractChip IconName={'camerao'} title={'Photography'} />
              <InteractChip IconNameone={'bag'} title={' Shopping'} />
              <InteractChip IconNameone={'microphone'} title={' Karaoke'} />
              <InteractChip
                IconNametwo={'color-filter-outline'}
                title={' Yoga'}
              />
              <InteractChip IconNamethree={'noodles'} title={' Cooking'} />
              <InteractChip
                IconNametwo={'tennisball-outline'}
                title={' Tennis'}
              />
              <InteractChip IconNamethree={'run'} title={' Run'} />
              <InteractChip IconNamethree={'waves'} title={' Swimming'} />
              <InteractChip
                IconNametwo={'color-palette-outline'}
                title={' Art'}
              />
              <InteractChip IconNamefour={'mountains'} title={' Traveling'} />
              <InteractChip
                IconNamethree={'parachute-outline'}
                title={' Extreme'}
              />
              <InteractChip
                IconNametwo={'musical-notes-outline'}
                title={' Music'}
              />
              <InteractChip IconNamethree={'glass-cocktail'} title={' Drink'} />
              <InteractChip
                IconNametwo={'game-controller-outline'}
                title={'Video games'}
              />
            </View>

            <View
              style={{
                // justifyContent: 'center',
                // alignContent: 'center',
                marginTop: '10%',
              }}>
              <ButtonComp
                btnwidth={'100%'}
                btnHeight={56}
                btnText={'Continue'}
                txtColor={COLORS.white}
                justify={'center'}
                align={'center'}
                fontSize={16}
                radius={15}
                fontStyle={'700'}
                press={() => navigation.navigate('friends')}
              />
            </View>
          </View>
      </ScrollView>
      </View>

    </SafeArea>
  );
}

export default withTheme(Interest);
