import { ucs2 } from "punycode";
import { useEffect, useReducer } from "react";

interface AuthState{
  validando: boolean,
  token: string | null,
  username: string,
  nombre: string
}

type LoginActionPayload = {
  username: string,
  name: string,
}

type AuthAction = 
  | { type: 'logout'} 
  | { type: 'login' , payload: LoginActionPayload}

const initialState:AuthState = {
  validando: true,
  token: null,
  username: '',
  nombre: '',
};

const authReducer = ( state:AuthState , action:AuthAction ):AuthState => {
  switch (action.type){
    case 'logout':
        return{
          ...state,
          validando: false,
          token: null,
        }
      break;
    case 'login':
        return {
          ...state,
          token: 'ABCD',
          nombre: action.payload.name,
          username: action.payload.username,
        }
      break;
  }
}


function Login() {
  const [state,dispatch] = useReducer(authReducer,initialState);

  useEffect(()=>{
    setTimeout(()=>{
      dispatch({type:'logout'})
    },1500)
  },[])

  const login = () => dispatch({type:'login', payload: {name:'Carlos', username:'IngCharles26'}})

  const logout = () => dispatch({type: 'logout'})

  if(state.validando){
    return(
      <>
        <h3>Login</h3>
        <div className="alert alert-info">
          Validando...
        </div>
      </>
    )
  }


  return ( 
    <>
      <h3>Login</h3>

      {
        (state.token) 
          ? 
            <>
              <div className="alert alert-success">Autenticado</div>
              <button className="btn btn-danger" onClick={logout}> Logout </button>
            </>
          : 
            <>
              <div className="alert alert-danger">No autenticado</div>
              <button className="btn btn-primary" onClick={login}> Login </button>
            </>
      }
    </>
  );
}

export default Login;