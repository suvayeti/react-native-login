import React from 'react';
import { SafeAreaView ,Text,StyleSheet, Button} from 'react-native';

const HomeScreen = (props) => {
    return ( 
        <SafeAreaView style={styles.root}> 
            <Text>I am home screen!</Text>
            <Button title="Go to Details"
            onPress={()=>{
                props.navigation.navigate("Details")
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
    }
  })


export default HomeScreen;