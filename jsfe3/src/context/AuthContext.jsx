import { createContext, useReducer } from 'react';
// import Auth from '../../../../be/jsSrv/controllers/auth';

export const AuthContext = createContext();

export const authReducer = (state, action) =>{
    switch (action.type) {
        // case 'LOGIN':
        case 'matches':
            // return { user: action.payload };
            return { root: action.payload };
        // case 'LOGOUT':
        case 'login':
            // return {user:null};
            return {root:'login'};
        default:
            return state;
    }
}

export const AuthContextProvider = ({children}) => {
    const [state, dispatch]= useReducer(authReducer, {
        user: null,
    })

    console.log(`AuthContext state: ${state}`);

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}