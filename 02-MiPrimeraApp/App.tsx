import React from 'react'
import {Text, View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
// import { ContadorScreen } from './src/screens/ContadorScreen';
//import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
//import { DimencionesScreen } from './src/screens/DimencionesScreen';
//import { PositionScreen } from './src/screens/PositionScreen';
//import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';



const App = () => {


 

  return (
    <SafeAreaView style={{ flex: 1, }}>
      {/* estamos en el nivel superior, flex: 1 tomara toda la pantalla */}
      {/* <ContadorScreen/> */}
      {/* <BoxObjectModelScreen/> */}
      {/* <DimencionesScreen/> */}
      {/* <PositionScreen/> */}
      {/* <FlexScreen/> */}
      <TareaScreen/>

    </SafeAreaView>

  )
   
}

export default App;