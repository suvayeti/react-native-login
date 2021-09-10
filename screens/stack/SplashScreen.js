import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';

const SplashScreen = () => {
    return ( 
        <SafeAreaView>
            <Text>
                SplashScreen
            </Text>
            <Button
            title="Click here"
            onPress={()=>alert('Button Clicked')}
            />

            
        </SafeAreaView>
     );
}
 
export default SplashScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1 ,
        alignItems: 'center',
        justifyContent:'center',
    }
})