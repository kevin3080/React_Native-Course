import React from 'react'
import { useState } from 'react';

export const useCounter = ( initial:number = 0 ) => {
  
    const [valor, setValor] = useState<number>(initial)

  const acumular = (numero: number) => {
    setValor(valor + numero);
  }

  return{
    acumular,
    valor,
  }

}
