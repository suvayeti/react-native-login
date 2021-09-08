import React from 'react';
import { SafeAreaView ,Text,StyleSheet, Button} from 'react-native';

const SupportScreen = (props) => {
    return ( 
        <SafeAreaView style={styles.root}> 
            <Text>I am Support screen!</Text>
            <Button title="Go to Details"
            onPress={()=>alert('Button Clicked')}
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


export default SupportScreen;