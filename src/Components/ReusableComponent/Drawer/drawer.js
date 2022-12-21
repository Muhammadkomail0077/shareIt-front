import * as React from 'react';
import {Image, View} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import InteractAvatar from '../Avatar';
import Heading from '../Heading';
import InteractParagraph from '../Paragraph';
import {Divider, List} from 'react-native-paper';
import COLORS from 'src/Assets/Style/Color';
import FONT from 'src/Assets/Style/Font';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

export default function CustomDrawerContent({navigation}) {
  const emptyIcon = () => null;
  const [tap, setTap] = React.useState(false);
  const [tap1, setTap1] = React.useState(false);
  const [tap2, setTap2] = React.useState(false);
  const [tap3, setTap3] = React.useState(false);
  const [expand, setExpand] = React.useState(false);
  const [expand1, setExpand1] = React.useState(false);
  const [expand2, setExpand2] = React.useState(false);
  const [expand3, setExpand3] = React.useState(false);
  const reducerData = useSelector(state => state);

  // React.useEffect(() => {
  //     if(tap === true){

  //     }
  // },[])

  const tapper = () => {
    if (tap === false) {
      console.log('trye');
      setTap(true);
      setExpand(true);
      setExpand1(false);
      setExpand2(false);
      setExpand3(false);
      if (expand1 || expand2 || expand3) {
        setTap1(false);
        setTap2(false);
        setTap3(false);
      }
    } else if (tap === true) {
      setTap(false);
      setExpand(false);
    }
  };
  const tapper1 = () => {
    if (tap1 === false) {
      console.log('true');
      setTap1(true);
      setExpand1(true);
      setExpand(false);
      setExpand2(false);
      setExpand3(false);
      if (expand || expand2 || expand3) {
        setTap(false);
        setTap2(false);
        setTap3(false);
      }
    } else if (tap1 === true) {
      console.log('false');
      setTap1(false);
      setExpand1(false);
    }
  };
  const tapper2 = () => {
    if (tap2 === false) {
      setTap2(true);
      setExpand2(true);
      setExpand(false);
      setExpand1(false);
      setExpand3(false);
      if (expand || expand1 || expand3) {
        setTap(false);
        setTap1(false);
        setTap3(false);
      }
    } else if (tap2 === true) {
      setTap2(false);
      setExpand2(false);
    }
  };
  const tapper3 = () => {
    if (tap3 === false) {
      setTap3(true);
      setExpand3(true);
      setExpand(false);
      setExpand1(false);
      setExpand2(false);
      if (expand || expand1 || expand2) {
        setTap(false);
        setTap2(false);
        setTap1(false);
      }
    } else if (tap3 === true) {
      setTap3(false);
      setExpand3(false);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: reducerData?.isDark?.isdark
          ? COLORS.darkMode
          : COLORS.bgcolor,
      }}>
      <DrawerContentScrollView>
        <View style={{padding: 20, marginTop: '5%', flexDirection: 'row'}}>
          <InteractAvatar
            size={80}
            // src={require('src/Assets/Images/avatar.png')}
          />
          <View>
            <Heading
              Fontweight={'700'}
              Fontsize={20}
              txtAlign={'center'}
              // p={10}
              mt={'10%'}
              ml={'5%'}
              Heading={'David Peterson'}
            />
            <InteractParagraph ml={'5%'} p={'@davidpeter'} />
          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Divider
            style={{
              width: '80%',
              borderColor: COLORS.primary,
              shadowColor: COLORS.dark,
              borderWidth: 1,
            }}
          />
        </View>
        <View style={{paddingTop: 10, marginLeft: '10%'}}>
          <DrawerItem
            //   style={{color:'#fff'}}
            label={'Profile'}
            labelStyle={{
              color: reducerData?.isDark?.isdark ? COLORS.white : COLORS.dark,
              fontWeight: 'normal',
            }}
            onPress={() => navigation.navigate('edit')}
          />

          <DrawerItem
            label={'Change Password'}
            labelStyle={{
              color: reducerData?.isDark?.isdark ? COLORS.white : COLORS.dark,
              fontWeight: 'normal',
            }}
            onPress={() => navigation.navigate('changePass')}
          />
          {/* <DrawerItem 
        label={'Payment Methods'} 
        /> */}
          {/* <TouchableOpacity onPress={tapper} activeOpacity={1}> */}
          {/* <List.AccordionGroup  onAccordionPress={tapper} > */}
          <List.Accordion
            onPress={tapper}
            expanded={expand}
            style={{
              backgroundColor: reducerData?.isDark?.isdark
                ? COLORS.darkMode
                : COLORS.bgcolor,
            }}
            titleStyle={
              tap
                ? {
                    fontFamily: FONT.pop,
                    fontWeight: '700',
                    fontSize: 14,
                    color: reducerData?.isDark?.isdark
                      ? COLORS.white
                      : COLORS.dark,
                  }
                : {
                    fontFamily: FONT.pop,
                    fontSize: 14,
                    color: reducerData?.isDark?.isdark
                      ? COLORS.white
                      : COLORS.txt_color,
                  }
            }
            right={emptyIcon}
            title="Payment Methods"
            id="1">
            <List.Item
              titleStyle={{fontSize: 12, marginLeft: 25, color: COLORS.primary}}
              title="Manage Payment Account"
            />
            <List.Item
              titleStyle={{fontSize: 12, marginLeft: 25, color: COLORS.primary}}
              title="Restore Purchase"
            />
          </List.Accordion>
          {/* </List.AccordionGroup> */}
          {/* </TouchableOpacity> */}
          <DrawerItem
            labelStyle={{
              color: reducerData?.isDark?.isdark ? COLORS.white : COLORS.dark,
              fontWeight: 'normal',
            }}
            label={'Settings'}
            onPress={() => navigation.navigate('setting')}
          />
          {/* <TouchableOpacity onPress={tapper1} activeOpacity={1}> */}

          <List.Accordion
            style={{
              backgroundColor: reducerData?.isDark?.isdark
                ? COLORS.darkMode
                : COLORS.bgcolor,
            }}
            expanded={expand1}
            onPress={tapper1}
            titleStyle={
              tap1
                ? {
                    fontFamily: FONT.pop,
                    fontWeight: '700',
                    fontSize: 14,
                    color: reducerData?.isDark?.isdark
                      ? COLORS.white
                      : COLORS.dark,
                  }
                : {
                    fontFamily: FONT.pop,
                    fontSize: 14,
                    color: reducerData?.isDark?.isdark
                      ? COLORS.white
                      : COLORS.txt_color,
                  }
            }
            right={emptyIcon}
            title="Contact Us"
            id="2">
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate('help')}>
              <List.Item
                titleStyle={{
                  fontSize: 12,
                  marginLeft: 25,
                  color: COLORS.primary,
                }}
                title="Help & Support"
              />
            </TouchableOpacity>
          </List.Accordion>

          {/* </TouchableOpacity> */}
          <List.Accordion
            onPress={tapper2}
            expanded={expand2}
            style={{
              backgroundColor: reducerData?.isDark?.isdark
                ? COLORS.darkMode
                : COLORS.bgcolor,
            }}
            titleStyle={
              tap2
                ? {
                    fontFamily: FONT.pop,
                    fontWeight: '700',
                    fontSize: 14,
                    color: reducerData?.isDark?.isdark
                      ? COLORS.white
                      : COLORS.dark,
                  }
                : {
                    fontFamily: FONT.pop,
                    fontSize: 14,
                    color: reducerData?.isDark?.isdark
                      ? COLORS.white
                      : COLORS.txt_color,
                  }
            }
            right={emptyIcon}
            title="Community"
            id="3">
            <List.Item
              titleStyle={{fontSize: 12, marginLeft: 25, color: COLORS.primary}}
              title="Community Guidelines"
            />
          </List.Accordion>

          {/* <TouchableOpacity onPress={tapper3} activeOpacity={1}> */}
          {/* <List.AccordionGroup > */}
          <List.Accordion
            onPress={tapper3}
            expanded={expand3}
            style={{
              backgroundColor: reducerData?.isDark?.isdark
                ? COLORS.darkMode
                : COLORS.bgcolor,
            }}
            titleStyle={
              tap3
                ? {
                    fontFamily: FONT.pop,
                    fontWeight: '700',
                    fontSize: 14,
                    color: reducerData?.isDark?.isdark
                      ? COLORS.white
                      : COLORS.dark,
                  }
                : {
                    fontFamily: FONT.pop,
                    fontSize: 14,
                    color: reducerData?.isDark?.isdark
                      ? COLORS.white
                      : COLORS.txt_color,
                  }
            }
            right={emptyIcon}
            title="Privacy"
            id="3">
            <List.Item
              titleStyle={{fontSize: 12, marginLeft: 25, color: COLORS.primary}}
              title="Cookie Policy"
            />
            <List.Item
              titleStyle={{fontSize: 12, marginLeft: 25, color: COLORS.primary}}
              title="Privacy Policy"
            />
            <List.Item
              titleStyle={{fontSize: 12, marginLeft: 25, color: COLORS.primary}}
              title="Privacy Preferences"
            />
          </List.Accordion>
          {/* </List.AccordionGroup> */}
          {/* </TouchableOpacity> */}
          <DrawerItem
            labelStyle={{
              color: reducerData?.isDark?.isdark ? COLORS.white : COLORS.dark,
              fontWeight: 'normal',
            }}
            label={'Legal'}
          />
          <DrawerItem
            labelStyle={{
              color: reducerData?.isDark?.isdark ? COLORS.white : COLORS.dark,
              fontWeight: 'normal',
            }}
            label={'Logout'}
          />
          <DrawerItem
            label={'Delete Account'}
            labelStyle={{fontWeight: '700', color: 'red'}}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10%',
            marginBottom: '10%',
          }}>
          <Image
            source={require('src/Assets/Images/logo.png')}
            style={{width: 60, height: 60}}
          />
          <InteractParagraph p={'Version 0.0.123.021'} Fontsize={12} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
