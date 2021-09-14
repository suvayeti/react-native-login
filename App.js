import React, {useEffect, useState, useMemo, useReducer} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { AuthContext } from './components/context';

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
  // const [isLoading, setIsLoading]=useState(true);
  // const [userToken, setUserToken]=useState(null)

  const initialLoginState={
    isLoading:true,
    userName:null,
    userToken:null
  }
  const loginReducer =(prevState, action)=>{
    switch (action.type){
      case 'RETRIVE_TOKEN':
        return{
          ...prevState,
          userToken:action.token,
          isLoading:false,
        };
      case 'LOGIN':
        return{
          ...prevState,
          userName:action.id,
          userToken:action.token,
          isLoading:false,};
      case 'LOGOUT':
        return{
          ...prevState,
          userName:null,
          userToken:null,
          isLoading:false,};
      case 'REGISTER':
        return{
          ...prevState,
          userName:action.id,
          userToken:action.token,
          isLoading:false,
        };
      
    }
  }
  const [state, dispatch] =useReducer(loginReducer,initialLoginState)

  const authContext= useMemo(()=>({
    signIn: (userName, password)=>{
        // setUserToken('asdf');
        // setIsLoading(false);
        let userToken;
        userToken=null
        if(userName=='user' && password=='pass'){
          userToken='asdf'
        }
        // console.log("user Token: " , userToken)
        dispatch({type:"LOGIN", id:userName, token:userToken});
    },
    signOut: ()=>{
      // setUserToken(null);
      // setIsLoading(false);
      dispatch({type:"LOGOUT"});
    },
    signUp: ()=>{
      setUserToken('asdf');
      setIsLoading(false);
    },
  }),[])

  useEffect(()=>{
    setTimeout(()=>{
      // setIsLoading(false);
      let userToken="asdf"
      // console.log("user Token E: " , userToken)
      dispatch({type:"REGISTER", token:userToken});
    },1000)
  },[]);


  if(state.isLoading){
    return(
      <View style={styles.root}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.userToken!=null ? (
          <Drawer.Navigator drawerContent={props=><DrawerContent{...props}/>}>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen}/>
          <Drawer.Screen name="SupportScreen" component={SupportScreen}/> 
          <Drawer.Screen name="BookMarkScreen" component ={BookMarkScreen}/>
          <Drawer.Screen name="SettingScreen" component={SettingScreen} />
        </Drawer.Navigator>
        ) :
        <RootStackScreen/>
        }
        

      
      
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  root:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'orange'
  }
})

export default App;
