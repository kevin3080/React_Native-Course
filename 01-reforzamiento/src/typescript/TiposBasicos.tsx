import React from 'react'

export const TiposBasicos = () => {

    let nombre: string | number | boolean= "Fernando";
    nombre = 123;
    const edad: number = 35;



  return (
    <>
        <h3>Tipos basicos</h3>
        {nombre}
    </>
  )
}
