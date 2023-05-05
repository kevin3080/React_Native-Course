import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { BotonCalc } from '../components/BotonCalc';

export const CalculadoraScreen = () => {

  const [numero, setNumero] = useState('100');
  const [numeroSmall, setNumeroSmall] = useState('0');



  const limpiar = () => {
    setNumero('0')
  }

  const armarNumero = ( numeroTexto: string ) => {
    
    // No aceptar doble punto
    if( numero.includes('.') && numeroTexto === '.' ) { return };

    setNumero( numero + numeroTexto )
  }

  const positivoNegativo = () => {
    if( numero.includes('-') ) {
      setNumero( numero.replace('-', '') );
    }else{
      setNumero( '-' + numero );
    }
  }


  return (
    <View style={styles.calculadoraContainer}>
        <Text style={ styles.resultSmall }>{numeroSmall}</Text>
        <Text 
          style={ styles.result }
          numberOfLines={1}
          adjustsFontSizeToFit = { true }
        >
          {numero}
        </Text>

        {/* Fila de botones */}
        <View style={ styles.fila }>
          {/* Botones */}
          <BotonCalc texto="C" color="#9B9B9B" action={ limpiar }/>
          <BotonCalc texto="+/-" color="#9B9B9B" action={positivoNegativo}/>
          <BotonCalc texto="del" color="#9B9B9B" action={positivoNegativo}/>
          <BotonCalc texto="/" color="#FF9427" action={positivoNegativo}/>
        </View>
        
        {/* Fila de botones */}
        <View style={ styles.fila }>
          {/* Botones */}
          <BotonCalc texto="7" action={ armarNumero }/>
          <BotonCalc texto="8" action={ armarNumero }/>
          <BotonCalc texto="9" action={ armarNumero }/>
          <BotonCalc texto="X" color="#FF9427" action={positivoNegativo}/>
        </View>

        {/* Fila de botones */}
        <View style={ styles.fila }>
          {/* Botones */}
          <BotonCalc texto="4" action={ armarNumero }/>
          <BotonCalc texto="5" action={ armarNumero }/>
          <BotonCalc texto="6" action={ armarNumero }/>
          <BotonCalc texto="-" color="#FF9427" action={positivoNegativo}/>
        </View>

        {/* Fila de botones */}
        <View style={ styles.fila }>
          {/* Botones */}
          <BotonCalc texto="1" action={ armarNumero }/>
          <BotonCalc texto="2" action={ armarNumero }/>
          <BotonCalc texto="3" action={ armarNumero }/>
          <BotonCalc texto="+" color="#FF9427" action={positivoNegativo}/>
        </View>

        {/* Fila de botones */}
        <View style={ styles.fila }>
          {/* Botones */}
          <BotonCalc texto="0" action={ armarNumero } ancho={true}/>
          <BotonCalc texto="." action={ armarNumero }/>
          <BotonCalc texto="=" color="#FF9427" action={positivoNegativo}/>
        </View>


    </View>
  )
}
