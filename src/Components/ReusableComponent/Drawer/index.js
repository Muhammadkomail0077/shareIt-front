import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from 'src/DrawerScreens/MainScreen/';
import FONT from 'src/Assets/Style/Font';
import CustomDrawerContent from './drawer';
import Setting from 'src/DrawerScreens/Setting';
import EditProfile from 'src/Screens/EditProfile';
import Help from 'src/Screens/Help&Support';
import ChangePassword from 'src/Screens/ChangePassword';

const Drawer = createDrawerNavigator();

export default function InteractDrawer() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="home"
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{headerShown: false, drawerStyle: {}}}>
        <Drawer.Screen
          name="home"
          component={HomeScreen}
          options={{
            title: 'Home',
            drawerActiveTintColor: '#000',
            drawerActiveBackgroundColor: 'transparent',
            drawerLabelStyle: {fontFamily: FONT.pop},
          }}
        />
        <Drawer.Screen name="setting" component={Setting} />
        <Drawer.Screen name="edit" component={EditProfile} />
        <Drawer.Screen name="help" component={Help} />
        <Drawer.Screen name="changePass" component={ChangePassword} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
