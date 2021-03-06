import React, {useState,useContext} from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView,TouchableOpacity, 
    Dimensions, Platform, TextInput, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from '../../components/context';



const SignInScreen = ({navigation}) => {

    const { signIn } =useContext(AuthContext)

    const [data, setData]=useState({
        email:'',
        password:'',
        isInputChanged:false,
        secureTextEntry:true
    })

    const textInputChange=(email)=>{
        if(email.length!=0){
            setData({
                ...data,email:email,
                isInputChanged:true
            })
        }else{
            setData({
                ...data,email:email,
                isInputChanged:false
            })
        }
    }

    const handlePasswordChange =(pass)=>{
        setData({
            ...data,
            password:pass
        })
    }

    const updateSecureTextEntry=()=>{
        // console.warn(data.password)
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry

        })
    }

    const loginHandle=(userName,password)=>{
        signIn(userName,password)
    }

    return ( 
        <View style ={styles.root}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            <View style={styles.header}>
            <Text style={styles.text_header}>
                Your Miles!!
            </Text>
            </View>
            <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}>
                <Text style={styles.text_footer}>
                    Email
                </Text>
                <View style={styles.action}>
                    <Icon
                        name="user"
                        color="#009387"
                    />
                    <TextInput 
                        placeholder="Enter your Email"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(email)=>textInputChange(email)}
                    />
                    {data.isInputChanged ? 
                    <Animatable.View
                        animation="bounceIn"
                    >
                    <Feather
                        name='check-circle'
                        color="green"
                        size={15}
                    />
                    </Animatable.View>
                    : null }
                </View>
                <Text style={[styles.text_footer, {marginTop:40}]}>Password</Text>
                <View style={styles.action}>
                    <Icon
                        name="lock"
                        color="#009387"
                    />
                    <TextInput 
                        placeholder="Enter your Password"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        onChangeText={(pass)=>handlePasswordChange(pass)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ? 
                        <Feather
                            name='eye-off'
                            color="grey"
                            size={15}
                        />
                        :
                        <Feather
                            name='eye'
                            color="grey"
                            size={15}
                        />
                        }
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={{color:"#009387", marginTop:15}}>Forgot Password</Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={()=>{loginHandle(data.email, data.password)}}
                    >
                    <LinearGradient
                         colors ={['#FFB300', '#FF6F00']}
                         style={styles.signIn}
                     >
                    
                        <Text style={[styles.textSign],{color:"#fff"}}>Sign In</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('SignUpScreen')}
                        style={[styles.signIn,{
                            borderColor:'#FF6F00',
                            borderWidth:1,
                            marginTop:15
                        }]}
                    >
                        <Text style={[styles.textSign,{
                            color:'#FF6F00'
                        }]}>Sign Up</Text>
                    </TouchableOpacity>

                </View>
            </Animatable.View>

            
            
        </View>
     );
}
 
export default SignInScreen;

const styles = StyleSheet.create({
    root:{
        flex: 1 ,
        backgroundColor:'orange'
    },
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:50
    },
    footer:{
        flex:3,
        backgroundColor:"#fff",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:30
    },
    text_header:{
        color:"#009387",
        fontWeight:'bold',
        fontSize:30,
    },
    text_footer:{
        color:"#05375a",
        fontSize:18
    },
    action:{
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        paddingBottom:5
    },
    textInput:{
        flex:1,
        marginTop:Platform.OS =='ios' ? 0 : -12,
        paddingLeft:10,
        color:'#05375a',
    },
    button:{
        alignItems:'center',
        marginTop:50
    },
    signIn:{
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    textSign:{
        fontSize:18,
        fontWeight:'bold'
    }

})