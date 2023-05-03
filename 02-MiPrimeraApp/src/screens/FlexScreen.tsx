import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
  return (
    <View style={ styles.container }>
        <Text style={ styles.caja1 }>caja1</Text>
        <Text style={ styles.caja2 }>caja2</Text>
        <Text style={ styles.caja3 }>caja3</Text>
       
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#28C4D9',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    caja1:{     
       /*  flex: 4, */
        borderWidth: 2,
        borderColor: 'white',
    },
    caja2:{
        /* flex: 4, */
        borderWidth: 2,
        borderColor: 'white',
    },
    caja3:{

        /* flex: 2, */
        borderWidth: 2,
        borderColor: 'white',
    },
});
