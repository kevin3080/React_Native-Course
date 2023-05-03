import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    texto: string;
    color?: string;
}


export const BotonCalc = ({ texto, color = '#2D2D2D' }: Props) => {
  return (
    <View style={{
        ...styles.boton,
        backgroundColor: color
        
    }}>
        <Text style={styles.botonTexto}>{texto}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    boton: {
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300'
    }
});