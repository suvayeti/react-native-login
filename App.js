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

const Drawer=createDrawerNavigator();
const Tabs = createMaterialBottomTabNavigator();



const App = () => {
  // const Stack=createStackNavigator();
  const Drawer=createDrawerNavigator();
  return (
    <NavigationContainer>

      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={MainTabScreen}/>
        {/* <Drawer.Screen name="Details" component={DetailsStackScreen}/> */}
      </Drawer.Navigator>

    </NavigationContainer>
    
  );
};



export default App;
