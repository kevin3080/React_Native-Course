import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Fab } from '../components/Fab';
import { BtnReset } from '../components/BtnReset';


export const ContadorScreen = () => {

    const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Contador: {contador}
      </Text>
      
      <Fab 
       title= '+1'
       position='br'
       onPress={() => setContador( contador + 1)}
      />

      <Fab 
       title= '-1'
       onPress={() => setContador( contador - 1)}
      />


      <BtnReset
        title='Reset'
        onPress={() => setContador( 0 )}
      />
      
    </View>
  )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      
    },
  
    title: {
      fontSize: 30,
      color: 'black',
      textAlign: 'center',
    },
  })
  
