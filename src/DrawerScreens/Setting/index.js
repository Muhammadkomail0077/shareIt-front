import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import COLORS from 'src/Assets/Style/Color';
import ButtonComp from 'src/Components/ReusableComponent/Button';
import Heading from 'src/Components/ReusableComponent/Heading';
import InteractParagraph from 'src/Components/Paragraph/';
import SafeArea from 'src/Components/ReusableComponent/Safearea';
import Bars from 'src/Components/ReusableComponent/Bars';
import SwitchBtn from 'src/Components/Switch';
import {useSelector} from 'react-redux';
import ThemeSwitch from '../../Components/SwitchButton';

function Setting({navigation}) {
  const reducerData = useSelector(state => state);

  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);
  const [low1, setLow1] = useState(0);
  const [high1, setHigh1] = useState(100);
  return (
    <SafeArea>
      <ScrollView>
        <View style={{margin: '4%', flexGrow: 1}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              // padding: 10,
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
            <Heading
              Stylefont={'normal'}
              Fontweight={'700'}
              Fontsize={34}
              txtAlign={'center'}
              ml={'5%'}
              mt={'3%'}
              // p={10}
              Heading={'Settings'}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: '10%',
            }}>
            <ButtonComp
              btnwidth={'100%'}
              btnHeight={56}
              btnText={'Interact Plus'}
              color={'#E8E6EA'}
              mode={'outlined'}
              txtColor={'#22FFA2'}
              justify={'center'}
              align={'center'}
              fontSize={22}
              radius={15}
              fontStyle={'700'}
              Borderwidth={1}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: '3%',
            }}>
            <ButtonComp
              btnwidth={'100%'}
              btnHeight={56}
              btnText={'Interact Gold'}
              color={'#E2B158'}
              mode={'outlined'}
              txtColor={'#E2B158'}
              justify={'center'}
              align={'center'}
              fontSize={22}
              radius={15}
              fontStyle={'700'}
              txtwidth={'100%'}
              Borderwidth={1}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: '3%',
            }}>
            <ButtonComp
              btnwidth={'100%'}
              btnHeight={56}
              btnText={'Interact Platinum'}
              color={'#E8E6EA'}
              mode={'outlined'}
              txtColor={COLORS.primary}
              justify={'center'}
              align={'center'}
              fontSize={22}
              radius={15}
              fontStyle={'700'}
              txtwidth={'100%'}
              Borderwidth={1}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <Heading
              Stylefont={'normal'}
              Fontweight={'700'}
              Fontsize={20}
              txtAlign={'left'}
              // ml={'10%'}
              mt={'5%'}
              // p={10}
              Heading={'Account Settings'}
            />
            {/* <InteractParagraph /> */}
          </View>
          <View
            style={{
              height: 58,
              justifyContent: 'space-between',
              overflow: 'hidden',
              borderColor: COLORS.border_color,
              borderRadius: 15,
              borderWidth: 1,
              width: '100%',
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            <InteractParagraph p={'Phone Number'} Padding={15} Fontsize={14} />
            <ButtonComp
              mode={'text'}
              justify={'center'}
              align={'center'}
              btnText={'081 235 2354802 >'}
              fontStyle={'bold'}
              fontSize={14}
            />
          </View>
          <View
            style={{width: '100%', alignItems: 'center', alignSelf: 'center'}}>
            <InteractParagraph
              p={'verify a phone number to help secure your account.'}
              Fontsize={12}
              pWidth={'100%'}
              mt={10}
            />
          </View>
          <View>
            <Heading
              Stylefont={'normal'}
              Fontweight={'700'}
              Fontsize={20}
              txtAlign={'left'}
              mt={'5%'}
              Heading={'Discovery Settings'}
            />
          </View>
          <View
            style={{
              height: 58,
              marginTop: 10,
              justifyContent: 'space-between',
              overflow: 'hidden',
              borderColor: COLORS.border_color,
              borderRadius: 15,
              borderWidth: 1,
              width: '100%',
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            <InteractParagraph p={'Location'} Padding={15} Fontsize={14} />
            <ButtonComp
              mode={'text'}
              justify={'center'}
              align={'center'}
              btnText={'My Current Location'}
              fontStyle={'bold'}
              fontSize={14}
            />
          </View>
          <View
            style={{width: '100%', alignItems: 'center', alignSelf: 'center'}}>
            <InteractParagraph
              p={'Change Your location to see Interact members near you.'}
              Fontsize={12}
              pWidth={'100%'}
              mt={10}
            />
          </View>
          <View>
            <Heading
              Stylefont={'normal'}
              Color={COLORS.primary}
              Fontweight={'700'}
              Fontsize={20}
              txtAlign={'left'}
              mt={'5%'}
              Heading={'Maximum Distance'}
            />
          </View>
          <View
            style={{
              height: 65,
              marginTop: 10,
              // padding: 10,
              // paddingBottom: 20,
              overflow: 'hidden',
              borderColor: COLORS.border_color,
              borderRadius: 15,
              borderWidth: 1,
              width: '100%',
              alignSelf: 'center',
              alignItems: 'center',
              // justifyContent: 'center',
            }}>
            <View style={{width: '90%'}}>
              <Bars
                range={true}
                low={low1}
                high={high1}
                txt={' km'}
                value={true}
                setLow={setLow1}
                setHigh={setHigh1}
              />
            </View>
          </View>
          <View
            style={{width: '100%', alignItems: 'center', alignSelf: 'center'}}>
            <InteractParagraph
              p={'Change Your radius to see Interact members near you.'}
              Fontsize={12}
              pWidth={'100%'}
              mt={10}
            />
          </View>
          <View>
            <Heading
              Stylefont={'normal'}
              Color={COLORS.primary}
              Fontweight={'700'}
              Fontsize={20}
              txtAlign={'left'}
              mt={'5%'}
              Heading={'Age Range'}
            />
          </View>
          <View
            style={{
              height: 65,
              // padding: 10,
              // paddingBottom: 25,
              marginTop: 20,
              overflow: 'hidden',
              borderColor: COLORS.border_color,
              borderRadius: 15,
              borderWidth: 1,
              width: '100%',
              alignSelf: 'center',
              // justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{width: '90%'}}>
              <Bars
                range={false}
                low={low}
                high={high}
                txt={''}
                value={true}
                setLow={setLow}
                setHigh={setHigh}
              />
            </View>
          </View>
          <View
            style={{width: '100%', alignItems: 'center', alignSelf: 'center'}}>
            <InteractParagraph
              p={
                'Interact uses these preferences to suggest matches. Some match suggestions may not fall within your desired parameters.'
              }
              Fontsize={12}
              pWidth={'100%'}
              mt={10}
            />
          </View>
          <View>
            <Heading
              Stylefont={'normal'}
              Fontweight={'700'}
              Fontsize={20}
              txtAlign={'left'}
              mt={'5%'}
              Heading={'Control Who Sees You'}
            />
          </View>
          <View
            style={{
              // justifyContent: 'flex-start',
              // padding: 10,
              flexWrap: 'wrap',
              overflow: 'hidden',
              borderColor: COLORS.border_color,
              borderRadius: 15,
              borderWidth: 1,
              width: '100%',
              paddingTop: 10,
              paddingBottom: 15,
              // alignItems: 'flex-start',
              // alignSelf: 'center',
            }}>
            <View style={{alignItems: 'flex-start'}}>
              <ButtonComp
                mode={'text'}
                // justify={'flex-start'}
                // align={'flex-start'}
                btnText={'Balanced Recommendation'}
                //  fontStyle={'bold'}
                fontSize={16}
              />
            </View>
            <InteractParagraph
              p={'See the most relevnt family to you (default setting)'}
              Fontsize={12}
              pWidth={'85%'}
              ml={18}
              mt={-5}
            />

            <ButtonComp
              mode={'text'}
              justify={'center'}
              align={'flex-start'}
              btnText={'Recently Active'}
              txtColor={
                reducerData?.isDark?.isdark ? COLORS.white : COLORS.dark
              }
              fontStyle={'500'}
              fontSize={16}
            />
            <InteractParagraph
              p={'See the most recently active families first'}
              Fontsize={12}
              pWidth={'90%'}
              ml={18}
              mt={-5}
            />
          </View>
          <View>
            <Heading
              Stylefont={'normal'}
              Fontweight={'700'}
              Fontsize={20}
              txtAlign={'left'}
              mt={'8%'}
              Heading={'Control Who You See'}
            />
          </View>
          <View
            style={{
              justifyContent: 'flex-start',
              // padding: 10,
              marginTop: 10,
              paddingTop: 10,
              paddingBottom: 10,
              overflow: 'hidden',
              borderColor: COLORS.border_color,
              borderRadius: 15,
              borderWidth: 1,
              width: '100%',
              alignSelf: 'center',
            }}>
            <ButtonComp
              mode={'text'}
              justify={'center'}
              align={'flex-start'}
              btnText={'Standard'}
              //  fontStyle={'bold'}
              fontSize={16}
            />
            <InteractParagraph
              p={
                'Only be shown to certain types of families for individual recommmendations.'
              }
              Fontsize={12}
              pWidth={'90%'}
              ml={18}
              mt={-5}
            />

            <ButtonComp
              mode={'text'}
              justify={'center'}
              align={'flex-start'}
              btnText={'Only People I’ve Liked'}
              txtColor={
                reducerData?.isDark?.isdark ? COLORS.white : COLORS.dark
              }
              fontStyle={'500'}
              fontSize={16}
            />
            <InteractParagraph
              p={'Only families i’ve interacted with'}
              Fontsize={12}
              pWidth={'90%'}
              ml={18}
              mt={-5}
            />
          </View>
          <View>
            <Heading
              Stylefont={'normal'}
              Fontweight={'700'}
              Fontsize={20}
              txtAlign={'left'}
              mt={'5%'}
              Heading={'Show me on Interact'}
            />
          </View>
          <View
            style={{
              height: 58,
              marginTop: 10,
              justifyContent: 'space-between',
              overflow: 'hidden',
              borderColor: COLORS.border_color,
              borderRadius: 15,
              borderWidth: 1,
              width: '100%',
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            <InteractParagraph
              p={'Show me on Interact'}
              Padding={15}
              Fontsize={14}
              colors={COLORS.primary}
            />
            <SwitchBtn />
          </View>
          <View style={{alignItems: 'center'}}>
            <InteractParagraph
              p={
                'Interact uses these preferences to suggest matches. Some match suggestions may not fall within your desired parameters.'
              }
              Fontsize={12}
              pWidth={'100%'}
              mt={10}
            />
          </View>
          <View
            style={{
              // justifyContent: 'center',
              // alignContent: 'center',
              // flexDirection: 'row',
              marginTop: '3%',
            }}>
            <ButtonComp
              btnwidth={'100%'}
              btnHeight={56}
              btnText={'Block Contacts'}
              color={'#E8E6EA'}
              mode={'outlined'}
              txtColor={COLORS.primary}
              justify={'center'}
              align={'center'}
              txtalign={'flex-start'}
              fontSize={16}
              radius={15}
              Borderwidth={1}
            />
          </View>
          <View>
            <Heading
              Stylefont={'normal'}
              Fontweight={'700'}
              Fontsize={20}
              txtAlign={'left'}
              mt={'5%'}
              Heading={'Theme Settings'}
            />
          </View>
          <View
            style={{
              height: 58,
              marginTop: 10,
              justifyContent: 'space-between',
              overflow: 'hidden',
              borderColor: COLORS.border_color,
              borderRadius: 15,
              borderWidth: 1,
              width: '100%',
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            <InteractParagraph
              p={'Dark Mode'}
              Padding={15}
              Fontsize={14}
              colors={COLORS.primary}
            />
            <ThemeSwitch />
          </View>
          <View>
            <Heading
              Stylefont={'normal'}
              Fontweight={'700'}
              Fontsize={20}
              txtAlign={'left'}
              mt={'5%'}
              Heading={'Read Receipt'}
            />
          </View>
          <View
            style={{
              justifyContent: 'flex-start',
              // padding: 10,
              marginTop: 10,
              paddingBottom: 10,
              paddingTop: 10,
              overflow: 'hidden',
              borderColor: COLORS.border_color,
              borderRadius: 15,
              borderWidth: 1,
              width: '100%',
              alignSelf: 'center',
            }}>
            <Heading
              Stylefont={'normal'}
              Fontweight={'700'}
              Fontsize={20}
              txtAlign={'left'}
              // ml={'10%'}
              Color={COLORS.primary}
              // mt={'5%'}
              p={10}
              Heading={'Manage Read Receipts'}
            />
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <ButtonComp
                mode={'text'}
                justify={'center'}
                align={'flex-start'}
                btnText={'Settings'}
                txtColor={
                  reducerData?.isDark?.isdark ? COLORS.white : COLORS.dark
                }
                fontStyle={'500'}
                fontSize={16}
              />
              <ButtonComp
                mode={'text'}
                justify={'center'}
                align={'center'}
                txtColor={
                  reducerData?.isDark?.isdark ? COLORS.white : COLORS.dark
                }
                iconSize={16}
                icon={'chevron-forward'}
              />
            </View>
          </View>
          <View>
            <Heading
              Stylefont={'normal'}
              Fontweight={'700'}
              Fontsize={20}
              txtAlign={'left'}
              mt={'5%'}
              Heading={'App Settings'}
            />
          </View>
          <View
            style={{
              justifyContent: 'flex-start',
              // padding: 10,
              marginTop: 10,
              paddingBottom: 10,
              paddingTop: 10,
              overflow: 'hidden',
              borderColor: COLORS.border_color,
              borderRadius: 15,
              borderWidth: 1,
              width: '100%',
              alignSelf: 'center',
            }}>
            <Heading
              Stylefont={'normal'}
              Fontweight={'700'}
              Fontsize={20}
              txtAlign={'left'}
              Color={COLORS.primary}
              p={10}
              Heading={'Notifications'}
            />
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <ButtonComp
                mode={'text'}
                justify={'center'}
                align={'flex-start'}
                btnText={'Email'}
                txtColor={
                  reducerData?.isDark?.isdark ? COLORS.white : COLORS.dark
                }
                fontStyle={'500'}
                fontSize={16}
              />
              <ButtonComp
                mode={'text'}
                justify={'center'}
                align={'center'}
                txtColor={
                  reducerData?.isDark?.isdark ? COLORS.white : COLORS.dark
                }
                iconSize={16}
                icon={'chevron-forward'}
              />
            </View>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <ButtonComp
                mode={'text'}
                justify={'center'}
                align={'flex-start'}
                btnText={'Push Notification'}
                txtColor={
                  reducerData?.isDark?.isdark ? COLORS.white : COLORS.dark
                }
                fontStyle={'500'}
                fontSize={16}
              />
              <ButtonComp
                mode={'text'}
                justify={'center'}
                align={'center'}
                txtColor={
                  reducerData?.isDark?.isdark ? COLORS.white : COLORS.dark
                }
                iconSize={16}
                icon={'chevron-forward'}
              />
            </View>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <ButtonComp
                mode={'text'}
                justify={'center'}
                align={'flex-start'}
                btnText={'Team Interact'}
                txtColor={
                  reducerData?.isDark?.isdark ? COLORS.white : COLORS.dark
                }
                fontStyle={'500'}
                fontSize={16}
              />
              <ButtonComp
                mode={'text'}
                justify={'center'}
                align={'center'}
                txtColor={
                  reducerData?.isDark?.isdark ? COLORS.white : COLORS.dark
                }
                iconSize={16}
                icon={'chevron-forward'}
              />
            </View>
          </View>
          <View>
            <Heading
              Stylefont={'normal'}
              Fontweight={'700'}
              Fontsize={20}
              txtAlign={'left'}
              mt={'5%'}
              Heading={'Show Distance in'}
            />
          </View>
          <View
            style={{
              // marginBottom: 50,
              justifyContent: 'flex-start',
              // padding: 10,
              marginTop: 10,
              paddingTop: 10,
              paddingBottom: 10,
              overflow: 'hidden',
              borderColor: COLORS.border_color,
              borderRadius: 15,
              borderWidth: 1,
              width: '100%',
              alignSelf: 'center',
            }}>
            <Heading
              Stylefont={'normal'}
              Fontweight={'700'}
              Fontsize={20}
              txtAlign={'center'}
              Color={COLORS.primary}
              mt={'5%'}
              p={10}
              Heading={'Mi'}
            />
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginLeft: 10,
                marginRight: 10,
              }}>
              <ButtonComp
                // btnwidth={'100%'}
                btnwidth={150}
                btnHeight={46}
                btnText={'Km.'}
                color={'#E8E6EA'}
                mode={'outlined'}
                txtColor={COLORS.primary}
                fontStyle={'700'}
                justify={'center'}
                align={'center'}
                fontSize={16}
                radius={15}
                Borderwidth={1}
              />
              <ButtonComp
                // btnwidth={'100%'}
                btnwidth={150}
                btnHeight={46}
                btnText={'Mi'}
                leftMargin={'2%'}
                txtColor={COLORS.white}
                fontStyle={'700'}
                justify={'center'}
                align={'center'}
                fontSize={16}
                radius={15}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeArea>
  );
}

export default Setting;
