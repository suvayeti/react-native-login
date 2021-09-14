import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, Dimensions,Image, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const logo = require('../../logo.png')
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as Animatable from 'react-native-animatable'



const SplashScreen = ({navigation}) => {
    return ( 
        <View style ={styles.root}>
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duration={1500}
                source={logo} 
                style={styles.logo}
                resizeMode='stretch'
                />
                <Text>More Smiles on Subi's Iphone</Text>
                <Text>This is Subriti's Iphone</Text>
            </View>
            <Animatable.View style={styles.footer}
            animation="fadeInUpBig"
            >
                <Text style={styles.title}>Miles of Smiles</Text>
                <Text style={styles.footer}>Sign in with your account</Text>
                <View style={styles.button}>
                <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                    <LinearGradient
                        colors ={['#FFB300', '#FF6F00']}
                        style={styles.signIn}
                    >

                        <Text style={styles.textSign}>Get Stated</Text>
                        <Icon
                            name="location-arrow"
                            color="#fff"
                            size={20}
                        />
                    </LinearGradient>
                </TouchableOpacity>
                </View>
            </Animatable.View>
            
        </View>
     );
}
 
export default SplashScreen;
const {height}= Dimensions.get("screen")
const logo_height=height *.3

const styles = StyleSheet.create({
    root:{
        flex: 1 ,
        backgroundColor: 'orange',
        
    },
    header:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    footer:{
        flex:1,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30
    },
    logo:{
        width:logo_height*1.2,
        height:logo_height
    },
    title:{
        color:'#05375a',
        fontSize:30,
        fontWeight:'bold',
        ...Platform.select({
            ios:{
                fontFamily:'AvenirNext-Regular'
            },
            android:{
                fontFamily:'Roboto'
            }
        })
    },
    text:{
        color:'grey',
        marginTop:5,
    },
    button:{
        alignItems:'flex-end',
        marginTop:30
    },

    signIn:{
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection:'row'
    },
    textSign:{
        color:'white',
        fontWeight:'bold'
    }
    

})