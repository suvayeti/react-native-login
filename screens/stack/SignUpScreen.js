import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';

const SignUpScreen = () => {
    return ( 
        <SafeAreaView style ={styles.root}>
            <Text>
                SignUpScreen
            </Text>
            <Button
            title="Click here"
            onPress={()=>alert('Button Clicked')}
            />

            
        </SafeAreaView>
     );
}
 
export default SignUpScreen;

const styles = StyleSheet.create({
    root:{
        flex: 1 ,
        alignItems: 'center',
        justifyContent:'center',
    }
})