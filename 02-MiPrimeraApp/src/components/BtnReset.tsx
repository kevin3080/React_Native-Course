import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';


interface Props {
    title: string,
    onPress: () => void,
}



export const BtnReset = ({title, onPress}: Props) => {
  return (
    <View style={styles.btnResetContainer}>
        <TouchableOpacity
          style={styles.btnR}
          onPress={ onPress }
        >
          <View style={styles.btnViewTextReset}>
          <Text style={styles.textReset}>{title}</Text>
          </View>

        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    btnResetContainer:{
        marginTop: 10,
        width: '100%',
        height: '6%',
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      btnViewTextReset:{  
        alignSelf: 'center'
      },
    
      textReset: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
      },
    
      btnR: {
        backgroundColor: '#fd1d04',
        width: 300,
        height: 40,
        justifyContent: 'center',
        borderRadius: 50
      },
})