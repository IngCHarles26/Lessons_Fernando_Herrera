import { AuthState, authInitialState } from "./AuthContext";

type AuthAction = 
 | {type: 'signIn'}
 | {type: 'logOut'}
 | {type: 'changeFavIcon', payload: string} 
 | {type: 'changeUserName', payload: string} 




export const authReducer = (state:AuthState, action:AuthAction):AuthState=>{

  switch(action.type){
    case "signIn":
        return {
          ...state,
          isLoggedIn: true,
          username: 'no-user-name-yet',
        }
      break;

    case "logOut":
        return {
          ...authInitialState
        }
      break;

    case "changeFavIcon":
        return{
          ...state,
          favoriteIcon: action.payload
        }
      break;

    case "changeUserName":
        return{
          ...state,
          username: action.payload
        }
      break;

    default:
      return state;
  }

  return state;
}