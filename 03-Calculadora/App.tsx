import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { styles } from './src/theme/appTheme';


const App = () => {
  return (
    <SafeAreaView style={ styles.font }>
      <StatusBar
        backgroundColor="black"
        barStyle='light-content'
      />

      <CalculadoraScreen/>
    </SafeAreaView>
  )
}

export default App;
