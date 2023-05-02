import React, { useEffect, useReducer } from 'react'

interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}

const initialState = {
    validando: true,
    token: null,
    username: '',
    nombre: '',
}

type LoginPayload = {
    username: string;
    nombre: string;
}

type AuthAction = 
   | { type: 'Logout' }
   | { type: 'login', payload: LoginPayload };

const authReducer = (state:AuthState, action:AuthAction):AuthState => {

    switch (action.type) {
        case 'Logout':
          return{
            validando: false,
            token: null,
            nombre: '',
            username: ''
          }


        case 'login':
            const {nombre, username} = action.payload;
            return {
                validando: false,
                token: 'ABC123',
                nombre,
                username,
                //nombre: action.payload.nombre,
                //username: action.payload.username
            }
    
        default:
            return state;
    }

}

export const Login = () => {

    const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
      setTimeout(()=> {
        dispatch({type: 'Logout'})
      }, 1500);
    }, []);

    const login = () => {
        dispatch({
            type: 'login', 
            payload: {
                nombre: 'Kevin Pernia',
                username: 'skyrim07',
        }})
    }

    const logout = () => {
        dispatch({
            type: 'Logout'
        })
    }


    if(validando){
        return (
            <>
                 <h3>login</h3>

                <div className='alert alert-info'>
                    Validando...
                </div>
            </>
        )
    }
    

  return (
    <>
        {
            ( token )
                ? <div className='alert alert-success'>
                    Autenticado como: {nombre}. Bienvenido :)
                  </div>
                : <div className='alert alert-danger'>
                    No autenticado
                  </div>
        }

        {
            (token)
                ?
                 <button
                    className='btn btn-danger'
                    onClick={logout}
                  >
                   Logout
                  </button>
                :
                 <button
                    className='btn btn-primary'
                    onClick={login}
                  >
                    Login
                  </button>
        }
       

        

        &nbsp; 

        
    </>
  )
}
