import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import {
    Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch 
} from 'react-native-paper'

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome'

import { AuthContext } from '../../components/context';
import { useContext } from 'react/cjs/react.development';



const DrawerContent = (props) => {

    const {signOut} =useContext(AuthContext)

    const [isDarkTheme, setIsDarkTheme]=useState(false);
    const toggleTheme=()=>{
        setIsDarkTheme(!isDarkTheme)
    }

    return ( 
        <SafeAreaView style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.DrawerContent}>
                    <View style={styles.infoSection}>
                        <View style={{flexDirection:'row', marginTop:15}}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://res.cloudinary.com/suva/image/upload/v1617988196/wmpyfnbklz7io8zfacdp.jpg'
                                }}
                                size={50}
                            />
                            <View style={{marginLext:15, flexDirection:'column'}}> 
                                <Title style={styles.title}>Suvash Sharma</Title>
                            
                            <Caption style={styles.caption}>@Suvash</Caption>
                            </View>
                            </View>

                            <View style={styles.row}>
                                    <View style={styles.section}>
                                        <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                        <Caption style={styles.caption}>Following</Caption>
                                    </View>
                                    <View style={styles.section}>
                                        <Paragraph style={[styles.paragraph, styles.caption]}>800</Paragraph>
                                        <Caption style={styles.caption}>Followers</Caption>
                                    </View>
                            </View>

                        </View>

                        <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color,size})=>(
                                <Icon
                                    name="home"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Home'
                            onPress={()=>{props.navigation.navigate('Home')}}                        />
                        <DrawerItem
                            icon={({color,size})=>(
                                <Icon
                                    name="rocket"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Update'
                            onPress={()=>{props.navigation.navigate('SettingScreen')}}
                        />
                        <DrawerItem
                            icon={({color,size})=>(
                                <Icon
                                    name="user-circle"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Profile'
                            onPress={()=>{props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem
                            icon={({color,size})=>(
                                <Icon
                                    name="id-badge"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='BookMark'
                            onPress={()=>{props.navigation.navigate('BookMarkScreen')}}   
                        />
                        <DrawerItem
                            icon={({color,size})=>(
                                <Icon
                                    name="wrench"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label='Support/Explore'
                            onPress={()=>{props.navigation.navigate('SupportScreen')}} 
                            />
                        </Drawer.Section>
                        <Drawer.Section title="Preferences">
                                <TouchableRipple onPress={()=>{toggleTheme()}}>
                                    <View style={styles.preference}>
                                        <Text>Dark Theme</Text>
                                        <View pointerEvents="none">
                                        <Switch value={isDarkTheme}/>
                                        </View>
                                    </View>
                                </TouchableRipple>

                        </Drawer.Section>

                    </View>

            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color,size})=>(
                        <Icon
                            name="sign-out"
                            color={color}
                            size={size}
                        />
                    )}
                    label='Sign Out'
                    onPress={()=>signOut()}
                />

            </Drawer.Section>
        </SafeAreaView>
     );
}


const styles=StyleSheet.create({
    content:{
        flex:1
    },
    infoSection:{
        paddingLeft:20,
    },
    title:{
        marginTop:3,
        fontWeight:'bold',
        fontSize:15,
    },
    caption:{
        fontSize:14,
        lineHeight:14
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center'
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15,
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3,
    },
    drawerSection:{
        marginTop:15
    },
    bottomDrawerSection:{
        marginBottom:20,
        borderTopColor:"#fafafa",
        borderTopWidth:1
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16,
    },

})
 
export default DrawerContent;