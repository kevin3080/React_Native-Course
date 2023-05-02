import React from 'react'
import { StyleSheet, View } from 'react-native'

export const PositionScreen = () => {
  return (
    <View style={ styles.container }>
        <View style={ styles.cajaVerde }/>
        <View style={ styles.cajaMorada }/>
        <View style={ styles.cajaNaranja }/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: { // elemento padre
       /*  justifyContent: 'center',
        alignItems: 'center', */
        flex: 1,
        backgroundColor: '#28C4D9',
       /*  borderWidth: 80, */
       /*  borderColor: 'orange' */
    },

    cajaNaranja:{
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
       /*  top: -50, // todos los objetos estan siempre en posicion relativa al padre */
        position: 'absolute',
        bottom: 0,
        right: 0,
    },

    cajaMorada:{
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    cajaVerde:{
        /* width: 100,
        height: 100, */
        backgroundColor: 'green',
        /* borderWidth: 10, */
        borderColor: 'white',
       /*  position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0, */
        ...StyleSheet.absoluteFillObject // esto es un shortcut para poner un objeto absoluto y los las posicion right, left, top y buttom en 0
    }
});
