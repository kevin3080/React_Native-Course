

// las interfaces solo sirven para ponerle
// nombre de validacion a sus objetos

interface Persona {
    nombreCompleto: string;
    edad: any;
    direccion: Direccion
}

interface Direccion {
    pais: string;
    casaNo: number;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: "kevin",
        edad: "22",
        direccion:{
            pais: "Colombia",
            casaNo: 456
        }
    }


  return (
    <>
        <h1>ObjetosLiterales</h1>
        <code>
            <pre>
                {JSON.stringify(persona, null, 2)}
            </pre>
        </code>
    </>
  )
}
