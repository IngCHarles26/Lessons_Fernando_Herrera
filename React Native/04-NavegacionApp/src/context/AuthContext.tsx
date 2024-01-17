import { createContext, useReducer } from "react"
import { authReducer } from "./AuthReducer"
//Pasos parar crear el contexto de la aplicacion


// 01. definir como luce, que informacion voya  tener
export interface AuthState{
  isLoggedIn: boolean,
  username?: string,
  favoriteIcon?: string,
}


// 02. definir el estado inicial
export const authInitialState:AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
}


// 03. definir como va a lucir el context
export interface AuthContextProps{
  authState: AuthState,
  signIn: ()=>void,
  logOut: ()=>void,
  changeFavoriteIcon: (iconName:string)=>void,
  changeUserName: (userName:string)=>void,
}


// 04. crear el contexto
export const AuthContext = createContext({} as AuthContextProps)


// 04. crear el componente proveedor del estado
export const AuthProvider = ({children}:any)=>{
  
  const [authState,dispatch] = useReducer(authReducer,authInitialState)

  const signIn = ()=> {
    dispatch({type: "signIn"})
  }
  
  const logOut = ()=> {
    dispatch({type:'logOut'})
  }

  const changeFavoriteIcon = (iconName:string)=>{
    dispatch({type:'changeFavIcon',payload:iconName})
  }

  const changeUserName = (userName:string)=>{
    dispatch({type:'changeUserName',payload:userName})
  }


  return(
    <AuthContext.Provider value={{
      authState,
      signIn,
      changeFavoriteIcon,
      logOut,
      changeUserName
    }}>
      {
        children
      }
    </AuthContext.Provider>
  )
}
