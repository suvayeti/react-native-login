import React from 'react';
import { SafeAreaView ,Text,StyleSheet, Button} from 'react-native';

const DetailsScreen = ({navigation}) => {
    return ( 
        <SafeAreaView style={styles.root}> 
            <Text>I am Details screen!</Text>
            <Button color="red" title="Go to Home (navigate)"
            onPress={()=>{
                navigation.navigate('Home')
            }}
            />
            <Button title="Go to Home(push)"
            onPress={()=>{
                navigation.push('Home')
            }}
            />
            <Button title="Go to Home (goBack)"
            onPress={()=>{
                navigation.goBack()
            }}
            />
        </SafeAreaView>
     );
}
 

const styles=StyleSheet.create({
    root:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    button:{
        backgroundColor:'red'
    }
  })


export default DetailsScreen;