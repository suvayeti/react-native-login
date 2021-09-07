import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

const HomeStack=createStackNavigator();
const DetailsStack=createStackNavigator();

const Tab =createMaterialBottomTabNavigator();




const MainTabScreen=()=>{
    return (
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#fff"
          barStyle={{ backgroundColor: 'blue' }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarColor:"#1B5E20",
              tabBarIcon: ({ color }) => (
                <Icon name='home' color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={DetailsStackScreen}
            options={{
              tabBarLabel: 'Updates',
              tabBarColor:"#2E7D32",
              tabBarIcon: ({ color }) => (
                <Icon name='bell' color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarColor:"#388E3C",
              tabBarIcon: ({ color }) => (
                <Icon name='user' color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
              tabBarLabel: 'Explore',
              tabBarColor:"#43A047",
              tabBarIcon: ({ color }) => (
                <Icon name='search' color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      );

}

export default MainTabScreen;

const HomeStackScreen=({navigation})=>(
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#1B5E20'
      },
      headerTintColor:"#fafafa",
      headerTitleStyle:{
        fontWeight:'bold',
      }
    }}>
    <HomeStack.Screen  name="Home" component={HomeScreen} options={{
      title:"Overview",
      headerLeft: () =>(
        <Icon.Button name='ioxhost' size={25}
        backgroundColor='#1B5E20' onPress={()=> navigation.openDrawer()
        }
        ></Icon.Button>
      )
    }}
    />
  </HomeStack.Navigator>
  )
  const DetailsStackScreen=({navigation})=>(
    <DetailsStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#2E7D32'
      },
      headerTintColor:"#fafafa",
      headerTitleStyle:{
        fontWeight:'bold',
      }
    }}>
    <DetailsStack.Screen name="Details" component={DetailsScreen} 
    options={{
      title:"Our Details",
      headerLeft: () =>(
        <Icon.Button name='ioxhost' size={25}
        backgroundColor='#2E7D32' onPress={()=> navigation.openDrawer()
        }
        ></Icon.Button>
      )
      }}/>
  </DetailsStack.Navigator>
  )
  