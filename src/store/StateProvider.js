import React, {createContext, useContext, useReducer} from "react"

// prepares the data layer
export const StateContext = createContext('')

// wrap our app and provide the data layer
export function StateProvider({reducer, initialState, children}) {

    const [state,dispatch] = useReducer(reducer, initialState)

    return (
    <StateContext.Provider value={{state,dispatch}}>
        {children}
    </StateContext.Provider>
    )
}

// Pull Out Information from the data layer
export const useStateValue = (name)=> useContext(StateContext).state[name]

export const useDispatch = ()=> useContext(StateContext).dispatch
