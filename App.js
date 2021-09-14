import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



import Icon from 'react-native-vector-icons/FontAwesome'
import MainTabScreen from './screens/stack/MainTabScreen';

import DrawerContent from './screens/stack/DrawerContent';
import SupportScreen from './screens/stack/SupportScreen';
import BookMarkScreen from './screens/stack/BookMarkScreen';
import SettingScreen from './screens/stack/SettingScreen';

import RootStackScreen from './screens/stack/RootStackScreen';

const Drawer=createDrawerNavigator();
const Tabs = createMaterialBottomTabNavigator();



const App = () => {
  // const Stack=createStackNavigator();
  const Drawer=createDrawerNavigator();
  return (
  
    <NavigationContainer>
      <RootStackScreen/>

      {/* <Drawer.Navigator drawerContent={props=><DrawerContent{...props}/>}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen}/>
        <Drawer.Screen name="SupportScreen" component={SupportScreen}/> 
        <Drawer.Screen name="BookMarkScreen" component ={BookMarkScreen}/>
        <Drawer.Screen name="SettingScreen" component={SettingScreen} />
      </Drawer.Navigator> */}
     
    </NavigationContainer>
    
  );
};



export default App;
