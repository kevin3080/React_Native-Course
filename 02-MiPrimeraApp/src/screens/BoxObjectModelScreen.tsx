import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={ styles.container }>
        <Text style={ styles.title }>Box Object Model</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, // que se estire todo lo posible del padre
      backgroundColor: 'purple'
    },
    title: {
      padding: 30,
      borderColor: 'blue',
      fontSize: 20,
      borderWidth: 2,
    }
});


