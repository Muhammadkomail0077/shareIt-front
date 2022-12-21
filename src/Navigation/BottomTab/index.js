import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from 'src/Assets/Style/Color';
import {useSelector} from 'react-redux';
import MainScreen from '../../BottomScreens/MainScreen';
import Matches from '../../BottomScreens/Matches';
import MoreEvents from '../../Screens/MoreEvents';
import Events from '../../BottomScreens/Events';
import MainSetting from '../../BottomScreens/Settings';
import TinderCard from '../../BottomScreens/Card';
import Delete from '../../BottomScreens/Delete';
import DeleteDetails from '../../BottomScreens/deleteDetails';

const Tab = createBottomTabNavigator();

export default function BottomTab({navigation}) {
  const [mark, setMark] = React.useState(false);
  const reducerData = useSelector(state => state);

  return (
    <> 
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;
            let width;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
              // width = focused ?
            } else if (route.name === 'Events') {
              iconName = focused ? 'calendar-month' : 'calendar-month-outline';
              // mark = focused ? setMark(true):setMark(false)
              // focused ? setMark == true : setMark == false
            } else if (route.name === 'Families') {
              iconName = focused ? 'cards-heart' : 'cards-heart-outline';
            } else if (route.name === 'Mainsettings') {
              iconName = focused ? 'segment' : 'segment';
            }
            return (
              <View
                style={
                  focused
                    ? {
                        borderTopColor: COLORS.primary,
                        borderTopWidth: 2,
                        flex: 1,
                        width: '60%',
                      }
                    : {
                        borderTopColor: COLORS.primary,
                        borderTopWidth: 0,
                        flex: 1,
                        width: '60%',
                      }
                }>
                <Icon
                  name={iconName}
                  style={{top: 10, textAlign: 'center'}}
                  size={28}
                  color={focused ? COLORS.primary : 'grey'}
                />
              </View>
            );
          },
          tabBarActiveTintColor: COLORS.primary,
          // tabBarInactiveTintColor: 'coral',
          // tabBarInactiveTintColor: '',
          tabBarShowLabel: false,

          tabBarItemStyle: mark
            ? {
                borderTopWidth: 2,
                borderTopColor: COLORS.primary,
              }
            : {
                backgroundColor: reducerData?.isDark?.isdark
                  ? COLORS.darkMode
                  : COLORS.bgcolor,
              },

          // headerTintColor:COLORS.primary
        })}>
        <Tab.Screen
          options={{headerShown: false}}
          name="Home"
          component={MainScreen}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="Events"
          component={Events}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="Families"
          component={Matches}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="Mainsettings"
          component={MainSetting}
        />
        <Tab.Screen
          options={{headerShown: false, tabBarItemStyle: {display: 'none'}}}
          name="MoreEvent"
          component={MoreEvents}
        />
        <Tab.Screen
          options={{headerShown: false, tabBarItemStyle: {display: 'none'}}}
          name="tinder"
          component={TinderCard}
        />
        <Tab.Screen
          options={{headerShown: false, tabBarItemStyle: {display: 'none'}}}
          name="delete"
          component={Delete}
        />
        <Tab.Screen
          options={{headerShown: false, tabBarItemStyle: {display: 'none'}}}
          name="details"
          component={DeleteDetails}
        />
      </Tab.Navigator>
    </>
  ); 
}
