import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';

const SignInScreen = () => {
    return ( 
        <SafeAreaView style ={styles.root}>
            <Text>
                SignInScreen
            </Text>
            <Button
            title="Click here"
            onPress={()=>alert('Button Clicked')}
            />

            
        </SafeAreaView>
     );
}
 
export default SignInScreen;

const styles = StyleSheet.create({
    root:{
        flex: 1 ,
        alignItems: 'center',
        justifyContent:'center',
    }
})